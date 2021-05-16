Component({
  methods: {  //组件里面的函数必须写到这里面
    handleIncrement() {
      this.triggerEvent('increment', {name: "why"}, {});
      //参数一：发射出去的事件的名字 参数二：传递的参数  参数三：直接传空对象
    }
  }
})
