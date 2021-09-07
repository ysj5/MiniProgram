import request from "../../network/network"
// pages/home/home.js
Page({

 /**
  * 页面的初始数据
  */
 data: {

 },

 /**
  * 生命周期函数--监听页面加载
  */
 onLoad: function (options) { //请求网络数据
  request({
    url: "/post",
    method: "post"
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
  // 原生发送网络请求
  // wx.request({
  //   url: 'url',
  //   methods: "post",
  //   data: {
  //     type: "sell"
  //   },
  //   success: function(res) { //请求程成功的回调
  //     console.log(res);
  //   }
  // })

  //2.get请求携带参数
  // wx.request({
  //   url: 'url',
  //   data: {
  //     type: "sell"
  //   },
  //   success: function(res) {
  //     console.log(res);
  //   }
  // })
  //3.post请求携带参数
  // wx.request({
  //   url: 'url',
  //   method: "post",
  //   data: {
  //     name: 'ysj'
  //   },
  //   success: function(res) {
  //     console.log(res);
  //   },
  //   fail: function (err) {
  //     console.log("请求出错时调用");
  //   }
  // })
 },
 /**
  * 生命周期函数--监听页面初次渲染完成
  */
 onReady: function () {

 },

 /**
  * 生命周期函数--监听页面显示
  */
 onShow: function () {

 },

 /**
  * 生命周期函数--监听页面隐藏
  */
 onHide: function () {

 },

 /**
  * 生命周期函数--监听页面卸载
  */
 onUnload: function () {

 },

 /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
 onPullDownRefresh: function () {

 },

 /**
  * 页面上拉触底事件的处理函数
  */
 onReachBottom: function () {

 },

 /**
  * 用户点击右上角分享
  */
 onShareAppMessage: function () {

 }
})