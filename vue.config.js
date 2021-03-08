/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
    //baseUrl: '/search/'
  productionSourceMap: false,

  outputDir: 'search/dist',
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/search/'
    : '/'
  }


