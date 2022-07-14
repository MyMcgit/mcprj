<template>
  <div class="shouye">
    <nav class="nav">
      <div class="nav_top">
        <span>WeChat</span>
        <span>1.21AM</span>
        <span>100%</span>
      </div>
      <input class="sosuo" type="text" placeholder="搜索" />
    </nav>
    <div class="daohang">
      <van-tabs class="daohang_item_father" animated border="true">
        <van-tab
          v-for="(elem, i) of arr"
          :title="elem"
          class="daohang_item"
          line-width="10px"
        >
          内容 {{ elem }}
        </van-tab>
      </van-tabs>
      <div class="daohang_hanbao_father">
        <div class="daohang_hanbao">
          <span class="iconfont">&#xe607;</span>
        </div>
      </div>
    </div>
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>
    <div class="imgOrText"></div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "ShouyeView",
  data() {
    return {
      count: 0,
      isLoading: false,
      arr: ["推荐", "热门话题", "科技动态", "区块", "其它", "其它", "其它"],
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>

<style  lang="scss" scoped>
.shouye {
  width: 375px;
}
.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 64px;
  width: 375px;
  background-color: #3296fa;
  font-size: 11px;
}
.nav_top {
  margin-top: 6px;
  width: 364px;
  height: 11px;
  display: flex;
  color: #fff;
  justify-content: space-between;
}
.sosuo {
  margin-bottom: 0px;
  font-size: 20px;
  width: 278px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  border: 0;
}
input::-webkit-input-placeholder {
  color: #fff;
}
input::-webkit-input-placeholder {
  text-align: center;
}
.daohang {
  position: relative;
  width: 375px;
  height: 42px;
  background-color: blue;
}

.daohang_item_father {
  font-size: 14px;
}
.daohang_item {
}
.daohang_hanbao_father {
  position: absolute;
  right: 0;
  top: 0;
  width: 33px;
  height: 41px;
  font-size: 0;
  background-color: rgba(255, 255, 255, 0.9);
}
.daohang_hanbao {
  width: 20px;
  height: 17px;
  margin-left: 8px;
  margin-top: 12px;
}
</style>
