<template>
  <div class="my">
    <nav class="nav">
      <div class="login_outer">
        <div class="login_back"></div>
        <router-link to="/login" class="login_font">登录/注册</router-link>
      </div>
    </nav>
    <div class="shouchang">收藏历史</div>
    <div class="xiaoxi">消息通知</div>
    <div class="tongxue">小诚同学</div>
  </div>
</template>

<script>
</script>

<style scoped>
.my {
  height: 100vh;
  background-color: rgb(218, 218, 218);
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 201px;
  background-image: url(../assets/1.jpg);
  background-size: cover;
}
.login_outer {
  text-align: center;
}
.login_back {
  margin: 0 auto;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
}
.login_font {
  color: #fff;
}
.shouchang {
  background-color: #fff;
  height: 100px;
}
.xiaoxi {
  background-color: #fff;
  margin-top: 5px;
  height: 80px;
}
.tongxue {
  background-color: #fff;
  margin-top: 5px;
  height: 80px;
}
</style>