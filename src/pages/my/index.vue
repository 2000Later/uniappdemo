<template>
  <view>
    <uni-nav-bar
    :statusBar="true"
    backgroundColor="#1670eb"
    color="#ffffff"
    title="我的"
    :border="false"
    leftIcon="back"
    @clickLeft="back"></uni-nav-bar>
    <view>原生导航标题</view>
  </view>
</template>

<script>
export default {
  methods: {
    back() {
      console.log(getCurrentPages()[0].__page__);
      // uni.navigateBack({
      //    delta: 1
      // });
    }
  }
};
</script>

<style>
</style>