/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
    //baseUrl: '/search/'
  productionSourceMap: false,


  assetsDir: process.env.NODE_ENV === 'production'
    ? '/search/'
    : '/',

  baseUrl: process.env.NODE_ENV === 'production'
    ? '/search/'
    : '/'
  }


