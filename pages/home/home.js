// pages/home/home.js
Page({
  data: {
    counter: 0
  },
  parentIncrement(event) {
    console.log(event.detail); //传过来的数据放在event的detail里面
    this.setData({
      counter: this.data.counter + 1
    })
  },
  parProps(event) {
    console.log(event.detail);
  },
  updateDataCpn() { //修改my-sel组件内的数据counter
    const my_sel = this.selectComponent('#sel-id'); //通过绑定在组件上的id获取组件对象
    // my_sel.setData({ //直接修改，可以但不符合规范
    //   counter: my_sel.data.counter + 1
    // })

    //通过方法对数据进行修改
    my_sel.incrementCounter(); //调用组件内的方法，在组件内的方法里面调用setData
  }
})