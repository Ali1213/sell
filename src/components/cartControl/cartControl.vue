<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click="decreaseCount">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
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
        this.$emit('getball', event.target);
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
    .cart-decrease
      display: inline-block
      padding: 6px
      transition all 0.4s linear
      .inner
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
        transition all 0.4s linear
      &.move-enter-active, &.move-leave-active
        transform: translate3d(0, 0, 0)
        .inner
          display: inline-block
          transform: rotate(0)
      &.move-enter, &.move-leave-active
        opacity: 0
        transform: translate3d(24px, 0, 0)
        .inner
          transform: rotate(180deg)
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
      display: inline-block
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
      padding: 6px
</style>
