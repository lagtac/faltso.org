module.exports = {
  content: ['src/_site/**/*.html'],
  css: ['src/_site/assets/css/build.css'],
  extractors: [
    {
      extractor: content => content.match(/[A-z0-9-:\/]+/g) || [],        
      extensions: ['html']
    }
  ]
}
