<script lang="ts">
  import Layout from "@/components/Layout.svelte";
  import Router from "svelte-spa-router";
  import routes, { navigation } from "./routes";

</script>

<main class="w-md h-96">
  <Layout navRoutes={navigation}>
    <Router routes={routes} />
  </Layout>
</main>

