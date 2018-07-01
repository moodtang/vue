<template >

  <div lg="8" id="login-container" class="login-container" >

    <el-row type="flex" justify="center">
      <el-col :md="14" :xs="24" :sm="14" :lg="8">
        <el-form class="login-form" ref="loginForm" :model="loginForm" label-position="left" :rules="loginRules">
          <div class="title-container">
            <h3 class="title">登陆</h3>
          </div>
          <el-form-item prop="username">
<!--                    <span class="svg-container svg-container_login">
                      <svg-icon icon-class="user"></svg-icon>
                    </span>-->
            <el-input name="username"   v-model="loginForm.username" type="text"  autoComplete="on"  placeholder="username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
  <!--                    <span class="svg-container">
                        <svg-icon icon-class="password" />
                      </span>-->
            <el-input name="password" :type="passwordType"   v-model="loginForm.password"  autoComplete="on"  placeholder="password"/>
<!--                    <span class="show-pwd" @click="showPwd">
                      <svg-icon icon-class="eye" />
                  </span>-->
          </el-form-item>

          <el-button type="primary" style="width:100%;margin-bottom:30px;"  :loading="loading">登陆</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  import {isvalidUsername} from '@/utils/validate'

  export default {
    name: "Index",
    data() {

      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码长度不能少于6'))
        } else {
          callback()
        }
      }
      return {
        nav : '',
        loginForm: {
          username: 'admin',
          password: '1111111'
        },
        passwordType: 'password',
        loading: false,
        picSrc:'../../assets/login_image/water.jpg',
        loginRules: {
          username: [{required: true, trigger: 'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePassword}]
        }
      }
    },
    mounted() {

      console.log("in this vue");



    }

  }
</script>


<style rel="stylesheet/scss" lang="scss">
  $bg: #2d3a4b;
  $light_gray: #eee;

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
      }
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

  }
</style>


<style rel="stylesheet/scss" lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;

    /*background-color: $bg;*/
    background-image: url("../../assets/login_image/water.jpg") ;

    -webkit-background-size: cover;
    background-size: cover;
    .login-form {
      /* position: absolute;*/
      left: 0;
      right: 0;
      /*      width: 520px;*/
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
      background: rgba(0,0,0,.10);
      border-radius: 10px;
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 35px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        font-weight: 400;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
      .set-language {
        color: #fff;
        position: absolute;
        top: 5px;
        right: 0px;
      }
    }

    overflow: auto;
  }
</style>
