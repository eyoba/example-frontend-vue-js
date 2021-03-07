/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
    //baseUrl: '/search/'
  productionSourceMap: false,

 
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/search/'
    : '/'
  }


