<template>
  <div class="register">
    <nav-bar
      tips_1="登陆"
      router-one="/login"
    ></nav-bar>
    <div class="resigter-bgcolor">
      <el-row type="flex" justify="center">
        <el-col :xl="16" :md="18" :lg="18" :sm="24" :xs="24">
          <el-container class="register-container">
            <el-header>
              <!--         <div style="text-align: left" >-->
              <el-row type="flex" class="row-bg" justify="center">
                <el-col :xs="24" :md="16" :lg="10" :xl="8">
                  <a href="#" class="link-a" @click="routerBack">返回</a>
                  <span>|</span>
                  <span>用户注册</span>
                </el-col>
              </el-row>
              <!--         </div>-->
            </el-header>

            <el-main style="height: 100%">

              <div style="background: white ">
                <el-row type="flex" justify="center" class="registerContent">

                  <el-col :xs="24" :sm="24" :md="16" :lg="12" :xl="8">
                    <el-form :rules="loginRules" :model="registerForm" ref="registerForm">
                      <el-form-item prop="username">
                        <el-input type="text" name="username" v-model="registerForm.username" placeholder="请输入用户名"
                                  class="mtop" clearable>
                          <template slot="prepend">账号&nbsp &nbsp &nbsp &nbsp</template>
                        </el-input>
                      </el-form-item>

                      <el-form-item prop="upassword">
                        <el-input type="password" name="password" v-model="registerForm.upassword" placeholder="请输入密码"
                                  class="mtop" clearable>
                          <template slot="prepend">密码&nbsp &nbsp &nbsp &nbsp</template>
                        </el-input>
                      </el-form-item>

                      <el-form-item prop="cpassword">
                        <el-input name="cassword" type="password" v-model="registerForm.cpassword" placeholder="确认密码"
                                  class="mtop" clearable>
                          <template slot="prepend">确认密码</template>
                        </el-input>
                        <div class="location-selector">
                          <span style="color: rgb(170,207,250);">请选择所在地 </span>
                          <el-cascader
                            :options="options">
                          </el-cascader>
                        </div>
                        <div class="check-box">
                          <el-checkbox v-model="checked">我已阅读并同意</el-checkbox>
                          <a href="#" class="link-a"> xxx协议</a>
                        </div>
                        <el-button v-on:click="reg" type="primary" v-bind:disabled="disabled" class="mtop"
                                   style="width: 80% ;margin: 0 10%">submit
                        </el-button>
                      </el-form-item>
                    </el-form>
                  </el-col>
                </el-row>
              </div>

            </el-main>

            <el-footer>

            </el-footer>
          </el-container>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

  import NavBar from '../../components/GlobalNav/GlobalNav'
  import {isvalidUsername} from '@/utils/validate'

  export default {
    name: 'register',
    components: {NavBar},
    methods: {
      checkeds: function () {
        this.disabled = this.checked
      },
      routerBack() {
        this.$router.go(-1);
      },
      reg() {
        /*
        if(this.upassword == this.cpassword){
          console.log("equal")
         // this.$router.push({path:'#'})
        }

 /!*       fetch("url",{
          method:"post",
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
          body:JSON.stringify({"username":this.username,"password":this.cpassword})

        })
          .then(result => result.json())
          .then(result=>{this.msg=result.jwt})*!/
        else
        /!*  alert("密码不相等")*!/
          this.$message.error("密码不相等")
      },
*/

      }
    },
    watch: {
      checked(val, oldVal) {//普通的watch监听
        this.disabled = !this.disabled
      }
    },
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {

         /* console.log("check username");*/
          callback(new Error('请输入正确的用户名'))
          this.$message.error('请输入正确的用户名');
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {

     /*   console.log("check password length");
        console.log(value);*/
        if (value.length < 6) {
          callback(new Error('密码长度不能少于6'))
          this.$message.error('密码长度不能少于6');
        } else {
          callback()
        }
      }
      const validateRePassword = (rule, value, callback) => {
/*
        console.log("check repeate length");
        console.log(value);*/
        if (value !== this.registerForm.upassword) {
          callback(new Error('两次输入不相等'))
          this.$message.error('两次输入不相等');
        } else {
          callback()
        }
      }
      return {
        address: "",
        checked: false,
        disabled: true,
        options: [{
          value: 'jiangsu',
          label: '江苏',
          children: [{
            value: 'nanjing',
            label: '南京',
          }, {
            value: 'suzhou',
            label: '苏州',
          }]
        }, {
          value: 'zhejiang',
          label: '浙江',
          children: [{
            value: 'hangzhou',
            label: '杭州',

          }, {
            value: 'huzhou',
            label: '湖州',
          }]
        }],
        registerForm: {
          username: 'tangshisi',
          upassword: 'tangshisi',
          cpassword: 'tangshisi'
        },
        loginRules: {
          username: [{required: true, trigger: 'blur', validator: validateUsername}],
          upassword: [{required: true, trigger: 'blur', validator: validatePassword}],
          cpassword: [{required: true, trigger: 'blur', validator: validateRePassword}],

        }
      }

    }
  }
  /*    create() {
        this.$http.get("./").then((data) => {
          this.name = data.body;
        })
      }*/

</script>

<style scoped lang="scss">

  .register-container {
    margin-top: 40px;
  }

  .resigter-bgcolor {
    background-color: rgb(234, 239, 242);
    height: 100%;
    .registerContent {
      background-color: #ffffff;
      padding: 40px;
    }
    .el-main {
      margin: 0px;
      padding: 0px;
    }
    .el-header {
      background-color: rgb(220, 226, 229);
      color: #333;
      line-height: 66px;
      padding-top: 0px;
      margin-top: 0px;
    }

  }

  .register {
    height: 100%;
  }

  .link-a {
    text-decoration: none;
    color: rgb(36, 190, 254);
  }

  .location-selector {
    margin-top: 30px;
  }

  .mtop {
    height: 47px;
  }

  .check-box {
    margin: 20px 0;
  }

</style>

<style lang="scss">
  .resigter-bgcolor {
    .el-input__inner {
      height: 47px;
    }
    .location-selector {
      .el-input__inner {
        height: 40px;
      }
    }
  }
</style>
