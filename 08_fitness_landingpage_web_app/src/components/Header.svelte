<script lang="ts">
  import { link } from 'svelte-spa-router';
  import { onMount } from 'svelte';

  let mobileMenuButton: HTMLElement | null = null;
  let mobileMenu: HTMLElement | null = null;
  let isMenuOpen = false;

  function handleClickOutside(event: MouseEvent) {
    if (mobileMenu && !mobileMenu.contains(event.target as Node) && 
        mobileMenuButton && !mobileMenuButton.contains(event.target as Node)) {
      isMenuOpen = false;
      mobileMenu.classList.add('hidden');
    }
  }

  function handleMobileMenu() {
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle("hidden");
      });

      document.addEventListener('click', handleClickOutside);

      // Close mobile menu when clicking a link
      const mobileMenuLinks = mobileMenu.querySelectorAll("a");
      mobileMenuLinks.forEach((link: Element) => {
        link.addEventListener("click", () => {
          isMenuOpen = false;
          mobileMenu.classList.add("hidden");
        });
      });
    }
  }

  onMount(() => {
    mobileMenuButton = document.getElementById("mobile-menu-button");
    mobileMenu = document.getElementById("mobile-menu");
    handleMobileMenu();

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<nav class="bg-white shadow-sm fixed w-full z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <a href="/" use:link class="text-2xl font-bold text-primary">FitLife</a>
      </div>
      <div class="hidden md:flex items-center space-x-8">
        <a href="#features" class="text-secondary hover:text-primary transition-colors">Fitur</a>
        <a href="#testimonials" class="text-secondary hover:text-primary transition-colors">Testimoni</a>
        <a href="#pricing" class="text-secondary hover:text-primary transition-colors">Harga</a>
        <a href="#faq" class="text-secondary hover:text-primary transition-colors">FAQ</a>
        <a href="/login" use:link class="text-secondary hover:text-primary transition-colors">Masuk</a>
        <a href="/register" use:link class="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">Daftar</a>
      </div>
      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center">
        <button aria-label="menu"
          id="mobile-menu-button"
          class="text-secondary hover:text-primary transition-colors"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <!-- Mobile menu -->
  <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
    <div class="px-4 py-3 space-y-3">
      <a href="/#features" class="block text-secondary hover:text-primary transition-colors">Fitur</a>
      <a href="/#testimonials" class="block text-secondary hover:text-primary transition-colors">Testimoni</a>
      <a href="/#pricing" class="block text-secondary hover:text-primary transition-colors">Harga</a>
      <a href="/#faq" class="block text-secondary hover:text-primary transition-colors">FAQ</a>
      <a href="/login" use:link class="block text-secondary hover:text-primary transition-colors">Masuk</a>
      <a href="/register" use:link class="block text-primary hover:text-opacity-80 transition-colors">Daftar</a>
    </div>
  </div>
</nav> 