// pages/home/home.js
Page({
  data: {
    titles: ['衣服', '裤子', '鞋子', '帽子']
  },
  handleTap() {
    console.log("按钮发生了点击")
  },
  handleItemClick(event) {
    console.log(event);
    console.log(event.currentTarget.dataset);
  },
  //事件冒泡和捕获
  handleCaptureview1(event) { //事件捕获1
    console.log("事件捕获1");
  },
  handleBindView1(event) { //事件冒泡1
    console.log("事件冒泡1");
  },
  handleCaptureview2(event) { //事件捕获2
    console.log("事件捕获2");
  },
  handleBindView2(event) { //事件冒泡2
    console.log("事件冒泡2");
  },
  handleCaptureview3(event) { //事件捕获3
    console.log("事件捕获3");
  },
  handleBindView3(event) { //事件冒泡3
    console.log("事件冒泡3");
  }
})