// pages/post/post.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  formSubmit(event) {
    console.log(event)
    let tableName = 'stories'
    let Story = new wx.BaaS.TableObject(tableName)
    let newStory = Story.create()
    let page = this
    let name = event.detail.value.name;
    let content = event.detail.value.content;
    // const story_id = page.data.newStory._id
    let data = {
      name: name,
      content: content,
      // story_id:story_id
    }
    newStory.set(data).save().then(function(res){
      console.log('new story', res)
      if (res.statusCode === 201) {
        wx.navigateBack()
        wx.showToast({
          title: 'Success',
          icon: 'success'
        })
      }
    })




    // wx.request({
    //   url: 'https://cloud.minapp.com/oserve/v1/table/84988/record/',
    //   header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' },
    //   data: story,
    //   method: 'POST',
    //   success: this.submitSuccess
    // })

  },

  // submitSuccess(res) {
  //   console.log('new story', res)
  //   if (res.statusCode === 201) { 
  //   wx.navigateBack()
  //   wx.showToast({
  //     title: 'Success',
  //     icon: 'success'
  //   })
  //   }
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