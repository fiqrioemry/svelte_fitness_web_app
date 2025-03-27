<script lang="ts">
  import { link, push } from 'svelte-spa-router';
  import { Button } from "$lib/components/ui/button/index.ts";
  import { buttonVariants } from "$lib/components/ui/button";
  import heroImage from '$assets/hero.png'; // <= alias src/assets/
</script>

<div class="relative mt-12 bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto lg:flex lg:items-center">
    <!-- Kiri: Konten utama -->
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32">
      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 
            data-aos="fade-right"
            data-aos-delay="50"
            class="text-4xl tracking-tight font-extrabold text-secondary sm:text-5xl md:text-6xl"
          >
            <span class="block">Transformasi Tubuh</span>
            <span class="block text-primary">Bersama FitLife</span>
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="100"
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
          >
            Program latihan personal yang dirancang khusus untuk membantu Anda mencapai tujuan kebugaran ideal.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            class="mt-5 sm:mt-8 items-center sm:flex sm:justify-center lg:justify-start"
          >
            <div class="rounded-md shadow">
              <Button on:click={()=>push('/register')} size="lg">Mulai sekarang</Button>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="/#pricing" class={`${buttonVariants({ variant: "secondary" })} h-12`}>
                Pilih Paket
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Kanan: Gambar Hero -->
    <div class="hidden lg:block lg:w-1/2 relative" data-aos="fade-left">
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src={heroImage} alt="Hero Image" class="w-96 h-auto object-cover ml-auto" />
    </div>
  </div>
</div>
