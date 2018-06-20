<template>
  <div id="Order">
    <Head title="标题"></Head>
    <div class="container">
      <div class="content">
        <Calendar v-on:choseDay="clickDay"></Calendar>
        <ul class="list">
          <li class="">
            <div>早餐{{breakfast}}</div>
            <div class="order" v-if="breakfast==0" @click="saveBreakfast" :class="{prevent:click==1}">点餐</div>
            <div class="cancel" v-else @click="breakfast = 0">已点餐</div>
          </li>
          <li class="">
            <div>午餐{{lunch}}</div>
            <div class="order" v-if="lunch==0" @click="saveLunch" :class="{prevent:click==1}">点餐</div>
            <div class="cancel" v-else @click="lunch = 0">已点餐</div>
          </li>
          <li class="">
            <div>晚餐{{dinner}}</div>
            <div class="order" v-if="dinner==0" @click="saveDinner" :class="{prevent:click==1}">点餐</div>
            <div class="cancel" v-else @click="dinner = 0">已点餐</div>
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
      breakfast:0,
      lunch:0,
      dinner:0,
      click:0,
    }
  },
  methods:{
    clickDay(data) {
      this.breakfast = 0;
      this.lunch = 0;
      this.dinner = 0;
      let dd = this.util.setDate(data) //选中某天
      this.data = dd;
      this.getDcxtResolver()
    },
    saveBreakfast(){
      this.click = 1 ;
      this.axios({
        method:"POST",
        url:"/api/saveDcxtResolver.r",
        params:{
          sjid:"",
          userid:"admin",
          oraT:this.data,
          valStatu:'0',
          meal:'1'
        }
      })
      .then((res)=>{
        this.breakfast = 1
        this.click = 0 ;
      })
      .catch((err)=>{
        // console.log(err)
      })
    },
    saveLunch(){
      this.axios({
        method:"POST",
        url:"/api/saveDcxtResolver.r",
        params:{
          sjid:"",
          userid:"admin",
          oraT:this.data,
          valStatu:'0',
          meal:'2'
        }
      })
      .then((res)=>{
        this.lunch = 1
      })
      .catch((err)=>{
        // console.log(err)
      })
    },
    saveDinner(){
      this.axios({
        method:"POST",
        url:"/api/saveDcxtResolver.r",
        params:{
          sjid:"",
          userid:"admin",
          oraT:this.data,
          valStatu:'0',
          meal:'3'
        }
      })
      .then((res)=>{
        this.dinner = 1
      })
      .catch((err)=>{
        // console.log(err)
      })
    },
    getDcxtResolver(date){
      this.axios({
        method:"POST",
        url:'/api/getDcxtResolver.r',
        params:{
          userid:"admin",
          oraT:this.data,
        }
      })
      .then((res)=>{
        let data = res.data.dataList;
        console.log(data)
        if(data.length!==0){
          for (var i = 0; i < data.length; i++) {
            if (data[i].orderingType==1) {
              this.breakfast=1
            }else if (data[i].orderingType==2) {
              this.lunch=1
            }else if (data[i].orderingType==3) {
              this.dinner=1
            }
          }
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },
  mounted(){
    let newDate = new Date(),
        today = newDate.toLocaleDateString();
    let dd = this.util.setDate(today)
    console.log(dd)
    this.data = today;
    this.axios({
      method:"POST",
      url:'/api/getDcxtResolver.r',
      params:{
        "userid":"admin",
        "oraT":"2018-06-20",
      },
    })
    .then((res)=>{
      let data = res.data.dataList;
      if(data.length!==0){
        for (var i = 0; i < data.length; i++) {
          if (data[i].orderingType==1) {
            this.breakfast=1
          }else if (data[i].orderingType==2) {
            this.lunch=1
          }else if (data[i].orderingType==3) {
            this.dinner=1
          }
        }
      }
    })
    .catch((err)=>{

    })
  }

}
</script>

<style lang="less">
#Order{
  height: 100%;
  .prevent{
    pointer-events: none;
  }
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
