Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic: false
  },
  bgm: null,
  music_url: 'http://121.199.78.36/music/Dungeon and Fighter - 痛苦之村列瑟芬 - leshphon.mp3',
  music_coverImgUrl: 'http://localhost:3000/cover.jpg',

  onReady: function () {
    // 创建getBackgroundAudioManager实例对象
    this.bgm = wx.getBackgroundAudioManager()
    // 音频标题
    this.bgm.title = 'merry me'
    // 专辑名称
    this.bgm.epname = 'wedding'
    // 歌手名
    this.bgm.singer = 'singer'
    // 专辑封面
    this.bgm.coverImgUrl = this.music_coverImgUrl
    this.bgm.onCanplay(() => {
      this.bgm.pause()
    })
    // 指定音频的数据源
    this.bgm.src = this.music_url
  },
  play: function () {
    if (this.data.isPlayingMusic) {
      this.bgm.pause()
    } else {
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
  },
  // 新郎电话
  callGroom: function () {
    wx.makePhoneCall({
      phoneNumber: '13700000000'
    })
  },
  // 新娘电话
  callBride: function () {
    wx.makePhoneCall({
      phoneNumber: '15600000000'
    })
  }
 
 
})