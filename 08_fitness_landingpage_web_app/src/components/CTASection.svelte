<script lang="ts">
  import { link } from 'svelte-spa-router';
  import { buttonVariants } from "$lib/components/ui/button";
</script>



<div class="bg-primary">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
      <span class="block">Siap untuk memulai perjalanan fitness Anda?</span>
      <span class="block text-white">Daftar sekarang dan dapatkan diskon 20%!</span>
    </h2>
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div class="inline-flex rounded-md shadow">

        <a href="/register" use:link class={buttonVariants({ variant: "primary" })}>
          Daftar sekarang
        </a>
      </div>
    </div>
  </div>
</div> 