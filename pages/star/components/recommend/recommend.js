Component({
  properties: {
  },
  data: {
    data: [] 
  },
  lifetimes:{
    attached(){
      const data = require("./mock/mock")
      this.setData({
        data : data.data
      })
    }
  },
  methods: {
      loadMore(){
        const template = this.data.data
        const length = Math.min(template.length/2,10) 
        const pos = template.length-length
        template.push(template.slice(pos))
        this.setData({
          data: template
        })
      },
      toDetail(e){
        const type = e.currentTarget.dataset.type
        switch(type){
          case "question":
            wx.navigateTo({
              url: '/pages/star/pages/questionDetail/questionDetail',
            })
            break;
            case "buyersShow":
              wx.navigateTo({
                url: '/pages/star/pages/buyersShow/buyersShow',
              })
              break;
        }
      }
  }
})
