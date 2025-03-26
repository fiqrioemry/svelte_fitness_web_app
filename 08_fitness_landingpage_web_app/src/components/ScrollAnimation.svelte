<script lang="ts">
  import { onMount } from 'svelte';

  export let delay = 0;
  export let duration = 1000;
  export let easing = 'cubic-bezier(0.4, 0, 0.2, 1)';

  let element: HTMLElement;
  let observer: IntersectionObserver;

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  });
</script>

<div
  bind:this={element}
  class="opacity-0 translate-y-4 transition-all duration-1000 ease-out"
  style="transition-delay: {delay}ms; transition-duration: {duration}ms; transition-timing-function: {easing};"
>
  <slot />
</div>

<style>
  .animate-in {
    opacity: 1;
    transform: translateY(0);
  }
</style> 