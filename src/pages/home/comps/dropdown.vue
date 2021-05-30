<template>
  <view ref="dropdownRef" class="dropdown">
    <view @click="handleIsShow" class="selectd">
      <text>{{defaultValue}}</text><uni-icons color="#e71f19" type="arrowdown"></uni-icons>
    </view>
    <view ref="dropdown-menu" v-show="isShow" class="dropdown-menu" :class="{isShow}">
      <view v-for="item in values" :key="item">{{item}}</view>
    </view>
  </view>
</template>

<script>
export default {
  data(){
    return {
      isShow: false,
      defaultValue: ''
    }
  },
  props: {
    values: {
      type: Array,
      default: []
    }
  },
  created() {
    console.log(this.values);
    this.defaultValue = this.values[0]
  },
  methods: {
    handleIsShow() {
      this.isShow =!this.isShow
      if(this.isShow) {
        
        console.dir(this.$refs['dropdown-menu'].$el);
      }
    }
  },
  mounted() {
    console.log(this.$refs.dropdownRef);
  }
}
</script>

<style scoped>
.dropdown{
  position: relative;
}
.selectd{
  color: #e71f19;
}
.dropdown-menu{
  position: absolute;
  top: 100%;
  left: 0;
  /* height: 0; */
  transition: all 0.3s; 
}
</style>