/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
    //baseUrl: '/search/'
  productionSourceMap: false,
  outputDir: 'dist/search',
  indexPath: 'templates/index.html',
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/search/'
    : '/'
  }


