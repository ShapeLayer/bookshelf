const dateUtil = require('./_filters/dateUtil.js')

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget('./src/stylus')
  eleventyConfig.addPassthroughCopy('assets/css')
  eleventyConfig.addPassthroughCopy('static')
  eleventyConfig.addFilter('get_year', dateUtil.getYear)
}