App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) { //初始化时执行一次
    //发送网络请求
    //获取用户信息
    console.log("小程序初始化完成：onLaunch");
    console.log(options.scene);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) { //每次进入都执行一次
    console.log("界面显示出来： onShow");
    //判断小程序的进入场景
    console.log(options.scene);
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("界面被隐藏时会执行：onHide");
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData: { //存放全局数据
    name: "ysj",
    age: 18
  }
})
