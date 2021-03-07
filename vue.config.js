/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
    //baseUrl: '/search/'
  productionSourceMap: false,

  indexPath: 'public/index.html',
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/search/'
    : '/'
  }


