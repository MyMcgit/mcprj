<template>
  <div class="footer">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item badge="4" to="/">
        <span>首页</span>
        <template #icon="props">
          <i class="iconfont">&#xe609;</i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/ques">
        <span>问答</span>
        <template #icon="props">
          <i class="iconfont">&#xe60e;</i>
        </template></van-tabbar-item
      >
      <van-tabbar-item to="/vedio">
        <span>视频</span>
        <template #icon="props">
          <i class="iconfont">&#xe60c;</i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <span>未登录</span>
        <template #icon="props">
          <i class="iconfont">&#xe60d;</i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Footfoot",
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img01.yzcdn.cn/vant/user-active.png",
        inactive: "https://img01.yzcdn.cn/vant/user-inactive.png",
      },
    };
  },
};
</script>


<style lang="scss">
@font-face {
  font-family: "iconfont";
  src: url("../styles/iconfont.woff2?t=1657509285599") format("woff2"),
    url("../styles/iconfont.woff?t=1657509285599") format("woff"),
    url("../styles/iconfont.ttf?t=1657509285599") format("truetype"),
    url("../styles/iconfont.svg?t=1657509285599#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
