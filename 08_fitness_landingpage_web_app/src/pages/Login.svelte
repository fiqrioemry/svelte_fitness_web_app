   
    <script>
        function showDemoNotification(
          event,
          customMessage = "Ini adalah demo aplikasi. Fitur login belum diimplementasikan."
        ) {
          event.preventDefault();
          const notification = document.getElementById("demo-notification");
          notification.textContent = customMessage;
          notification.classList.remove("translate-y-full", "opacity-0");
  
          setTimeout(() => {
            notification.classList.add("translate-y-full", "opacity-0");
          }, 3000);
        }
      </script>
   
   <!-- Login Form -->
    <div
      class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-secondary">
            Masuk ke <span class="text-primary">FitLife</span>
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Atau
            <a
              href="register.html"
              class="font-medium text-primary hover:text-opacity-80"
            >
              daftar akun baru
            </a>
          </p>
        </div>
        <form
          class="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email" class="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
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
                class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Ingat saya
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-primary hover:text-opacity-80"
              >
                Lupa password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Masuk
            </button>
          </div>
        </form>
      </div>
    </div>
