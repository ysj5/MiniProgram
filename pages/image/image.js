// pages/image/image.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgPath: ""
	},
	handleChooseAlbum() {
		//系统APi：让用户在相册中选择图片(或拍照)
		const _this = this;
		wx.chooseImage({
			count: 1,
			success(res) {
				//1.取出图片路径
				const path = res.tempFilePaths[0];
				//设置imagePath,直接用this为undefined
				_this.setData({ //使用上面的this转化或者使用箭头函数
					imgPath: path
				})
			}
		})
	},
	handleImgLoad() {
		console.log("图片加载完成");
	}
})