// pages/stories/stories.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
  },

  goToPost() {
    wx.navigateTo({
      url: '/pages/create/create',
    })
  },

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

  showStory(event) {
    const data = event.currentTarget.dataset;
    const id = data.id;

    wx.navigateTo({
      url: `/pages/storyDetail/storyDetail?id=${id}`
    });
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
   
  },

  // getResult(res) {
  //   console.log(res)
  //   this.setData({
  //     stories: res.data.objects
  //   })
  // },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    let tableName = 'stories'
    let Story = new wx.BaaS.TableObject(tableName)
    Story.find().then((res) => {
      console.log(res)
      this.setData({
        stories: res.data.objects
      })
    })
     //或者 Story.find().then(this.getResult)

    // const request = {
    //   url:'https://cloud.minapp.com/oserve/v1/table/84988/record',
    //   header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' },
    //   method: 'GET',
    //   success: this.getResult
    // }
    // wx.request(request)

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