// pages/stories/stories.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    comments: [],
    title: 'Stories'
  },

  // goToPost() {
  //   wx.navigateTo({
  //     url: '/pages/post/post',
  //   })
  // },

  // changeTitle() {
  //   this.setData({
  //     title: 'Love stories'
  //   });

  //   wx.setStorageSync('story-title', 'Love stories')

  //   wx.showToast({
  //     title: 'Message',
  //     icon: 'success'
  //   })
  // },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const requestCmt = {
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record`,
      header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' },
      // data: {
      //   where: { 
      //     "story_id": { "$eq": id } 
      //   }
      // },
      method: 'GET',
      success: this.getCmtResult
    }
    wx.request(requestCmt)
  },

  getCmtResult(res) {
    console.log(res)
    this.setData({
      comments: res.data.objects
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {


  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})