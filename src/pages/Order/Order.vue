<template>
  <div id="Order">
    <Head title="标题"></Head>
    <div class="container">
      <div class="content">
        <Calendar
          v-on:choseDay="clickDay"
          v-on:changeMonth="changeDate"></Calendar>
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

    }
  },
  methods:{
    clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    }
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
    }
  }
}
</style>
