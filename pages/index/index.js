Page({

  data: {
    scrollTop: 0,
    tagsSwitch: false,
    tagsActive: 1,
    carsouel: [
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b036f545371d7cd1a2466ae88560e8f.jpeg?f=webp&w=1080&h=540&bg=FFFFFF",
      "	https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f3f12b1789b567a8e5f04417dd5fb35b.jpg?f=webp&w=1080&h=540&bg=141318",
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/941daf90e950703829e12f50d695157f.jpg?f=webp&w=1080&h=540&bg=EFEFEF",
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7de31ba52404d00f557a72cc46caa27e.jpg?f=webp&w=1080&h=540&bg=D1DBE7",
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aecec6f05198e7ba6ebb89e5444e0c64.jpg?f=webp&w=1080&h=540&bg=F3E7D9",
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a76121d9ca43c8ed81b01505ccdff1d.jpg?f=webp&w=1080&h=540&bg=DBDEE3"
    ],
    sorts: [
      [" https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1749080cf5bbc4dfebff83013bbebaf.png?f=webp&w=216&h=228&bg=FFFFFF ",
        " https://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp?w=216&h=228&bg=EAF6FD ",
        " https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69c250436545049ccab81c3e32033cf2.png?f=webp&w=216&h=228&bg=FFFFFF ",
        " https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp?w=216&h=228&bg=FDEFDE ",
        " https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0434594382110f3bd15c90f040d5d542.jpg?f=webp&w=216&h=228&bg=FFFFFF "
      ],
      [" https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?f=webp&w=216&h=228&bg=FFFFFF ",
        " https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?w=216&h=228&bg=FCEAEA ",
        " https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?w=216&h=228&bg=FDF5E5 ",
        " https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?f=webp&w=216&h=228&bg=FFFFFF ",
        " https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?w=216&h=228&bg=FDEDE8 "
      ]
    ],
    i3: [
      [{
        "url": "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202304171628_6486482f87e32aa3b03cfab5928831b0.jpg?thumb=1&q=90&w=344&h=280",
        "name": "Xiaomi 13 Ultra",
        "brief": "徕卡光学全焦段四摄| 一英寸可变光圈| 徕卡专业街拍模式",
        "price": "1"
      }, {
        "url": "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202303281131_cf3ff6ce70177560f3b9f95bd48fc575.jpg?thumb=1&q=90&w=344&h=280",
        "name": "Redmi Note 12 Turbo",
        "brief": "狂暴引擎 超强性能释放",
        "price": "2"
      }],
      [{
        "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d6354c72c3c1119fa59453dd3a64701e.jpg?f=webp&w=516&h=420",
        "name": "Redmi Note 11 5G",
        "brief": "5000mAh大电量",
        "price": "11"
      }, {
        "url": "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212232345_1322e81f2f5384fd88baa8c60b5cad4e.jpg?thumb=1&q=90&w=344&h=280",
        "name": "Xiaomi 13",
        "brief": "全新第二代骁龙8｜徕卡专业光学镜头｜徕卡原生双画质 | 6.36″超窄边屏幕｜67W小米澎湃秒充｜徕卡75mm长焦镜头",
        "price": "20"
      }],
      [{
        "url": "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212232348_5facedab702fee101581c9124af1b89d.jpg?thumb=1&q=90&w=344&h=280",
        "name": "Xiaomi 13 限量定制色",
        "brief": "全新第二代骁龙8｜徕卡专业光学镜头｜徕卡原生双画质 | 6.36″超窄边屏幕｜67W小米澎湃秒充｜徕卡75mm长焦镜头",
        "price": "33"
      }, {
        "url": "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202210262333_c92b3c67e43ebb5030a4ac5426f0a36f.jpg?thumb=1&q=90&w=344&h=280",
        "name": "Redmi Note 12 5G",
        "brief": "三星 OLED 护眼屏｜骁龙 5G 芯｜5000mAh 电量",
        "price": "0.00"
      }],
      [{
        "url": "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212261500_edb59e2a391fc8b99f706122c47f3345.jpg?thumb=1&q=90&w=344&h=280",
        "name": "Redmi K60E",
        "brief": "天玑8200丨2K 旗舰直屏丨5500mAh长续航",
        "price": "0.02"
      }, {
        "url": "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209271600_f9ceab72400b30144c74f92f2b80c332.jpg?thumb=1&q=90&w=344&h=280",
        "name": "Xiaomi Civi 2",
        "brief": "仿生双眸｜氛围人像",
        "price": "1999"
      }]
    ],
    i6:[
      [{
        "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/14ad4f16c1b23168b0accb2ae439417e.jpg?f=webp",
        "name": "RedmiBook Pro 15 2022 锐龙版",
        "brief": "可选全新锐龙7 6800H处理器，3.2K 90Hz高清屏，RTX 2050高性能独立显卡，CNC一体精雕工艺",
        "price": "5499"
    },{
      "url": "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207191154_4d238e772ff74153180955e54dbb0366.jpg?thumb=1&q=90&w=344&h=280",
      "name": "Redmi G 游戏本 2022",
      "brief": "16英寸 2.5K 165Hz 电竞大屏",
      "price": "7499"
  }],[{
    "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/09adda25ee11a2b6dd29164fa3a8fd6c.jpg?f=webp",
    "name": "小米笔记本 Pro 14 增强版",
    "brief": "大师屏 轻薄大作 | 芯怀猛虎 炸裂性能",
    "price": 5499
},{
  "url": "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202210261150_ba8bc83c8749e2258c6b425f490f4fad.jpg?thumb=1&q=90&w=344&h=280",
  "name": "Xiaomi Book Air 13",
  "brief": "薄至约12mm | 2.8K OLED 大师触控屏",
  "price": 5999
}]
    ]
  },
  tagsClick(e) {
    this.setData({
      tagsSwitch: !this.data.tagsSwitch
    })
  },
  tagClick(e) {
    this.setData({
      tagsActive: e.currentTarget.dataset.id
    })
  },
  toTop(){
    
    this.setData({
      scrollTop: 0
    })
  }
})