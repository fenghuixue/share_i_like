// pages/other/other.js
import {cityConf, cityObj} from './area.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
     areaId: 3,
     cityMenu: cityConf[3]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  checkAll() {

  }
})