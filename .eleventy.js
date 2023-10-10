module.exports = function (eleventyConfig) {
  // Копирует содержимое assets в выходной каталог
  eleventyConfig.addPassthroughCopy('assets');
};
