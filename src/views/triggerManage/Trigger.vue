<template>
  <div class="Trigger ">
      <h1>展示触发器</h1>
    <el-card>
      <el-row  class="padswitch style1" type="flex" justify="center">
        <el-col  :span="12" style="padding-bottom: 20px">
          <span > 风速设备</span>
        </el-col>
        <el-col  :span="6">
          <el-switch
            v-model="value1"
            active-text="开启设备"
            inactive-text="关闭设备">
          </el-switch>
        </el-col>
      </el-row>
    <el-row  class="padswitch" type="flex" justify="center">
      <el-col  :span="12" style="padding-bottom: 20px">
        <span > 溶解氧</span>
      </el-col>
      <el-col  :span="6">
        <el-switch
          v-model="value2"
          active-text="开启设备"
          inactive-text="关闭设备">
        </el-switch>
      </el-col>
    </el-row>
    <el-row class="padswitch style1" type="flex" justify="center">
      <el-col  :span="12" style="padding-bottom: 20px">
        <span > 温度</span>
      </el-col>
      <el-col  :span="6">
        <el-switch
          v-model="value3"
          active-text="开启设备"
          inactive-text="关闭设备">
        </el-switch>
      </el-col>
    </el-row>
    </el-card>
  </div>

</template>

<script>
    import ElCard from "element-ui/packages/card/src/main";

    export default {
      components: {ElCard},
      name: "Trigger",
       data() {
        return {
          value1: true,
          value2: false,
          value3: true,
        }
      },
      watch:{
        value1(val, oldVal){
          console.log(this.value1);
          this.$message('状态发生改变');
        }
      }
    }

</script>

<style scoped>
.padswitch{
  padding-top: 40px;
}
  .style1{
 /*   margin: 20px;*/
    background-color: rgb(240,242,245);
  }
</style>
