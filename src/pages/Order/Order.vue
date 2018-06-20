<template>
  <div id="Order">
    <Head title="标题"></Head>
    <div class="container">
      <div class="content">
        <Calendar v-on:choseDay="clickDay"></Calendar>
        <ul class="list">
          <li class="">
            <div>早餐{{breakfast}}</div>
            <div class="order" v-if="breakfast==1" @click="breakfast = 0">点餐</div>
            <div class="cancel" v-else @click="breakfast = 1">已点餐</div>
          </li>
          <li class="">
            <div>午餐{{lunch}}</div>
            <div class="order" v-if="lunch==1" @click="lunch = 0">点餐</div>
            <div class="cancel" v-else @click="lunch = 1">已点餐</div>
          </li>
          <li class="">
            <div>晚餐{{dinner}}</div>
            <div class="order" v-if="dinner==1" @click="dinner = 0">点餐</div>
            <div class="cancel" v-else @click="dinner = 1">已点餐</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import Head from '@/components/common/Head'
import Calendar from 'vue-calendar-component'
export default {
  name: 'User',
  components:{
    Head,
    Calendar,
  },
  data(){
    return{
      data:'',
      breakfast:1,
      lunch:1,
      dinner:1,
    }
  },
  methods:{
    clickDay(data) {
      console.log(data); //选中某天
      this.data = data;
      this.init()
    },
    init(){
      this.axios({
        method:"POST",
        url:"/api/jxlw/saveDcxtResolver.r",
        data:{
          sjid:'',
          userid:"admin",
          oraT:this.data,
          valStatu:'1',
          meal:'1'
        }
      })
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },
  mounted(){
    this.axios({
      method:"POST",
      url:'/api/jxlw/getDcxtResolver.r',
      data:{
        userid:"admin",
        oraT:'2018-6-17',
      }
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
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
      .wh_container{
        margin-top: 20px;
        .wh_content_all{
          background-color: #fff;
          box-sizing: border-box;
          color: #000;
          border-radius: 20px; /*no*/
          border: 1px solid #000; /*no*/
          .wh_top_changge{
            border-bottom: 1px solid #000; /*no*/
            .wh_jiantou1{
              border-top: 2px solid #000; /*no*/
              border-left: 2px solid #000; /*no*/
            }
            .wh_content_li{
              color: #000;
            }
            .wh_jiantou2{
              border-top: 2px solid #000; /*no*/
              border-right: 2px solid #000; /*no*/
            }
          }
          .wh_content{

            .wh_content_item{
              color: #000;
              .wh_isToday{
                background-color: #bdbdbd;
              }
               .wh_chose_day{
                 background-color: #26a2ff;
               }
               .wh_item_date{
                 color: #000;
                 }
                .wh_other_dayhide{
                   color: #bfbfbf;
               }
            }
          }
        }
      }
      .list{
        margin-top: 50px;
        li{
          height: 50px;
          font-size: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 15px;
          border-bottom: 1px solid #bdbdbd;
          div{
            width: 70px;
            text-align: center;
            line-height: 26px;
            height: 26px;
          }
          .order{
            background-color: #26a2ff;
            border-radius: 13px;
            color: #fff;
          }
          .cancel{
            background-color: #bdbdbd;
            border-radius: 13px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
