<script>
  import "./app.css";
  import routes from './routes';
  import Router from 'svelte-spa-router';
  import Header from './components/Header.svelte';
  import { Toaster } from "$lib/components/ui/sonner";
</script>

<Header />
<Toaster />
 <slot />
 <main class="overflow-hidden">
<Router {routes} />
</main>
