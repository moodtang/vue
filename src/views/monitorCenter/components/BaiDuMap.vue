<template>
<div>
  <div id="ahistoryMap" style="height: 750px; width: 100%; background: antiquewhite">

</div>
  <div id="aallmap" style="height: 750px; width: 100%; background: antiquewhite"></div>
</div>
</template>

<script>

    import {MP} from '../../../../static/js/map.js'
    export default {
        name: "BaiDuMap",
        mounted (){
          this.$nextTick(function () {

            var _this  = this;
            MP(_this.ak).then(BMap=>{
              var x = 118.89472222222223;
              var y = 31.905;
              var ggPoint = new BMap.Point(x,y);
              var strPoint = "188.89,31.905";
              var marker = ggPoint;
              //地图初始化
              var bm = new BMap.Map("aallmap");
              var bm2 = new BMap.Map("ahistoryMap");
              bm.centerAndZoom(ggPoint, 15);
              bm.addControl(new BMap.NavigationControl());
              bm.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
              bm.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

              bm2.centerAndZoom(ggPoint, 15);
              bm2.addControl(new BMap.NavigationControl());
              bm2.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
              bm2.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
              // 坐标转换
              function transform(ggPoint) {

                var convertor = new BMap.Convertor();
                var pointArr = [];
                pointArr.push(ggPoint);
                convertor.translate(pointArr, 1, 5, function (data) {
                  if(data.status === 0) {
                    marker = new BMap.Marker(data.points[0]);
                    bm.addOverlay(marker);
                    var label = new BMap.Label(strPoint,{offset:new BMap.Size(20,-10)});
                    marker.setLabel(label); //添加百度label
                    bm.setCenter(data.points[0]);

                  }

                })
              }
              setTimeout(transform(ggPoint), 1000);

            })

          })
        }

    }
</script>

<style scoped>

</style>
