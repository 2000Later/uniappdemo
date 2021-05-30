<template>
  <view>
    <!-- <view class="status_bar"> -->
      <!-- 这里是状态栏 -->
    <!-- </view> -->
    <uni-nav-bar
      :statusBar="true"
      left-icon="back"
      @clickLeft="back"
      left-text="返回"
      right-text="菜单"
      title="导航栏组件"
    ></uni-nav-bar>
    <view>智能导办</view>
  </view>
</template>

<script>
export default {
  methods: {
    back() {
      console.log(getCurrentPages()); //关于获取页面的官方文档https://uniapp.dcloud.io/api/window/window
      // uni.navigateBack({
      //   delta: 1,
      // });
    }
  }
};
</script>

<style scoped>
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
}
</style>