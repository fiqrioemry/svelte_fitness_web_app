<script>
    import { push } from 'svelte-spa-router';
  </script>
  
  <nav class="bg-white shadow-sm fixed w-full z-50">
    <button on:click={() => push('/')} class="text-blue-500">Home</button>

  </nav>

  <nav class="bg-white shadow-sm fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <button on:click={() => push('/')} class="text-2xl font-bold text-primary">FitLife</button>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            class="text-secondary hover:text-primary transition-colors"
            >Fitur</a
          >
          <a
            href="#testimonials"
            class="text-secondary hover:text-primary transition-colors"
            >Testimoni</a
          >
          <a
            href="#pricing"
            class="text-secondary hover:text-primary transition-colors"
            >Harga</a
          >
          <a
            href="#faq"
            class="text-secondary hover:text-primary transition-colors"
            >FAQ</a
          >
          <button on:click={() => push('/login')}   class="text-secondary hover:text-primary transition-colors">Login</button>
          <button on:click={() => push('/register')}   class="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">Register</button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            id="mobile-menu-button"
            aria-label="menu"
            class="text-secondary hover:text-primary transition-colors"
          >
            <svg
              fill="none"
              class="h-6 w-6"
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
        <a
          href="#features"
          class="block text-secondary hover:text-primary transition-colors"
          >Fitur</a
        >
        <a
          href="#testimonials"
          class="block text-secondary hover:text-primary transition-colors"
          >Testimoni</a
        >
        <a
          href="#pricing"
          class="block text-secondary hover:text-primary transition-colors"
          >Harga</a
        >
        <a
          href="#faq"
          class="block text-secondary hover:text-primary transition-colors"
          >FAQ</a
        >
        <a
          href="login.html"
          class="block text-secondary hover:text-primary transition-colors"
          >Masuk</a
        >
        <a
          href="register.html"
          class="block text-primary hover:text-opacity-80 transition-colors"
          >Daftar</a
        >
      </div>
    </div>
  </nav>
  


  <style lang="postcss">
    @reference "tailwindcss";
    :global(html) {
      scroll-behavior: smooth;
      background-color: theme(--color-gray-100);
    }
    [data-aos] {
        transition-duration: 800ms !important;
    }
  </style>