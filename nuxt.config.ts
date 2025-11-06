// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	app: {
		head: {
			title: "Weather App",
			link: [
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
				},
			],
		},
	},
	runtimeConfig: {
		public: {
			weatherApiKey: process.env.WEATHER_API_KEY,
		},
	},
	typescript: {
		typeCheck: true,
		tsConfig: {
      
		},
	},
	devtools: { enabled: true },

	modules: [
		"@nuxt/image",
		"@nuxt/eslint",
		"@nuxt/fonts",
		"@nuxt/icon",
		"@pinia/nuxt",
	],

	vite: {
		plugins: [tailwindcss()],
	},
	css: ["~/assets/css/main.css"],
})
