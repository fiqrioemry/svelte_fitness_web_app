<script lang="ts">
  import { push } from 'svelte-spa-router';
  import { Button } from "$lib/components/ui/button/index.js";
</script>


  <!-- Pricing Section -->
  <div  id="pricing"  class="py-14 mt-2 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div       
        data-aos="fade-down"
        data-aos-delay="50" class="text-center">
        <h2 class="text-3xl font-extrabold text-secondary sm:text-4xl">
          Pilih Paket yang Tepat
        </h2>
        <p class="mt-4 text-lg text-gray-500">
          Pilih paket yang sesuai dengan kebutuhan Anda
        </p>
      </div>
      <div  class="mt-12 grid gap-8 lg:grid-cols-3">
        <!-- Free Plan -->
        <div 
          data-aos="fade-up"
          data-aos-delay="100"
          class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="px-6 py-8">
            <h3 class="text-2xl font-bold text-secondary">Free</h3>
            <p class="mt-4 text-gray-500">Cocok untuk pemula</p>
            <p class="mt-8">
              <span class="text-4xl font-extrabold text-secondary">Rp 0</span>
              <span class="text-gray-500">/bulan</span>
            </p>
            <ul class="mt-6 space-y-4">
              <li class="flex items-center">
                <svg
                  class="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500"
                  >Akses dasar program latihan</span
                >
              </li>
              <li class="flex items-center">
                <svg
                  class="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Forum komunitas</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Artikel kesehatan</span>
              </li>
            </ul>
            <Button variant="secondary" class="mt-8" on:click={()=>push("/login")}>Mulai gratis</Button>
          </div>
        </div>
        <!-- Premium Plan -->
        <div
    
          class="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105 border-2 border-primary"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="px-6 py-8">
            <h3 class="text-2xl font-bold text-secondary">Premium</h3>
            <p class="mt-4 text-gray-500">Paling populer</p>
            <p class="mt-8">
              <span class="text-4xl font-extrabold text-secondary"
                >Rp 99.000</span
              >
              <span class="text-gray-500">/bulan</span>
            </p>
            <ul class="mt-6 space-y-4">
              <li class="flex items-center">
                <svg
                  class="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Semua fitur Free</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500"
                  >Program latihan personal</span
                >
              </li>
              <li class="flex items-center">
                <svg
                  class="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500"
                  >Konsultasi dengan trainer</span
                >
              </li>
              <li class="flex items-center">
                <svg
                  class="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500"
                  >Video tutorial eksklusif</span
                >
              </li>
            </ul>
            <Button class="mt-8" on:click={()=>push("/login")}
          >
            Pilih Premium
          </Button>
          </div>
        </div>
        <!-- Pro Plan -->
        <div      
        data-aos="fade-up"
        data-aos-delay="300" class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="px-6 py-8">
            <h3 class="text-2xl font-bold text-secondary">Pro</h3>
            <p class="mt-4 text-gray-500">Untuk atlet serius</p>
            <p class="mt-8">
              <span class="text-4xl font-extrabold text-secondary"
                >Rp 199.000</span
              >
              <span class="text-gray-500">/bulan</span>
            </p>
            <ul class="mt-6 space-y-4">
              <li class="flex items-center">
                <svg
                  class="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Semua fitur Premium</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Program latihan khusus</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Konsultasi 24/7</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Analisis performa</span>
              </li>
            </ul>
            <Button variant="secondary" class="mt-8" on:click={()=>push("/login")}>Pilih pro</Button>
          </div>
        </div>
      </div>
    </div>
  </div>