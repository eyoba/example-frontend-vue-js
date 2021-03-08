/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
    //baseUrl: '/search/'
  productionSourceMap: false,
  //outputDir: '../dist',
  //assetsDir: 'static',
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/search22/'
    : '/'
  }


