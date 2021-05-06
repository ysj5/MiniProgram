// pages/wxif/wxif.js
Page({
  data: {
    isShow: false,
    score: 45
  },
  handleSwitch() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    if(this.data.score >= 100) return
    this.setData({
      score: this.data.score + 5
    })
  }
})