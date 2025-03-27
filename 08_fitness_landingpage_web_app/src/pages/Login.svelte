   
<script>
    import { link } from 'svelte-spa-router';
    import { toast } from "svelte-sonner";
    import { Button } from "$lib/components/ui/button/index.ts";


    let email = '';
    let password = '';
    let rememberMe = false;
  
    function showNotification(event) {
      event.preventDefault();
  
      const data = {
        email,
        password,
        rememberMe,
      };
  
      toast.success("Demo Fitur Login Berhasil", {
        description: JSON.stringify(data, null, 2),
      });
    }

    function isValid() {
    return (
    !email.trim().length ||
    !name.trim().length ||
    !rememberMe
  )}

    function showAlert(event) {
      event.preventDefault();
      toast.success("Fitur Lupa password tidak aktif didemo");
    }

  </script>
  
   
   <!-- Login Form -->
    <div
      class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-secondary">
            Masuk ke <span class="text-primary">FitLife</span>
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Atau
            <a href="/register" use:link  class="font-medium text-primary hover:text-opacity-80">daftar akun baru</a>
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
              <label for="email" class="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                bind:value={email}
                required
                class="appearance-none bg-transparent rounded-none relative block w-full px-3 py-2 border border-gray-300  rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                bind:value={password}
                type="password"
                required
                class="appearance-none bg-transparent rounded-none relative block w-full px-3 py-2 border border-gray-300   rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                bind:checked={rememberMe}
                  class="h-4 w-4 rounded bg-white border text-primary appearance-none checked:bg-primary checked:border-transparent focus:outline-none"
              />
              <label for="remember-me" class="ml-2 block text-sm">
                Ingat saya
              </label>
            </div>

            <div class="text-sm">
              <button on:click={showAlert} class="text-primary  font-medium"
              >
                Lupa password?
              </button>
            </div>
          </div>

          <div>
            <Button disabled={isValid()} type="submit">
              Masuk
            </Button>
          </div>
        </form>
      </div>
    </div>
