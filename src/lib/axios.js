/**
 * axios.js 文件主要是针对axios进行二次封装
 */

import axios from 'axios'
import { BaseURL } from '@/config'
import { getToken } from '@/lib/util'

export default class HttpRequest {
  constructor (baseUrl = BaseURL) {
      this.baseUrl = BaseURL,
      this.queue = {   // 事件队列
      }
  }
  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  interceptors (instance, url) {
    instance.interceptors.request.use( (config) => {
      if (!Object.keys(this.queue).length) {
        // Spin.show()
      }
      this.queue[url] = true
      config.headers['Authorization'] = getToken()
      return config
    }, (error) => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use( (res) => {
      const { data } = res
      return data
    }, (error) => {
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    return instance(options)
  }
}
