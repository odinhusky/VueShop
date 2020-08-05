<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // hook
  created() {
    // const api = 'https://vue-course-api.hexschool.io/api/odinhusky/products';
    const api = `${process.env.VUE_APP_APIDOMAIN}/api/${process.env.VUE_APPAPI_PATH}/products`;
    this.$http.get(api).then((res) => {
      console.log('res', res);
    });
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/all';
</style>
