const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				screens: {
					sm: "640px",
					md: "768px",
					lg: "1024px",
					xl: "1260px",
				},
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				primary: "#0C6DFFCF",
				info: "#2496FF",
				teal: "#20EDE1",
				danger: {
					100: "#EE1D8EA1",
					200: "#F657A4",
					300: "#EC2A2A",
				},
				purple: "#4859F2",
				violet: "#831FB2",
				skin: {
					100: "#1A1830",
					200: "#010314",
					light: "#F1FBFE",
				},
				dark: "#000",
				light: "#fff",
			},
			fontFamily: {
				// heading: [
				// 	"var(--font-roboto)",
				// 	...fontFamily.sans,
				// ],
				main: ["var(--font-roboto)", ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};
