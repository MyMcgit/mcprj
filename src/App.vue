<template>
  <div id="app">
    <div>{{ msg }}</div>
    <Footfoot></Footfoot>
  </div>
</template>

<script>
export default {
  data() {
    return { msg: "你好" };
  },
  methods: {},
  components: {
    Footfoot: () => import("./views/Footfoot.vue"),
  },
};
</script>






