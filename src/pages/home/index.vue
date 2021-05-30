<template>
  <view>
    <view class="status_bar"></view>
    <top />
    <view>Home</view>
    <navigator url="/pages/index/index">跳转</navigator>
    <u-button type="primary">主要按钮</u-button>
  </view>
</template>

<script>
// import request from "uview-ui/libs/request";
import top from "./comps/top";
export default {
  data() {
    return {
    };
  },
  onLoad() {
    console.log(uni.getSystemInfoSync()); // 同步获取系统信息
    // console.log(this.$u.http);
  },
  components: {
    top,
  },
};
</script>

<style>
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
}
</style>