// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'view',
        name: '最爱的那些作者',
        open: 'false',
        pages: ['priest', '爱看天', '易人北']
      },
      {
        id: 'view',
        name: '最爱的那些作者',
        open: 'false',
        pages: ['priest', '爱看天', '易人北']
      },
      {
        id: 'view',
        name: '最爱的那些作者',
        open: 'false',
        pages: ['priest', '爱看天', '易人北']
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})