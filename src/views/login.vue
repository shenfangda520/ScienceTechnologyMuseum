<template>
    <div class="login">
        <!--首页部分-->
      <div id="login">
        <div class="top">
        </div>
        <div class="mid">
          <p class="password"><img src="../assets/img/username.png"/><input type="text" name="" id="userName" value="吴印照" placeholder="用户名"/></p>
          <p class="username"><img src="../assets/img/password.png"/><input type="password" name="" id="pwd" value="123" placeholder="密码"/></p>
          <p id="btnLogin">登录</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #login {
    width: 626px;
    height: 363px;
    margin: 0 auto;
    margin-top: 12%;
    background: url(../assets/img/background-login.png) no-repeat;
    .top {
      width: 598px;
      height: 60px;
      margin: 0 auto;
      background: #f5f5f5 url(../assets/img/logo-login.png) no-repeat;
      background-position-x: 58px;
      background-position-y: 15px;
      position: relative;
      top: 14px;
    }
    .mid {
      p {
        width: 350px;
        height: 48px;
        line-height: 48px;
        border: 1px solid #cccccc;
        margin-left: 125px;
        &:first-child {
          margin-top: 50px;
        }
        &:nth-child(2) {
          margin-top: 15px;
        }
        &:last-child {
          margin-top: 40px;
          cursor: pointer;
          background: #dddddd;
          border: none;
          text-align: center;
          &:hover {
            background: #CCCCCC;
          }
        }
      }
      .password img, .username img {
        position: relative;
        left: 10px;
        top: 5px;
      }
      .password input, .username input {
        border: none;
        height: 90%;
        width: 91%;
        text-indent: 20px;
        position: relative;
        top: -2px;
        left: 10px;
        outline: none;
      }
    }
  }
</style>
