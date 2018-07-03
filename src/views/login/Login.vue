<template>
  <div>
    <nav-bar
    :router-one="routerOne"></nav-bar>
    <el-container>
      <el-header>
        <el-row justify="center" type="flex">
          <el-col :xs="24" :md="22" :lg="18" :xl="15">
            <div class="back-wrap">
              <!--返回上一层-->
              <a class="history-back" @click="routerBack">返回</a>
              <span class="line">|</span>
              <span>登陆</span>
            </div>
          </el-col>
        </el-row>
        <div class="title">登陆Loarawan Project</div>
      </el-header>

     <!-- 验证表单的时候，主要加el-form-item-->
      <el-main style="margin-top: 10px">
        <el-row type="flex" justify="center" :gutter="40">
          <el-col class="container-left" :xl="8" :lg="10" :md="10" :xs="24">
            <el-form class="login-form" :model="loginForm" ref="loginForm" label-position="left" :rules="loginRules">
              <el-form-item prop="username">
              <el-input name="username" placeholder="username" v-model="loginForm.username" size="large">
                <template slot="prepend">
                  <span class="svg-container svg-container_login">
                      <svg-icon icon-class="user"></svg-icon>
                  </span>
                </template>
              </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input name="password" placeholder="password" v-model="loginForm.password" size="large">
                <template slot="prepend">
                  <span class="svg-container svg-container_login">
                      <svg-icon icon-class="password"></svg-icon>
                  </span>
                </template>
              </el-input>
              </el-form-item>

              <el-input placeholder="验证码" size="large">
                <template slot="append">
                  <span class="svg-container svg-container_login">
                      <svg-icon icon-class="user"></svg-icon>
                  </span>
                </template>
              </el-input>
              <el-checkbox v-model="checked" class="hidden-sm-and-up"  @change="handleCheckedCitiesChange">允许获取个人信息</el-checkbox>
              <el-button type="primary" class="login-button" ref="loginButton"
                         :disabled="!checked"
                         :loading="loading"
                         @click.native.prevent="handleLogin">登陆并授权</el-button>
              <div class="forget-password"><span>忘记密码?</span></div>


            </el-form>
          </el-col>
          <el-col class="container-right hidden-xs-only" :xl="8" :lg="10" :md="10" :xs="24">
            <div class="right-content">
              <p>授权后，允许进行以下操作：</p>
              <el-checkbox v-model="checked"  @change="handleCheckedCitiesChange">获取您的个人信息</el-checkbox>
              <p>授权后，表明您已同意以下操作:<a href="#" class="coop">lorawan-project协议</a></p>
            </div>
          </el-col>
        </el-row>

      </el-main>
    </el-container>
  </div>
</template>

<script>

  import NavBar from '../../components/GlobalNav/GlobalNav'
  import {isvalidUsername} from '@/utils/validate'

  export default {
    components: {NavBar},
    name: "Login",
    mounted(){
/*      console.log(this.$refs.loginButton.disabled);
      this.$refs.loginButton.disabled = false;*/

    },
    data() {

      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {

          console.log("check username");
          callback(new Error('请输入正确的用户名'))
          this.$message.error('请输入正确的用户名');
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {

        console.log("check password length");
        if (value.length < 6) {
          callback(new Error('密码长度不能少于6'))
          this.$message.error('密码长度不能少于6');
        } else {
          callback()
        }
      }
      return {
        routerOne:'/register'
        ,
        loginForm: {
          username: 'admin',
          password: '1111111'
        },
        loginRules: {
          username: [{required: true, trigger: 'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePassword}]
        }
        ,
        checked: true,
        loading:false,
      }
    },
    methods:{
      handleCheckedCitiesChange(val) {
        //同意协议
      },
      handleLogin(){
        // 添加ajax时间
        this.$message("login");
      },
      routerBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="scss">


  .el-container {
    /*background-color: #d3dce6;*/
    height: 600px;
    .el-header {

      margin-top: 20px;
      .back-wrap {
        font-size: 14px;
        vertical-align: baseline;
      }
      .history-back {
        color: #19bbff;
      }
      .title {
        width: 100%;
        margin-top: 10px;
        text-align: center;
        font-size: 20px;
      }
    }
    .el-main {
      height: 400px;
      .container-left {
        border: #1f2d3d;
        height: 200px;
        border-radius: 10px;
      }
      .el-col {
        padding: 10px;
      }

      .container-right {
        border: #1f2d3d;
        height: 400px;
        border-left: 1px solid #eff0f4;

        .right-content {
          margin: 40px;
        }

      }
      .coop {
        color: #19bbff;
      }
      .login-form {
        margin: 40px;
        .el-input {
          margin: 2px auto;
        }
        .login-button {
          width: 100%;
          margin-top: 20px;
        }

        .forget-password {
          margin-top: 10px;
          color: #19bbff;
        }
      }
      p {
        color: #333;
      }
    }
  }

</style>

<style lang="scss">
  .container-left {

  .el-input-group--append {
    height: 47px;
  }

  .el-input__inner {
    height: 47px;
  }

  .el-input-group__prepend {
    height: 47px;
  }

  }

</style>
