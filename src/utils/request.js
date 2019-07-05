import ENV from './config.js'
/**
 * @param {*} url 请求 URL
 * @param {*} method 请求方式
 * @param {*} data 请求参数
 * @param {*} header 请求头
 * @param {*} showLoading 是否展示 loading
 * @param {*} disposeError 是否自己处理错误信息 
 */
const request = ({
  url,
  data,
  method,
  header = {},
  showLoading = true,
  disposeError = false
}) => {
  const AccessToken = uni.getStorageSync('AccessToken')
  return new Promise((resolve, reject) => {
    uni.request({
      url: ENV.url + url,
      data: data,
      method: method,
      header: Object.assign({
        ClientType: "wechat",
        CityIdentity: 'CTU',
        Authorization: `Bearer ${AccessToken}`
      }, header),
      success: (res) => {
        if (res.data.Status == 1) {
          resolve(res.data)
        } else {
          console.log(ENV.url + url + ' 请求失败')
          if (showError) {
            resolve(res)
          } else {
            uni.showToast({
              title: res.Message,
              icon: 'none',
              duration: 2000
            });
            reject(res)
          }
        }
      },
      fail: (error) => {
        reject(error)
      }
    })
  })
}

export default request;
