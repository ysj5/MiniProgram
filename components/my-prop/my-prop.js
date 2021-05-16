// components/my-prop/my-prop.js
Component({
  properties: {
    title: String, //变量名为title，类型为string
    content: {
      type: String,
      value: "我是组件的内容" //默认值
    }
  },
  externalClasses: ['title2']
})
