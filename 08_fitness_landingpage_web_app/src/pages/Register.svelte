   
<script>
    import { toast } from "svelte-sonner";
    import { link } from 'svelte-spa-router';
    import { Button } from "$lib/components/ui/button/index.ts";

  
    let email = '';
    let name ="";
    let password = '';
    let confirm_password = '';
    let terms = false;

    function isValid() {
    return (
    !email.trim().length ||
    !name.trim().length ||
    !password.trim().length ||
    !confirm_password.trim().length  ||    !terms
  );
}

    function showNotification(event) {
      event.preventDefault();
  
      const data = {
        email,
        name,
        password,
        terms,
      };
  
      toast.success("Demo Fitur Registerasi Berhasil", {
        description: JSON.stringify(data, null, 2),
      });
    }

    
    function showAlert(event) {
      event.preventDefault();
      toast.success("Fitur ini hanya sebuah demo");
    }

  </script>
  

    <!-- Register Form -->
    <div
      class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-secondary">
            Daftar Akun Baru
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Atau
            <a
              href="/login"
              use:link
              class="font-medium text-primary hover:text-opacity-80"
            >
              masuk ke akun yang sudah ada
            </a>
          </p>
        </div>
        <form
            action="#"
            method="POST"
            class="mt-8 space-y-6"
            on:submit={showNotification}
        >
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="name" class="sr-only">Nama Lengkap</label>
              <input
                id="name"
                name="name"
                bind:value={name}
                type="text"
                required
                  class="appearance-none bg-transparent rounded-none relative block w-full px-3 py-2 border  rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Nama Lengkap"
              />
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                bind:value={email}
                required
                     class="appearance-none bg-transparent relative block w-full px-3 py-2 border  focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                bind:value={password}
                required
                class="appearance-none bg-transparent relative block w-full px-3 py-2 border focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label for="confirm-password" class="sr-only"
                >Konfirmasi Password</label
              >
              <input
                id="confirm-password"
                name="password_confirm"
                type="password"
                bind:value={confirm_password}
                required
              class="appearance-none bg-transparent rounded-none relative block w-full px-3 py-2 border rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Konfirmasi Password"
              />
            </div>
          </div>

          <div class="flex items-center">
            <input
            id="terms"
            name="terms"
            type="checkbox"
            bind:checked={terms}
            required
            class="h-4 w-4 rounded bg-white border text-primary appearance-none checked:bg-primary checked:border-transparent focus:outline-none"
          />
            <label for="terms" class="ml-2 block text-sm">
              Saya setuju dengan
              <span class="text-primary font-medium"
                >Syarat & Ketentuan</span
              >
            </label>
          </div>

          <div>
            <Button disabled={isValid()} type="submit">
                Daftar
              </Button>
          </div>
        </form>
      </div>
    </div>
