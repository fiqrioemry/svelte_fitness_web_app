<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  export let message = '';
  export let type: 'success' | 'error' | 'info' = 'info';
  export let duration = 3000;

  let show = true;

  onMount(() => {
    const timer = setTimeout(() => {
      show = false;
    }, duration);

    return () => clearTimeout(timer);
  });
</script>

{#if show}
  <div
    class="fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg"
    class:bg-green-500={type === 'success'}
    class:bg-red-500={type === 'error'}
    class:bg-blue-500={type === 'info'}
    class:text-white
    transition:fly={{ y: 100, duration: 300 }}
  >
    {message}
  </div>
{/if} 