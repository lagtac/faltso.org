module.exports = {
  purge: [
    './src/*.md',
    './src/*.html',
    './src/**/*.html',
    './src/**/*.md',
  ],
  darkMode: false,
  theme: {
    extend: {
		backgroundImage: theme => ({
			"site-pattern": "url('/assets/img/Rwilco2.png')",
			"logo-image": "url('/assets/img/faltso-2.jpg')",
		})
	},
  },
  variants: {
	  extend: {
		  textColor: ["visited"],
	  }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
