<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">5555{{title}}---{{url}}</text>
      <view>{{userInfo.userName}}</view>
    </view>
  </view>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        title: 'yxs',
        url: this.$ENV.url
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    onLoad() {
      
    },
    methods: {

    }
  }
</script>

<style>
  .content {
    text-align: center;
    height: 400upx;
  }

  .logo {
    height: 200upx;
    width: 200upx;
    margin-top: 200upx;
  }

  .title {
    font-size: 36upx;
    color: #8f8f94;
  }
</style>
