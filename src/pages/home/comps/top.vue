<template>
  <view class="header">
    <view @click.stop="go"><text style="margin-right: 0.25rem">南昌市</text><uni-icons type="arrowdown"></uni-icons></view>
    <u-search placeholder="请输入" style="width: 80%" height="40" :show-action="false"></u-search>
    <!-- <view style="margin: 0 0.3rem"><u-icon name="man-add"></u-icon><text>注册</text></view> -->
    <dropdown :values="names"/>
    <!-- <view class="capsule_box" :style="{width: capsuleWidth,height: capsuleHeight}"></view> -->
  </view>
</template>

<script>
import dropdown from './dropdown'

export default {
  data(){
    return {
      names: ['正常模式','开发模式'],
      capsule: {}
    }
  },
  props: {
  },
  mounted() {
    
  },
  methods: {
    go() {
      console.log(111);
      uni.navigateTo({url: '/pages/city/index'})
    }
  },
  created() {
    console.log(this.customBar);
    // #ifdef MP-WEIXIN  
    console.log(uni.getMenuButtonBoundingClientRect())
    // #endif
  },
  components: {
    dropdown
  }
}
</script>

<style scoped>
.header {
  box-sizing: border-box;
  display: flex;
  /* align-items: center; */
  padding: 0 0.6rem;
  height: 2.6rem;
}
.header>view{
  display: flex;
  align-items: center;
}
</style>