Page({
  data: {
    activeTag: 0
  },
  changeTag(e){
    const index = e.currentTarget.dataset.index;
    this.setData({
      activeTag: index
    })
  }
})