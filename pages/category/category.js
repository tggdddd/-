import * as data1 from "./data/1.js"
import * as data2 from "./data/1 (1).js"
import * as data3 from "./data/1 (2).js"
import * as data4 from "./data/1 (3).js"
import * as data5 from "./data/1 (4).js"
import * as data6 from "./data/1 (5).js"
import * as data7 from "./data/1 (6).js"
import * as data8 from "./data/1 (7).js"
import * as data9 from "./data/1 (8).js"
import * as data10 from "./data/1 (9).js"
import * as data11 from "./data/1 (10).js"
import * as data12 from "./data/1 (11).js"
import * as data13 from "./data/1 (12).js"
import * as data14 from "./data/1 (13).js"
import * as data15 from "./data/1 (14).js"
Page({
  data: {
    categoryCur: 0,
    category: [],
    activeTag: "0",
    items: []
  },
  changeCategoryBySc(e){
    this.setData({
      categoryCur: e.detail.current
    })
  },
  changeCategory(e) {
    let cur = e.currentTarget.dataset.cur
    this.setData({
      categoryCur: cur
    })
  },
  toNav(e) {
    const index = e.currentTarget.dataset.index
    const cur = e.currentTarget.dataset.cur
    this.setData({
      activeTag: index
    })
    const id = `#title${cur}A${index*2+1}`
    wx.createSelectorQuery().select("#sc").node(node => {
      node.node.scrollIntoView(id)
    }).exec()
  },
  onShow() {
    const observer = this.createIntersectionObserver({
      observeAll: true
    })
    observer.relativeTo("#sc").observe(".title", res => {
      if (res.intersectionRatio > 0) {
        const pos = res.id.lastIndexOf('A')
        const index = res.id.substring(pos + 1)
        this.setData({
          activeTag: (index - 1) / 2
        })
      }
    })
  },
  onLoad() {
    const array = []
    const tags = []
    array.push(data1.data[0])
    tags.push(data1.data[0].category_name)
    array.push(data2.data[0])
    tags.push(data2.data[0].category_name)
    array.push(data3.data[0])
    tags.push(data3.data[0].category_name)
    array.push(data4.data[0])
    tags.push(data4.data[0].category_name)
    array.push(data5.data[0])
    tags.push(data5.data[0].category_name)
    array.push(data6.data[0])
    tags.push(data6.data[0].category_name)
    array.push(data7.data[0])
    tags.push(data7.data[0].category_name)
    array.push(data8.data[0])
    tags.push(data8.data[0].category_name)
    array.push(data9.data[0])
    tags.push(data9.data[0].category_name)
    array.push(data10.data[0])
    tags.push(data10.data[0].category_name)
    array.push(data11.data[0])
    tags.push(data11.data[0].category_name)
    array.push(data12.data[0])
    tags.push(data12.data[0].category_name)
    array.push(data13.data[0])
    tags.push(data13.data[0].category_name)
    array.push(data14.data[0])
    tags.push(data14.data[0].category_name)
    array.push(data15.data[0])
    tags.push(data15.data[0].category_name)
    this.setData({
      items: array,
      category: tags
    })
  }
})