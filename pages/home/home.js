// pages/home/home.js
//拿到全局数据
const app = getApp(); //getApp()获取App产生的示例对象
const name = app.globalData.name;
console.log(name);
Page({
	data: {
		name: "Coderwhy",
		age: 18
	},
	onLoad: function() {
	},
	getUserProfile() {
		// 获取用户信息
		wx.getUserProfile({
				desc: '用于完善会员资料',
				success: (res) => {
						console.log(res.userInfo);
				}
		})
}
})