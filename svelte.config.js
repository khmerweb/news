//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */

const mdsvexOptions = {
	extensions: ['.md'],
}

const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		
		paths: { base: process.argv.includes('dev') ? '' : process.env.BASE_PATH },
	},

	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]

};

export default config;
