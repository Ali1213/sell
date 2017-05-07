<template>
  <div class="cartcontrol">
    <div class="cart-decrease" v-show="food.count>0"></div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: {
        type: Object
      }
    }
  };
</script>

<style lang="stylus" rels="stylesheet/stylus">

</style>
