const purgeCssPlugin = require('eleventy-plugin-purgecss');
const format = require('date-fns/format')

module.exports = function (eleventyConfig) {
  // add `date` filter
  eleventyConfig.addFilter('date', function (date, dateFormat) {
    return format(date, dateFormat)
  })

  // Копирует содержимое assets в выходной каталог
  eleventyConfig.addPassthroughCopy('assets');

  eleventyConfig.addPlugin(purgeCssPlugin, {
    confirm: './purgecss.config.js',
    quiet: false,
  })
};
