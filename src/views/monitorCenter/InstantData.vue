<template>
  <div class="instantData history-container" >
    <h1>实时数据展示，让传3个感器数据能够实时展示</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="多数据显示">
        <div id="alldata" style="width: 1000px; height:500px;"></div>
      </el-tab-pane>
      <el-tab-pane label="lineTemperature" >
        <div id="lineTemperature" style="width: 1000px; height:500px;"></div>
      </el-tab-pane>
      <el-tab-pane label="数据显示2">
        <div id="lineTemperature2" style="width: 1000px; height:500px;"></div>
      </el-tab-pane>
      <el-tab-pane label="数据显示3">
        <div id="lineTemperature3" style="width: 1000px; height:500px;"></div>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  import echarts from 'echarts'
  import Vue from 'vue';

  Vue.prototype.$echarts=echarts
  export default {
    name: "InstantData",
    data(){
      return{
        dataline:[],
        valueline:Math.random()*1000,
        nowline :+new Date(2018,1,1),
        oneday:24*3600*1000,
          numberx:['01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00'],
          number1:[2.0, 4.9, 7.0, 23.2, 25.6, 6.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3],
          number2:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          number3:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
          number4:[2.5, 5.9, 3.6, 7.5, 7.3, 8.9, 17.3, 19.4, 16.0, 18.5, 14.0, 10.2],

        /* 实时显示表*/
        lineOption:{
          title:{
            text:'lineTemperature'
          },
          tooltip:{
            trigger:'axis',
            formatter:function (params) {
              params = params[0];
              var showdate = new Date(params.name);
              return showdate.getDate() + '/' + (showdate.getMonth() + 1) + '/' + showdate.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer: {
              animation: false
            }
          },
          toolbox: {
            show : true,
            orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                                       // 'horizontal' ¦ 'vertical'
            x: 'center',                // 水平安放位置，默认为全图右对齐，可选为：
                                       // 'center' ¦ 'left' ¦ 'right'
                                       // ¦ {number}（x坐标，单位px）
            y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                       // 'top' ¦ 'bottom' ¦ 'center'
                                       // ¦ {number}（y坐标，单位px）
            color : ['#1e90ff','#22bb22','#4b0082','#d2691e'],
            backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
            borderColor: '#ccc',       // 工具箱边框颜色
            borderWidth: 0,            // 工具箱边框线宽，单位px，默认为0（无边框）
            padding: 5,                // 工具箱内边距，单位px，默认各方向内边距为5，
            showTitle: true,
            feature : {
              mark : {
                show : true,
                lineStyle : {
                  width : 1,
                  color : '#1e90ff',
                  type : 'dashed'
                }
              },
              magicType: {
                show : true,
                title : {
                  line : '动态类型切换-折线图',
                  bar : '动态类型切换-柱形图',
                },
                type : ['line', 'bar']
              },
              restore : {
                show : true,
                title : '还原',
                color : 'black'
              },
              saveAsImage : {
                show : true,
                title : '保存为图片',
                type : 'jpeg',
                lang : ['点击本地保存']
              },
            }
          },
          calculable:true,
          xAxis:{
            type:'time',
            splitLine:{
              show:false
            },
          },
          yAxis:{
            type:"value",
            boundaryGap:[0,'100%'],
            splitLine:{
              show:true
            },
          },
          dataZoom:[
            {
              type:'slider',
              start:10,
              end:60
            }
          ],
          series:[{
            name:'数据',
            type:'line',
            showSymbol:false,
            data:this.dataline,
          }]
        },
        /*多数据显示表*/
        optionData:{

          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          grid: {
            right: '20%'
          },
          toolbox: {
            feature: {
              dataView: {show: true, readOnly: false},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          legend: {
            data:['风速','降水量','平均温度','溶解氧']
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              /*data: ['00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00'*/
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '风速',
              min: 0,
              max: 250,
              position: 'right',
              axisLine: {
                lineStyle: {
                  color: '#5793f3'
                }
              },
              axisLabel: {
                formatter: '{value} m/s'
              }
            },
            {
              type: 'value',
              name: '降水量',
              min: 0,
              max: 250,
              position: 'right',
              offset: 80,
              axisLine: {
                lineStyle: {
                  color: '#d14a61'
                }
              },
              axisLabel: {
                formatter: '{value} ml'
              }
            },
            {
              type: 'value',
              name: '温度',
              min: 0,
              max: 25,
              position: 'left',
              axisLine: {
                lineStyle: {
                  color: '#675bba'
                }
              },
              axisLabel: {
                formatter: '{value} °C'
              }
            },
            {
              type: 'value',
              name: '溶解氧',
              position: 'left',
              offset: 60,
              axisLine: {
                lineStyle: {
                  color: '#675bff'
                }
              },
              axisLabel: {
                formatter: '{value} mg/L'
              }
            }
          ],
          series: [
            {
              name:'风速',
              type:'line',
              data:this.number1
            },
            {
              name:'降水量',
              type:'line',
              yAxisIndex: 1,
              data:this.number2
            },
            {
              name:'平均温度',
              type:'line',
              yAxisIndex: 2,
              data:this.number3
            },
            {
              name:'溶解氧',
              type:'line',
              yAxisIndex: 3,
              data:this.number4
            }
          ]
        }


    }
    },
    mounted(){
      this.showLineTemperature();
    },
    methods:{
      showLineTemperature:function () {
        for (var i=0;i<1000;i++){
          this.dataline.push(this.getdata())
         // console.log(this.dataline[i].value[1])
        }
        let allchart =this.$echarts.init(document.getElementById('alldata'))
        this.optionData.xAxis[0].data=this.numberx
        allchart.setOption(this.optionData)
        /*------------------------------往多数据显示表里添加数据------------------------------*/
        allchart.setOption({
          series: [
            { name:'风速', data: this.number1},
            { name:'降水量', data:this.number2},
            { name:'平均温度', data:this.number3},
            { name:'溶解氧', data:this.number4}]
        });
        /*-------------------------------实时显示1----------------------*/
        let linechart =this.$echarts.init(document.getElementById('lineTemperature'))
        linechart.setOption(this.lineOption)
        /*--------------------------------实时显示2--------------------*/
        let linechart2 =this.$echarts.init(document.getElementById('lineTemperature2'))
        linechart2.setOption(this.lineOption)
        setInterval(() => {
        /*  for (var i = 0; i < 5; i++) {
        }*/
            //data.shift();
            this.dataline.push(this.getdata());

         // console.log("hi")
          /*-------------------------------数据填入1-------------------------------*/
          linechart.setOption({
            series: [{
              data: this.dataline
            }]
          });
          /*-------------------------------数据填入2-------------------------------*/
          linechart2.setOption({
            series: [{
              data: this.dataline
            }]
          });
        },1000)
        //console.log(this.dataline)

      },
      getdata:function () {
        this.nowline = new Date(+this.nowline + this.oneday);
        this.valueline = this.valueline +Math.random()*21 - 10;
        //console.log(this.valueline)
        return {
          name:this.nowline.toString(),
          value:[
            [this.nowline.getFullYear(), this.nowline.getMonth() + 1, this.nowline.getDate()].join('/'),
            Math.round(this.valueline)
          ]
          /*获取数据*/
        }
      }
    }
  }
</script>

<style scoped>
.wid{
  width: 100%;
}
.history-container{
  padding: 32px;
  background-color: rgb(240, 242, 245);
}
</style>
