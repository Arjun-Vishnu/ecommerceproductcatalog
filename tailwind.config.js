/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			// ### Primary

			Orange: "hsl(26, 100%, 55%)",
			PaleOrange: "hsl(25, 100%, 94%)",

			// ### Neutral

			VeryDarkBlue: "hsl(220, 13%, 13%)",
			DarkGrayishBlue: "hsl(219, 9%, 45%)",
			GrayishBlue: "hsl(220, 14%, 75%)",
			LightGrayishBlue: "hsl(223, 64%, 98%)",
			White: "hsl(0, 0%, 100%)",

			// with 75% opacity for lightbox background
			Black: "hsl(0, 0%, 0%)",
		},
        fontFamily: {
            KumbhSans: "'Kumbh Sans', sans-serif",
        },
		extend: {},
	},
	plugins: [],
};


