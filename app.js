App({
  globalData: { //全局变量
    token: ''
  },
  onLaunch: function () { //小程序加载完
    //1.先从缓存中取出token
    const token = wx.getStorageSync('token');
    //2.判断token是否有值
    if (token) { //已经有token了,验证token 是否过期
      //验证token是否过期
      this.check_token(token);
    }else { //没有token,进行登陆操作
      this.login()
    }
  },
  check_token(token) { //验证token是否过期
    wx.request({
      url: 'url',
      header: {
        token
      },
      success:  (res) =>  {
        if(!res.data.errCode) { //验证成功
          this.globalData.token = token;
        }else {
          //验证失败
          this.login()
        }
      },
      fail: function(err) {
        console.log(err);
      }
    })
  },
  login() {
    //登陆操作
    wx.login({
      //code有效期为5分钟
      success: (res) => {
        //1.获取code
        const code = res.code;

        //2.将code发送给服务器
        wx.request({
          url: 'url',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            //1.取出token
            const token = res.data.token
            //2.将token保存在globalData中
            this.globalData.token = token
            //3.进行本地存储
            wx.setStorageSync('token', token);
          }
        })
      }
    })
  }
})