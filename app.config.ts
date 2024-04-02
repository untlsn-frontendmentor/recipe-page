import { defineConfig } from '@solidjs/start/config';
import unocss from 'unocss/vite';

export default defineConfig({
	ssr:    true,
	server: {
		prerender: { routes: ['/'] },
	},
	vite: {
		plugins: [
			unocss() as any,
		],
	},
});
