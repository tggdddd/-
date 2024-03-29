Page({
  data: {
    gallery: [{
        "img_url": "//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202308231106_16d9d36c01a444d273599fde9f40320c.jpg",
        "img_url_webp": "",
        "type": "img"
      },
      {
        "img_url": "//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202308231106_16d9d36c01a444d273599fde9f40320c.jpg",
        "img_url_webp": "",
        "type": "video"
      },
      {
        "img_url": "//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202302031954_d44c662e5dfb997c7f021db87c349c4c.jpg",
        "img_url_webp": "",
        "type": "img"
      },
      {
        "img_url": "//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212111657_a3e16b20bdb358caafd1b8fbd9b5a94d.jpg",
        "img_url_webp": "",
        "type": "img"
      },
      {
        "img_url": "//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212111657_d249c106c4388474add1fbe6b9dd44cc.jpg",
        "img_url_webp": "",
        "type": "img"
      },
      {
        "img_url": "//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212111657_86364e461acee2df0d5f3070d205594e.jpg",
        "img_url_webp": "",
        "type": "img"
      },
      {
        "img_url": "//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212111657_ff51ac1dc8351244a8b188de774d03f2.jpg",
        "img_url_webp": "",
        "type": "img"
      },
      {
        "img_url": "//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212111657_a896d590ddb17d334c863c6e3b791664.jpg",
        "img_url_webp": "",
        "type": "img"
      },
      {
        "img_url": "//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212111657_a0c07a942ff652ed291e91fb92e43e0a.jpg",
        "img_url_webp": "",
        "type": "img"
      },
      {
        "img_url": "//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212111657_c242bda31fb119152476749d567ffb7d.jpg",
        "img_url_webp": "",
        "type": "img"
      },
      {
        "img_url": "//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212111657_fa3d08b6d3daafa90b052e4bde19e8d6.jpg",
        "img_url_webp": "",
        "type": "img"
      }
    ], //顶部轮播图
    galleryCur: 1, //顶部轮播图位置
    productDescriptionActive: 0, //商品描述位置
    onTop: true, //是否位于顶部
    scrollOn: 0, // 滑条当前区域 0商品 1评价 2详情 3推荐
    buyNum: 3,//商品购买选择的数量
    mockStatus: 1 // 弹窗的状态 0关闭 1购买 2属性
  },
  //改变弹窗状态
  changeMockStatus(e){
    const status = e.currentTarget.dataset.status
    this.setData({
      mockStatus: status
    })
  },
  //顶部轮播图位置切换
  changeGalleryCur(e) {
    const cur = e.detail.current
    this.setData({
      galleryCur: cur + 1
    })
  },
  // 滑块位置切换
  scrollTo(e){
    wx.pageScrollTo({selector:`#${e.currentTarget.dataset.id}`})
  },
  //商品描述切换
  changeProductDescriptionCur(e) {
    const cur = e.currentTarget.dataset.index
    this.setData({
      productDescriptionActive: cur
    })
  },
  // fixed 计算
  onReady() {
    this.createIntersectionObserver().relativeToViewport({}).observe("#top2", e => {
      // 进入
      if (e.intersectionRatio > 0) {
        this.setData({
          onTop: true,
          scrollOn: 0
        })
      } else {
        this.setData({
          onTop: false
        })
      }
    })
    this.createIntersectionObserver().relativeToViewport({}).observe("#recommend", e => {

      if (e.intersectionRatio > 0) {
        this.setData({
          scrollOn: 3
        })
      }
    })
    this.createIntersectionObserver().relativeToViewport({}).observe("#information", e => {

      if (e.intersectionRatio > 0) {
        this.setData({
          scrollOn: 2
        })
      }
    })
    this.createIntersectionObserver().relativeToViewport({}).observe("#comment", e => {

      if (e.intersectionRatio > 0) {
        this.setData({
          scrollOn: 1
        })
      }
    })
  },
  // 改变商品购买数量
  changeNum(e){
    const val = e.detail.value
    this.setData({
      buyNum: val
    })
  },
  addNum(){
    this.setData({
      buyNum: this.data.buyNum+1
    })
  },
  subNum(){
    this.setData({
      buyNum: this.data.buyNum-1
    })
  }
})