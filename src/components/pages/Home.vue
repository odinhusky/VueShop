<template>
  <div class="home">
    <a href="#" @click.prevent="signout">登出</a>
    <img alt="Vue logo" src="../../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  // components: {
  //   HelloWorld,
  // },
  methods: {
    signout() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIDOMAIN}/logout`;
      this.$http.post(api)
        .then((res) => {
          console.log('logout => res', res);
          if (res.data.success) {
            vm.$router.push('/Login');
          }
        });
    },
  },
};
</script>
