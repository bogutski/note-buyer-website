const purgeCssPlugin = require('eleventy-plugin-purgecss');

module.exports = function (eleventyConfig) {
  // Копирует содержимое assets в выходной каталог
  eleventyConfig.addPassthroughCopy('assets');

  eleventyConfig.addPlugin(purgeCssPlugin, {
    confirm: './purgecss.config.js',
    quiet: false,
  })
};
