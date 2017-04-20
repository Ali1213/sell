<template>
  <div class="header">
    <div class="content-wrapper">
        <div class="avatar">
            <img width="64" height="64" :src="seller.avatar" />
        </div>
    </div>
    
    <div class="bulletin-wrapper"></div>

  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    seller: {
      type: Object
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
