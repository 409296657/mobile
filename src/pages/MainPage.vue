<template>
  <div id="MainPage">

    <div class="headbar">
      <div class="title">
        标题
      </div>
    </div>

    <div class="container">
      <div class="list">
        <div class="title">x1</div>
        <div class="content">
          <div class="flexbox"></div>
          <div class="flexbox"></div>
          <div class="flexbox"></div>
        </div>
      </div>
    </div>

    <div class="footbar">
      <div class="flexbox"><router-link :to="{ name: '', params: {} }">资&nbsp;&nbsp;&nbsp;讯</router-link></div>
      <div class="flexbox"><router-link :to="{ name: '', params: {} }">我&nbsp;&nbsp;&nbsp;的</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  components:{

  },
  data(){
    return{

    }
  },

}
</script>

<style lang="less">
#MainPage{
  width: 100%;
  height: 100%;
  position: relative;
  .headbar{
    height: 50px;
    width: 100%;
    background-color: #26a2ff;
    position: fixed;
    top: 0;
    left: 0;
    .title{
      color: #fff;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      width: 96%;
      margin: 0 auto;
    }
  }
  .container{
    height: 100%;
    padding: 50px 0;
    box-sizing: border-box;
    font-size: 50px;
    overflow: auto;
    .list{
      width: 96%;
      margin: 20px auto;
      border: 1px solid #e3e3e3;
      .title{
        font-size: 18px;
        line-height: 18px;
        margin: 5px 0;
        text-indent: 10px;
      }
      .content{
        height: 50px;
        display: flex;
        margin: 5px 0;
        div{
          background-color: #26a2ff;
          border: 1px solid #e3e3e3;
          margin: 0 5px;
        }
      }
    }
  }
  .footbar{
    height: 50px;
    width: 100%;
    background-color: #26a2ff;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size:20px;
    display: flex;
    color: #fff;
    line-height: 50px;
    div{
      a{
        color: #fff;
        text-decoration: none;
      }
    }
    div:first-child{
      border-right: 2px solid #fff;
    }
  }
  .flexbox{
    flex:1;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>
