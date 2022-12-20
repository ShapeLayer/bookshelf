module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget('./src/stylus')
  eleventyConfig.addPassthroughCopy('assets/css')
  eleventyConfig.addPassthroughCopy('static')
}