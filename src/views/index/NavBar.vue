<template>
  <div>

   <!-- <el-row type="flex" justify="center">-->
      <el-row :gutter="10">
        <el-col :xs="22" :sm="11" :md="5" :lg="4" :xl="3">
          <div class="grid-content bg-purple hidden-lg-and-down" style="background-color: #C03639"></div>
        </el-col>
        <el-col :xs="22" :sm="11" :md="5" :lg="4" :xl="3">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="22" :sm="11" :md="5" :lg="4" :xl="3">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="22" :sm="11" :md="5" :lg="4" :xl="3">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
<!--    </el-row>-->

  </div>

</template>

<script>

  export default {
    name: "NavBar",
    data() {
      return {
        nav: '',
        navigation: "",
        activeIndex: '1',
        activeIndex2: '1'

      }
    },
    mounted() {

    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  /*
    @import "../../../static/css/responsive-nav.css";
    .nav-collapse{
      width: 100%;
    }
  */
  /*test*/
  .bg-purple {
    background: #d3dce6;
    margin-top: 10px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
