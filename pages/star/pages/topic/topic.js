Page({
  data: {
    activeNav: 0
  },
  changeNav(e){
    const index = e.currentTarget.dataset.index
    this.setData({
      activeNav: index
    })
  }
})