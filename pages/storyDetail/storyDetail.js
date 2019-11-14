// pages/stories/stories.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    sid: '',
    comment_content: '',
    commment_name:''
  },



  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let storyID = options.id
    this.setData({
      sid: storyID
    })
    console.log(options.id)
    let tableName = 'stories'
    let Story = new wx.BaaS.TableObject(tableName)
    Story.get(storyID).then(this.getResult)

    let tabelName2 = 'comments'
    let query = new wx.BaaS.Query()
    query.compare('story_id','=',storyID)
    let Comment = new wx.BaaS.TableObject(tabelName2)
    let page = this
    Comment.setQuery(query).find().then(function(res){
      console.log(res.data)
      page.setData({ 
        comments: res.data.objects
      }) 
    })
  },
  getResult(res) {
    console.log(res)
    this.setData({
      stories: res.data
    })
  },

  cmtSubmit(e){
    let data = e.detail.value
    data.story_id = this.data.sid
    data.votes = 0
    console.log(1234, data)
    let page = this
    let tabelName2 = 'comments'
    let Comment = new wx.BaaS.TableObject(tabelName2)
    let comment = Comment.create()
    comment.set(data).save().then(res => {
      console.log(res)
      const comment = res.data
      let comments = page.data.comments
      comments.push(comment)
      page.setData({ 
        comments: comments 
        })
      if (res.statusCode === 201) {
        wx.navigateBack()
        wx.showToast({
          title: 'Success',
          icon: 'success'
        })
      }
    })
  },

  voteComment(event){
    let tableName2 = 'comments'
    let cmtData = event.currentTarget.dataset 
    let votes = cmtData.votes
    let recordID = cmtData.id
    let Comment = new wx.BaaS.TableObject(tableName2)
    let comment = Comment.getWithoutData(recordID)
    let page = this
    comment.set('votes', votes+1)
    comment.update().then(function (res) {
      const new_comment = res.data
      let comments = page.data.comments
      let comment = comments.find(comment => comment._id == new_comment.id)
      comment.votes = new_comment.votes
      page.setData({ comments: comments })
      console.log(res)
    })
  },

  deleteComment(event){
    console.log(event)
    let tableName2 = 'comments'
    let cmtData = event.currentTarget.dataset
    let Comment = new wx.BaaS.TableObject(tableName2)
    Comment.delete(cmtData.id).then(res => {
      console.log(res)
      if (res.statusCode === 204) {
        wx.navigateBack()
        wx.showToast({
          title: 'Success',
          icon: 'success'
        })
      }
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
