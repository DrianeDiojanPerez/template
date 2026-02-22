// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	adapter: node({ mode: "standalone" }),
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		react({
			babel: {
				plugins: [
					[
						"babel-plugin-react-compiler",
						{
							target: "19",
						},
					],
				],
			},
		}),
	],
});
