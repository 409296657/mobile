<template>
  <div id="User">
    <Head title="点餐统计"></Head>
    <div class="container">
      <div class="content">
        <div class="timepicker">
          <div class="start" @click="openPickerStart"><mt-cell title="日期起" :value="startTime"></mt-cell></div>
          <div class="end" @click="openPickerEnd"><mt-cell title="日期止" :value="endTime"></mt-cell></div>
        </div>

        <button class="submit" type="button" @click="query">查&nbsp;&nbsp;&nbsp;询</button>

        <div class="statistics" v-if="picker">
          <mt-cell title="早餐" value="0餐"></mt-cell>
          <mt-cell title="午餐" value="0餐"></mt-cell>
          <mt-cell title="晚餐" value="0餐"></mt-cell>
        </div>

        <mt-datetime-picker
          ref="pickerstart"
          type="date"
          :startDate="startPoint"
          :endDate="et?et:nowDate"
          @confirm="handleConfirmStart"
          v-model="pickerValueStart">
        </mt-datetime-picker>
        <mt-datetime-picker
          ref="pickerend"
          type="date"
          :startDate="st?st:startPoint"
          :endDate="nowDate"
          @confirm="handleConfirmEnd"
          v-model="pickerValueEnd">
        </mt-datetime-picker>
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
      pickerValueStart:'',
      pickerValueEnd:'',
      startTime:'',
      endTime:'',
      startDate:'',
      startPoint:new Date(2018,0,1),
      nowDate:new Date(),
      st:'',
      et:'',
      picker:false,
    }
  },
  methods:{
    query(){
      this.picker = true;
    },
    openPickerStart() {
      this.$refs.pickerstart.open();
    },
    openPickerEnd() {
      this.$refs.pickerend.open();
    },
    handleConfirmStart:function(val){
      let start = val.toLocaleDateString();
      this.startTime = start;
      this.st = val;
    },
    handleConfirmEnd:function(val){
      let end = val.toLocaleDateString();
      this.endTime = end;
      this.et = val;
    },
  },
  mounted(){

  }

}
</script>

<style lang="less">
#User{
  height: 100%;
  .container{
    padding-top: 49px;
    height: 100%;
    box-sizing: border-box;
    .content{
      width: 96%;
      margin: 0 auto;
      .timepicker{
        border-bottom: 1px solid #d9d9d9;
      }
      .submit{
        display: block;
        width: 300px;
        height: 50px;
        background-color: #26a2ff;
        border: none;
        margin: 20px auto;
        border-radius: 5px;
        font-size: 20px;
        color: #fff;
      }
      .statistics{
        margin-top: 40px;
      }
    }
  }
}
</style>
