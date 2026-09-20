<script lang="ts">
  import type { NavRoute } from '@/lib/core/types';
  import type { Snippet } from 'svelte';
  import NavItems from './NavItems.svelte';

  interface LayoutProps {
    navRoutes: NavRoute[];
    children: Snippet;
  }

  const { navRoutes: routes, children }: LayoutProps = $props();
</script>

<div class="drawer-open drawer">
  <input id="main-drawer" type="checkbox" class="drawer-toggle inline" />

  <div class="drawer-content">
    <div class="overflow-x-hidden overflow-y-auto p-4">
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>

  <div class="drawer-side overflow-visible">
    <label for="main-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="flex min-h-full w-14 flex-col items-center-safe bg-base-200">
      <NavItems navRoutes={routes} />
    </div>
  </div>
</div>
