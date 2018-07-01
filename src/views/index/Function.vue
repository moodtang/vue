<template>
  <el-main class="pan-main">
    <el-row :gutter="30">
      <!--左右多出来用来占位子，当不需要占位子的时候就将之隐藏-->
      <el-col :lg="2" :xl="4" class="hidden-md-and-down">
        <div  class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="5" :xl="4">
        <div class="function-card" align="center">
          <div class="function-icon"><img src="" v-lazy="imgSrc[0]"/></div>
          <div class="item-content">
            <p class="function-title">{{title[0]}}</p>
            <p class="function-content">{{content[0]}}</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="5" :xl="4">
        <div class="function-card" align="center">
          <div class="function-icon"><img src="" v-lazy="imgSrc[1]"/></div>
          <div class="item-content">
            <p class="function-title">{{title[1]}}</p>
            <p class="function-content">{{content[1]}}</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="5" :xl="4">
        <div class="function-card" align="center">
          <div class="function-icon"><img src="" v-lazy="imgSrc[2]"/></div>
          <div class="item-content">
            <p class="function-title">{{title[2]}}</p>
            <p class="function-content">{{content[2]}}</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="5" :xl="4">
        <div class="function-card" align="center">
          <div class="function-icon"><img src="" v-lazy="imgSrc[3]"/></div>
          <div class="item-content">
            <p class="function-title">{{title[3]}}</p>
            <p class="function-content">{{content[3]}}</p>
          </div>
        </div>
      </el-col>
      <el-col :lg="2" :xl="4" class="hidden-sm-and-down">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <!--        <el-col :xs="0"  :sm="0"   :md="2" :lg="4" :xl="6"><div class="grid-content bg-purple"></div></el-col>-->
    </el-row>
  </el-main>
</template>

<script>

  import 'element-ui/lib/theme-chalk/display.css';
  export default {
    name: "Function",
    data() {
      return {
        imgSrc: [require('../../assets/index_image/user.png'),
          require('../../assets/index_image/control.png'),
          require('../../assets/index_image/data.png'),
          require('../../assets/index_image/app.png')],
        title :["实时查看传感器数据","实时查看传感器数据","实时查看传感器数据","实时查看传感器数据"],
        content:["我们为您提供丰富的H5模板和UI组件，帮助您快速完成应用开发",
          "我们为您提供丰富的H5模板和UI组件，帮助您快速完成应用开发",
          "我们为您提供丰富的H5模板和UI组件，帮助您快速完成应用开发",
          "我们为您提供丰富的H5模板和UI组件，帮助您快速完成应用开发"]
      }
    }
  }
</script>

<style scoped lang="scss">
  .function-card {
    p {
      line-height: 26px;
    }
    img {
      width: 50px;
    }
    .function-icon {
      width: 100px;
      height: 100px;
      padding: 25px;
      background-color: #edf7ff;
      border-radius: 50%;

    }

    .function-title {
      line-height: 36px;
      height: 36px;
      font-size: 18px;
      color: #333;
      font-weight: 700;
      text-align: center
    }
    .function-content {
      color: #666;
    }
  }
/*
  用于占位子的div必须要添加高度，不然就会被当作没有*/
  .bg-purple {
    background: transparent;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
