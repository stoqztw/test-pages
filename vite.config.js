import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
	base: "/test-pages/",
	build: {
		outDir: "docs",
		rolldownOptions: {
			input: {
				main: resolve(import.meta.dirname, "index.html"),
				// nested: resolve(import.meta.dirname, 'nested/index.html'),
			},
		},
	},
});
