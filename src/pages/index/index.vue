<template>
  <keep-alive>
    <view>
    <uni-nav-bar
      left-icon="back"
			@clickLeft="back"
      left-text="返回"
      right-text="菜单"
      title="导航栏组件"
    ></uni-nav-bar>
  </view>
  </keep-alive>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {
    // console.log(this.handleNavBack);
  },
  methods: {
		back() {
			uni.navigateBack({
				 delta: 1
			});
		}
	},
};
</script>

<style scoped>
.content {
  /* margin-top: var(--status-bar-height); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
