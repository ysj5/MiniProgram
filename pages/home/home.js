// pages/home/home.js
Page({
 handleShowToast() {
    wx.showToast({
      title: '加载中',
      duration: 3000,
      icon: "loading" //图标也可以使用本地图片自定义
    })
 },
 handleShowModal() {
   wx.showModal({
      title: "标题",
      content: "弹窗内容",
      success: function(res) {
        if(res.cancel) {
          console.log("用户点击了取消");
        }
        if(res.confirm) {
          console.log("用户点击了确定");
        }
      }
   });
 },
 onShareAppMessage(options) { //分享
  return {
    title: "分享的标题",
    path: "/pages/about/about", //打开分享的小程序时进入哪个页面
    // imageUrl: "" //分享的封面使用的图片
  }
 }
})