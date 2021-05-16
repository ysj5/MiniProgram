// components/my-sel/my-sel.js
Component({
  properties: {

  },
  data: {
    counter: 0
  },
  methods: {
    incrementCounter() {
      this.setData({
        counter: this.data.counter + 1
      })
    }
  }
})
