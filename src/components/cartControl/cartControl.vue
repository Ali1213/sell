<template>
  <div class="cartcontrol">
    <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click="decreaseCount"></div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCount"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCount (event) {
        if (!event._constructed) {
          return;
        }
        Vue.set(this.food, 'count', this.food.count ? this.food.count + 1 : 1);
      },
      decreaseCount (event) {
        if (!event._constructed) {
          return;
        }
        Vue.set(this.food, 'count', this.food.count ? this.food.count - 1 : 0);
      }
    }
  };
</script>

<style lang="stylus" rels="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease, .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      font-size: 24px
</style>
