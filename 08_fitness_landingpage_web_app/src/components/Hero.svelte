<script lang="ts">
  import { link } from 'svelte-spa-router';
</script>



<div class="relative bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-secondary sm:text-5xl md:text-6xl">
            <span class="block">Transformasi Tubuh</span>
            <span class="block text-primary">Bersama FitLife</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Program latihan personal yang dirancang khusus untuk membantu Anda mencapai tujuan kebugaran ideal.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="/register" use:link class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 md:py-4 md:text-lg md:px-10">
                Mulai Sekarang
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="/#pricing" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Pilih Paket
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</div> 