//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '口碑炸裂',
    topTabItem: ["推荐", "最近在看"],
    currentTopItem: "0",
    imgUrls: [
      {
        "url": "../../images/movie/BadGenius.png",
        "dots": "0",
        "id": "1"
      },
      {
        "url": "../../images/movie/DaFuFa.png",
        "dot": "1",
        "id": "2"
      },
      {
        "url": "../../images/movie/Intouchables.png",
        "dot": "2",
        "id": "3"
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    articleArr: [{
      "id": "3",
      "score": "9.1",
      "detail": "茫茫人海，两个截然不同的人相遇，你改变了我，我改变了你，相逢的人会再相逢。",
      "author": "Tom",
      "time": "2017-01-07"
    }, {
      "id": "3",
      "score": "9.1",
      "detail": "茫茫人海，两个截然不同的人相遇，你改变了我，我改变了你，相逢的人会再相逢。",
      "author": "Tom",
      "time": "2017-01-07"
      }, {
        "id": "3",
        "score": "9.1",
        "detail": "茫茫人海，两个截然不同的人相遇，你改变了我，我改变了你，相逢的人会再相逢。",
        "author": "Tom",
        "time": "2017-01-07"
      }],
      modalHidden: true,
      recentMovies: []
  },
  //事件处理函数
  onLoad: function (options) {
    
  },
  //切换顶部标签
  switchTab: function (e) {
    this.setData({
      currentTopItem: e.currentTarget.dataset.idx
    });
    if (e.currentTarget.dataset.idx != 0 ) {
      this.fetchRecentData();
    }
  },
  // 最近在看的数据获取
  fetchRecentData() {
    let that = this;
    wx.request({
      url: 'https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290',
      success(res) {
        console.log(res);
        that.setData({
          recentMovies: res.data.movies
        });
      }
    })
  },
  // 电影详情页
  movieDetail: function(e) {
    let detailId = e.currentTarget.dataset.idx;
    wx.navigateTo({
      url: `details/details?id=${detailId}`
    })
  },
  // 跳转详情页
  skipDetail: function(e) {
    let detailId = 225827;
    wx.navigateTo({
      url: `details/details?id=${detailId}`
    })
  },
  addComment: function(e) {
    this.setData ({
      "flag": "true",
      "commentId": e.currentTarget.id
    });
  },
  sendComment: function(e) {
    console.log(e.currentTarget.dataset)
  },
  goShare: function(e) {
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },
  modalBindaconfirm: function() {
    this.setData({
      modalHidden: !this.data.modalHidden, 
      show: !this.data.show, 
      tip: '您点击了【确认】按钮!', 
      buttonDisabled: !this.data.buttonDisabled
    });
  },
  modalBindcancel: function() {
    this.setData({
      modalHidden: !this.data.modalHidden,
      tip: '您点击了【取消】按钮!',
    });
  }
})
