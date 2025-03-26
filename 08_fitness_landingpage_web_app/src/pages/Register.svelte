   
<script>
    import { link } from 'svelte-spa-router';
    import { toast } from "svelte-sonner";
  
    let email = '';
    let name ="";
    let password = '';
    let confirm_password = '';
    let terms = false;
  
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
              href="login.html"
              class="font-medium text-primary hover:text-opacity-80"
            >
              masuk ke akun yang sudah ada
            </a>
          </p>
        </div>
        <form
          class="mt-8 space-y-6"
          action="#"
          method="POST"
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
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
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
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
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
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
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
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
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
              class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label for="terms" class="ml-2 block text-sm text-gray-900">
              Saya setuju dengan
              <button 
                class="font-medium text-primary hover:text-opacity-80"
                >Syarat & Ketentuan</button
              >
            </label>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
