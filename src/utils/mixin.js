import Vue from 'vue'
// #ifndef H5
// import './copy'
// #endif

Vue.mixin({
  data() {
    return {
      topBar: 0
    }
  },
  methods: {
    handleNavBack({ animation = true } = {}) {
      uni.navigateBack({
        ...(animation === true
          ? { delta: 1, animationType: "pop-out", animationDuration: 100 }
          : animation)
      });
    },
    handleCopy({ content, successText = '复制成功' }) {
      uni.setClipboardData({
        data: content,
        success: () => {
          uni.showToast({
            title: successText
          })
        }
      });
    }
  },
  onLoad() {
    var res = uni.getSystemInfoSync();
    this.topBar = res.statusBarHeight;
  }
})