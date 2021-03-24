import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['content-type'] = 'application/x-www-form-urlencoded'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code && res.code !== 0) {
      Message({
        message: res.error || 'Error',
        type: 'error',
        duration: 2 * 1000
      })

      if (res.code === 2000) {
        MessageBox.confirm('登录已过期', '警告', {
          confirmButtonText: '重新登陆',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          location.reload()
        })
      }
      return Promise.reject(res.error || 'Error')
    } else {
      return res
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 2 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
