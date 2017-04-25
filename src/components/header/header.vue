<template>
<!--  <div class="header">
    <div class="content-wrapper">
        <div class="avatar">
            <img width="64" height="64" :src="seller.avatar" />
        </div>
    </div>
    
    <div class="bulletin-wrapper"></div>

  </div>-->
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span name="brand"></span>
          <span name="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script type="">
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
<style lang = "stylus" scoped>
  .header
    color: #fff
    background: #000
    .content-wrapper
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
      .content
        display: inline-block
        font-size: 14px
</style>
