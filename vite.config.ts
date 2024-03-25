import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			strategies: 'generateSW',
			srcDir: 'src',
			filename: 'service-worker.ts',
			registerType: 'autoUpdate',
			injectRegister: 'auto',
			includeAssets: ['favicon.png', 'apple-touch-icon.jpg', 'mask-icon.jpg'],
			manifest: {
				name: 'Mercado Organizado',
				short_name: 'mercado-organizado',
				description:
					'Gerenciamento de lista de compras recorrentes, únicas e/ou compartilhadas com controle de estoque e preços',
				start_url: '/',
				scope: '/',
				display: 'standalone',
				background_color: '#ffffff',
				theme_color: '#34495E',
				icons: [
					{
						src: 'pwa-192x192.jpg',
						sizes: '192x192',
						type: 'image/jpeg'
					},
					{
						src: 'pwa-512x512.jpg',
						sizes: '512x512',
						type: 'image/jpeg'
					}
				]
			},
			devOptions: {
				enabled: true
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
