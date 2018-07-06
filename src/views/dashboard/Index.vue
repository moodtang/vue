<template>
 <!-- <h1>首页，展示传感器实时数据图表</h1>-->
  <div class="dashboard-container">
  <panel-group v-bind:data1=number @handleSetLineChartData="handleSetLineChartData" ></panel-group>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData"  v-bind:x-axis-data="xAxisData"></line-chart>
    </el-row>

    <el-row  :gutter="32" >

      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
        <raddar-chart></raddar-chart>
         </div>
      </el-col>

      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
        <raddar-chart></raddar-chart>
        </div>
      </el-col>
    </el-row>

  </div>



</template>

<script>

  import PanelGroup from './components/PanelGroup'
  import LineChart from './components/LineChart'
  import RaddarChart from './components/RaddarChart'

  // 这个数据后期由后台传递生成

  const lineChartData = {
    newVisitis: {
      lastWeekData: [100, 120, 161, 134, 105, 160, 165],
       thisWeekData: [120, 82, 91, 154, 162, 140, 145]
    },
    wind: {
      lastWeekData: [200, 192, 120, 144, 160, 130, 140],
      thisWeekData: [180, 160, 151, 106, 145, 150, 130]
    },
    temperature: {
      lastWeekData: [80, 100, 121, 104, 105, 90, 100],
      thisWeekData: [120, 90, 100, 138, 142, 130, 130]
    },
    humidity: {
      lastWeekData: [130, 140, 141, 142, 145, 150, 160],
      thisWeekData: [120, 82, 91, 154, 162, 140, 130]
    }
  }

    export default {
        name: "dashboard",
      components:{PanelGroup, LineChart, RaddarChart},
      created(){
          // 此时dom元素还没有被渲染，但是可以找到data中的数据，在此生命周期中初始化data
        for (let i=0; i<7; i++) {
          let thisDay = "周"+"日一二三四五六".charAt((new Date().getDay() + 7 - i) % 7);
          this.xAxisData.unshift(thisDay);
        }
      },
      data()
      {
        return {
          number: 1024,
          lineChartData: lineChartData.newVisitis,
          xAxisData:[]
        }
      },
      computed:{

      },
      methods:{
        getRandomNumber() {
          return
        },
        handleSetLineChartData(type){
          this.lineChartData = lineChartData[type]
        },

      }
  }
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
  }
</style>
