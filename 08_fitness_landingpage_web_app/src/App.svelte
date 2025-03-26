<script>
  import "./app.css";
  import routes from './routes';
  import Router from 'svelte-spa-router';
  import Header from './components/Header.svelte';
</script>

<Header />

<Router {routes} />
