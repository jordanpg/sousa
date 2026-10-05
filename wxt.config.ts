import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-svelte'],
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  manifest: () => ({
    key: import.meta.env.WXT_MANIFEST_KEY,
    permissions: ['storage', 'identity'],
    homepage_url: "https://github.com/jordanpg/sousa",
    browser_specific_settings: {
      gecko: {
        id: import.meta.env.WXT_FIREFOX_ID,
        data_collection_permissions: {
          required: ["none"]
        }
      }
    }
  })
});
