<script lang="ts">
  import type { NavRoute } from '@/lib/core/types';
  import { link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';

  interface NavItemsProps {
    navRoutes: NavRoute[];
  }

  const { navRoutes: routes }: NavItemsProps = $props();
</script>

<ul class="menu w-full grow">
  {#each routes as { path, name, Component, active: activePath } (name)}
    <li>
      <a
        class="tooltip btn tooltip-right btn-circle"
        data-tip={name}
        href={path}
        use:link
        use:active={{
          path: activePath ?? path,
          className: 'btn-primary',
        }}
      >
        <Component />
        <span class="hidden">{name}</span>
      </a>
    </li>
  {/each}
</ul>
