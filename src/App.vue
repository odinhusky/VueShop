<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
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
@import './assets/all';
</style>
