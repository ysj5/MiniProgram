// components/tab-control/tab-control.js
Component({
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    itemClick(event) {
      //取出index
      const index = event.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      });
      //通知页面内部的点击事件
      this.triggerEvent('itemclick', {index, title: this.properties.titles[index]});
    }
  }
})
