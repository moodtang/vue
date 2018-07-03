<template>
    <el-header height="80px">
      <el-row type="flex" justify="center">
        <el-col  :md="18" :xs="24" :lg="16" :xl="14" >
          <div class="grid-content bg-purple" >
          <img  class="navLogo" v-lazy="imgLogo"/><!-- logo-->
            <a class="titleText">{{navTitle}}</a>
         <!--   响应式菜单-->
            <el-row  type="flex" justify="end" >
              <div class="nav-button hidden-xs-only">
              <slot >
               <a  @click="goto(routerOne)"> {{tips_1}}</a>
               <a  @click="goto(routerTwo)">{{tips_2}}</a>
              </slot>
            </div>

              <el-dropdown size="small" split-button @command="handleCommand" type="plain" class="hidden-sm-and-up">
                =
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command = "1">{{tips_1}}</el-dropdown-item>
                  <el-dropdown-item command = "2">{{tips_2}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-row>
          </div>

        </el-col>
      </el-row>
    </el-header>
  </template>

<script>
    export default {
        name: "GlobalNav",
        data(){
          return {
            imgLogo : require("../../assets/jit.png"),
          }
        },
      methods:{
          goto(routerUrl){
            this.$router.push({path:routerUrl});
          },
          handleCommand(command){
            if (command === "1") {
              this.$router.push({path:this.routerOne});
            }else {
              this.$router.push({path:this.routerTwo});
            }
          }
      },
      props:{
          navTitle:{
            type: String,
            default(){
              return "登陆"
            }
          },
        tips_1:{
            type:String,
            default() {
              return "注册新账号"
            }
        },
        routerOne :{
          type:String,
          default() {
            return "/mainIndex"
          }
        },
        tips_2:{
          type:String,
          default() {
            return "意见反馈"
          }
        },
        routerTwo :{
          type:String,
          default() {
            return "/mainIndex"
          }
        }
      }
    }
</script>

<style scoped lang="scss">

  .el-header {
    background-color: #0dc0f5;
    padding-top: 5px;
    padding-bottom: 5px;
    .navLogo{
      height: 70px;
      border-radius: 50%;
    }
    .titleText{
      font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
      margin-left: 20px;
      font-size: 20px;
      color: #ffffff;
      margin-top: 23px;
      position:absolute;
    }
    .nav-button {
      margin-top: -50px;
    }

    a{
      margin: 10px;
      color: #ffffff;
    }
    .el-dropdown {
      margin-top: -50px;

    }
  }

  .bg-purple {
    background: transparent;
    vertical-align: center;
  }
  .grid-content {
    border-radius: 1px;
    min-height: 70px;
    vertical-align: center;
  }

</style>
