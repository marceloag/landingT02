import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push']
      }
    })
  ]
});
