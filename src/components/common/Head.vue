<template>
  <div id="Head">
    <mt-header :title="title">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'Head',
  props:['title'],
  data(){
    return{

    }
  },

}
</script>

<style lang="less">
#Head{
  background-color: #26a2ff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  .mint-header{
    height: 50px;
    padding: 0;
    width: 96%;
    margin: 0 auto;
    background-color: none;
    .mint-header-title{
      font-size: 20px;
    }
  }
}
</style>
