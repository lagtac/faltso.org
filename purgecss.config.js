module.exports = {
  content: ['src/_site/**/*.html'],
  css: ['src/_site/assets/css/build.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-z0-9-:\/]+/g) || []
        }
      },
      extensions: ['html']
    }
  ]
}
