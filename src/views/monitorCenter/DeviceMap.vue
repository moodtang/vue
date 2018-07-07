<template>
   <!-- <h1>地图展示，用来展示设备所在地，左侧为设备，右侧为地图。</h1>-->
  <div class="map-container" style="height: 100%">
  <el-row :gutter="32">
    <el-col :lg="16" :xl="16" :md="16" :sm="24">
    <el-card class="box-card" style="width: 100% ">
      <div slot="header" class="clearfix">
        <span>设备地图</span>
      </div>
      <div class="text item">
        <bai-du-map ref="map" height="660px"></bai-du-map>
      </div>
    </el-card>
    </el-col >
    <el-col :lg="8" :xl="8" :md="8" :sm="24">
      <el-card style="width: 100%">
        <el-table :data=deviceInfo align="center" style="width: 100%">
          <el-table-column
          prop="label"
          label="设备名称"
         >
          </el-table-column>
          <el-table-column
            label="纬度"
            prop="latitude">
          </el-table-column>
          <el-table-column
            prop="longitude"
            label="经度"
          >
          </el-table-column>
          <el-table-column
          label="地址"
          prop="address">
          </el-table-column>
          <el-table-column
          label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleEdit(scope.$index, scope.row)">显示
              </el-button>

            </template>
          </el-table-column>

        </el-table>
      </el-card>
    </el-col>
  </el-row>
  </div>
</template>

<script>

/*  import BaiDu from './components/BaiDuMap'*/

    import BaiDuMap from "./components/BaiDuMap";
export default {

  name: "DeviceMap",
  components: {BaiDuMap},
  data(){
    return {
      testData: [{"latitude": '117.89472222222223', "longitude": '30.905', "label": "水产养殖系统2"}],
      deviceInfo:[{"latitude": '117.89472222222223', "longitude": '30.905', "label": "水产养殖系统1","address":"金陵科技学院"}]
    }
  },
  mounted(){
    console.log("initMap");
 /*   this.$refs.map.initMap(this.testData);*/
  },
  methods:{
    handleEdit(index, row){
      var DataArray = [];
      DataArray.push(row);
      this.$refs.map.addPointArray(DataArray);
    }
  }
}
</script>

<style scoped  lang="scss">
 .map-container{
   padding: 32px;
   background-color: rgb(240, 242, 245);
 }

 .clearfix:before,
 .clearfix:after {
   display: table;
   content: "";
 }
 .clearfix:after {
   clear: both;

 }

 .box-card {
   width: 480px;
 }
</style>
