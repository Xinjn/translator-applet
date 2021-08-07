const util = require('../../utils/util')
const app = getApp()
Page({
  data:{
    curLang:{},
    langList:app.globalData.langList
  },
  onShow:function(){
    this.setData({curLang:app.globalData.curLang})
  },
  onTapItem:function(e){
    let langObj = e.currentTarget.dataset  //自定义属性
    wx.setStorageSync('language', langObj) //储存为language
    this.setData({'curLang':langObj})
    app.globalData.curLang = langObj
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})