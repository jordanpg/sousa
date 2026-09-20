<script lang="ts">
  import Layout from '@/components/Layout.svelte';
  import Router from 'svelte-spa-router';
  import routes, { navigation } from './routes';
</script>

<main class="h-96 w-md">
  <Layout navRoutes={navigation}>
    <Router {routes} />
  </Layout>
</main>
