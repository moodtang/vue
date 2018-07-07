<template>
  <div style="height: 100%">
    <div :class="className" id="allmap" :style="{height:height, width:width}"></div>
  </div>
</template>

<script>
  // 不需要使用异步加载地图的方式
/*
  import BMap from 'BMap'*/
  /*  import {pickerOptions} from "../../../utils";*/
  export default {
    name: "BaiDuMap",
    props: {
      height: {
        type: String,
        default() {
          return "600px"
        }
      },
      width: {
        type: String,
        default() {
          return "100%"
        }
      },
      className: {
        type: String,
        default() {
          return "baiDuMap"
        }
      },
      pointData: {
        type: Array,
        default() {
          return [{"latitude": 118.89472222222223, "longitude": 31.905, "label": "设备1"},
          ]
        }
      }

    },
    mounted() {
      this.$nextTick(()=>{
        this.initMap(this.pointData)
      })
    },
    data() {
      return {
        map: "",
        mapPoints: [], //记录地图上的点
        testData: [{"latitude": 117.89472222222223, "longitude": 30.905, "label": "水产养殖系统1"}]
      }
    },
    methods: {
      initMap(pointData) {

        var This = this;
          this.$nextTick(() => {
            This.map = new BMap.Map("allmap");
            var points = [];
            pointData.forEach((point) => {
              points.push(new BMap.Point(point.latitude, point.longitude));
            });
            This.map.enableScrollWheelZoom();
            // 这一块地图的显示级别也应该根据算法确定
            This.map.centerAndZoom(points[0], 15);
            //坐标转换完之后的回调函数
            // 添加右键菜单

            var removeMarker = function (e, ee, marker) {
              // 删除某个标记
              var index = -1;

              for (let i = 0; i < This.mapPoints.length; i++) {
                if (This.mapPoints[i].lat == marker.point.lat && This.mapPoints[i].lng == marker.point.lng) {
                  index = i;
                  break;
                }
              }

              if (index != -1)
              This.mapPoints.splice(index, 1);
              This.map.removeOverlay(marker);
              This.map.setViewport(This.mapPoints); // 将所有的点放入最佳视图中去

            }

            var translateCallback = (data) => {
              if (data.status === 0) {
                for (var i = 0; i < data.points.length; i++) {
                  var maker = new BMap.Marker(data.points[i])
                  var label = new BMap.Label(pointData[i].label, {offset: new BMap.Size(20, -10)});
                  var markerMenu = new BMap.ContextMenu();
                  maker.setLabel(label);
                  maker.addContextMenu(markerMenu);
                  markerMenu.addItem(new BMap.MenuItem('删除此标记', removeMarker.bind(maker)));
                  This.map.addOverlay(maker);
                  maker.addContextMenu(markerMenu);

                }
                data.points.forEach((point) => {
                  if (This.mapPoints.indexOf(point) === -1)
                    This.mapPoints.push(point)
                })
                This.map.setViewport(This.mapPoints); // 将所有的点放入最佳视图中去

              }
            }
            setTimeout(() => {
              var convertor = new BMap.Convertor();
              convertor.translate(points, 1, 5, translateCallback)
            })

          })
      },
      addPointArray(pointData) {

        console.log("in BaiduMap.vue, trigger on addPointArray");
        var This = this;
        let points = [];
        pointData.forEach((point) => {
          points.push(new BMap.Point(point.latitude, point.longitude));
        });

        var removeMarker = function (e, ee, marker) {
          // 删除某个标记
          var index = -1;
          for (let i = 0; i < This.mapPoints.length; i++) {

            if (This.mapPoints[i].lat == marker.point.lat && This.mapPoints[i].lng == marker.point.lng) {
              index = i;
              break;
            }
          }
          if (index != -1) {
            This.mapPoints.splice(index, 1);
          }
          This.map.removeOverlay(marker);
          This.map.setViewport(This.mapPoints); // 将所有的点放入最佳视图中去
        }


        let translateCallback = (data) => {
          if (data.status === 0) {
            for (let i = 0; i < data.points.length; i++) {
              var maker = new BMap.Marker(data.points[i])
              var label = new BMap.Label(pointData[i].label, {offset: new BMap.Size(20, -10)});
              var markerMenu = new BMap.ContextMenu();
              // object 不可以直接判断对象，转成json对象即可
              let result = JSON.stringify(This.mapPoints).indexOf(JSON.stringify(data.points[i]));
              if (result === -1) {
                This.mapPoints.push(data.points[i])
                maker.setLabel(label);
                maker.addContextMenu(markerMenu);
                markerMenu.addItem(new BMap.MenuItem('删除此标记', removeMarker.bind(maker)));
                This.map.addOverlay(maker);
                maker.addContextMenu(markerMenu);
              }

            }

            This.map.setViewport(This.mapPoints); // 将所有的点放入最佳视图中去
          }
        }
        setTimeout(() => {
          var convertor = new BMap.Convertor();
          convertor.translate(points, 1, 5, translateCallback)
        })
      },
    }


  }
</script>

<style scoped>

</style>
