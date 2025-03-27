<script lang="ts">
  import { onMount } from 'svelte';
  import Menu from "lucide-svelte/icons/menu";
  import { link, push, location } from 'svelte-spa-router';
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Sheet from "$lib/components/ui/sheet/index.js";

  $: currentPath = $location;
  $: isAuthPage = currentPath === '/login' || currentPath === '/register';

  let activeSection = '';
  const handleScroll = () => {
    const sections = ['features', 'testimonials', 'pricing', 'faq'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          activeSection = id;
          break;
        }
      }
    }
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class="bg-white shadow-sm fixed w-full z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <!-- Logo tetap tampil -->
      <div class="flex items-center">
        <a href="/" use:link class="text-2xl font-bold text-primary">FitLife</a>
      </div>

      <!-- Menu desktop -->
      {#if !isAuthPage}
        <div class="hidden md:flex items-center space-x-8">
          <a href="#features" class="nav-btn {activeSection === 'features' ? 'text-primary font-semibold' : ''}">Fitur</a>
          <a href="#testimonials" class="nav-btn {activeSection === 'testimonials' ? 'text-primary font-semibold' : ''}">Testimoni</a>
          <a href="#pricing" class="nav-btn {activeSection === 'pricing' ? 'text-primary font-semibold' : ''}">Harga</a>
          <a href="#faq" class="nav-btn {activeSection === 'faq' ? 'text-primary font-semibold' : ''}">FAQ</a>
          <a href="/login" use:link class="nav-btn {currentPath === '/login' ? 'text-primary font-semibold underline' : ''}">Masuk</a>
          <Button on:click={() => push('/register')} class="{currentPath === '/register' ? 'bg-primary text-white' : ''}">Daftar</Button>
        </div>
      {/if}

      <!-- Menu mobile -->
      {#if !isAuthPage}
        <div class="md:hidden flex items-center">
          <Sheet.Root>
            <Sheet.Trigger><Menu /></Sheet.Trigger>
            <Sheet.Content class="bg-white">
              <Sheet.Header><Sheet.Title></Sheet.Title></Sheet.Header>
              <div class="flex flex-col justify-center space-y-4 mt-10 items-center">
                <a href="#features" class="block nav-btn {activeSection === 'features' ? 'text-primary font-semibold' : ''}">Fitur</a>
                <a href="#testimonials" class="block nav-btn {activeSection === 'testimonials' ? 'text-primary font-semibold' : ''}">Testimoni</a>
                <a href="#pricing" class="block nav-btn {activeSection === 'pricing' ? 'text-primary font-semibold' : ''}">Harga</a>
                <a href="#faq" class="block nav-btn {activeSection === 'faq' ? 'text-primary font-semibold' : ''}">FAQ</a>
                <a href="/login" use:link class="nav-btn {currentPath === '/login' ? 'text-primary font-semibold underline' : ''}">Masuk</a>
                <Button on:click={() => push('/register')} class="{currentPath === '/register' ? 'bg-primary text-white' : ''}">Daftar</Button>
              </div>
            </Sheet.Content>
          </Sheet.Root>
        </div>
      {/if}
    </div>
  </div>
</nav>
