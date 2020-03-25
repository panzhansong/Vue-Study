/**
 * 封装一些项目经常中使用的方法
 */
import Cookies from 'js-cookies'

/**
 * 动态设置页面名称 默认值为 vue-study
 * @param {*} title
 */
export const setTitle = (title) => {
  window.document.title = title || 'vue-study'
}

/**
 * 将token设置在cookies上面
 * @param {*} tokenName  定义cookies上面属性名称
 * @param {*} token  定义cookies上面属性值
 */
const setToken = (tokenName = 'token', token) => {
  Cookies.set(tokenName,token)
}

/**
 * 获取cookies上面的token
 * @param {*} tokenName 定义cookies上面属性名称
 */
const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}

export default {
  setToken,
  getToken
}
