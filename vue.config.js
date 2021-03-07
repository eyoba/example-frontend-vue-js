/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
    //baseUrl: '/search/'
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/search/'
    : '/'
  }


