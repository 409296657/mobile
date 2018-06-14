<template>
  <div id="Order">
    <Head title="标题"></Head>
    <div class="container">
      <div class="content">
        
      </div>
    </div>
  </div>
</template>

<script>

import Head from '@/components/common/Head'
export default {
  name: 'User',
  components:{
    Head,
  },
  data(){
    return{

    }
  },
  methods:{

  },
  mounted(){

  }

}
</script>

<style lang="less">
#Order{
  height: 100%;
  .container{
    padding-top: 49px;
    height: 100%;
    box-sizing: border-box;
    .content{
      width: 96%;
      margin: 0 auto;
    }
  }
}
</style>
