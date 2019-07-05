import request from '@/utils/request'
let https = {
  //  获取开通城市
  GetOpenCity(data) {
    return request({
      url: '/api/setting/GetOpenCity',
      data,
      method: 'GET',
      header: {}
    })
  },
}

export default https;