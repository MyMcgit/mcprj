<template>
  <div id="app">
    <Footfoot></Footfoot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Footfoot: () => import("./views/Footfoot.vue"),
  },
};
</script>






