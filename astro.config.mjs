// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        host: true,
        port: 3000,
    },
    site: 'https://example.com',
});
