<template>
  <div id="app" :seller="seller">
    <router-view></router-view>
  </div>
</template>

<script>
const ERR_OK = 0;
export default {
  data () {
    return {
      seller: {}
    };
  },
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.seller = response.data;
      } else {
      };
    });
  },
  name: 'app'
};
</script>

<style>

</style>
