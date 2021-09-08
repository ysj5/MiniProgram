export default function request(options) {
  const baseUrl = "http://httpbin.org"
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}
// export default function request(options) {
//   const baseUrl = "http://www.baidu,com"
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: baseUrl + options.url,
//       method: options.method || 'get',
//       data: options.data || {},
//       success: function(res) {
//         resolve(res)
//       },
//       fail: function(err) {
//         reject(err)
//       }
//     })
//   })
// }