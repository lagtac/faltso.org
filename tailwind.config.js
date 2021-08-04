module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.md',
    './src/*.md',
    './src/*.html',
  ],
  darkMode: false,
  theme: {
    extend: {},
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
