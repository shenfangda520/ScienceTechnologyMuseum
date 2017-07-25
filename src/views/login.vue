<template>
    <div class="login">
        <!--登录页面-->
      <div id="login">
        <div class="top">
        </div>
        <div class="mid">
          <p class="password">
            <img src="../assets/img/username.png"/>
            <input type="text" name="" id="userName" auto-complete="off" v-model="ruleForm.name" placeholder="用户名"/>
          </p>
          <p class="username">
            <img src="../assets/img/password.png"/>
            <input type="password" name="" id="pwd"  placeholder="密码" auto-complete="off" v-model="ruleForm.password" />
          </p>
          <p id="btnLogin" @click="handleSubmit">登录</p>
        </div>
      </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import api from '../api/index'
    export default {
        name: 'login',
      data () {
        return {
          // 表单数据
          ruleForm: {
            name: '',
            password: ''
          },

        }
      },
        methods:{
          open3() {
            this.$notify({
              title: '成功',
              message: '恭喜登录成功！',
              type: 'success'
            });
          },
          open6() {
            this.$notify.error({
              title: '错误',
              message: '登录用户名密码不正确！'
            });
          },
          // 表单提交
          handleSubmit () {
            let data = {
              userName: this.ruleForm.name,
              userPwd: this.ruleForm.password
            }
            api.getLogin(data.userName,data.userPwd)
              .then(res=>{
                  //console.log(res)
                if(res.data.Status == 1){
                      //登录成功！
                      this.open3()
                  //sessionStorage.setItem('accessToken', result.data.access_token);
                    window.sessionStorage.setItem("userName", userName);
                    this.$router.push('Statistical')
                }else{
                    //登录失败！
                      this.open6()
                }
              })
          }

        },
      mounted(){

        var that = this;
        // 姓名验证
        $("#userName").blur(function () {
           // console.log(that.ruleForm.name)
          var userName=that.ruleForm.name;
          if (!userName) {
            that.$notify({
              title: '警告',
              message: '请输入账号',
              type: 'warning'
            });

          } else if (!/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test(userName) || userName.length < 4) {
            that.$notify({
              title: '警告',
              message: '账号只能是4位以上中英文或者数字',
              type: 'warning'
            });
          }
        })


        // 密码验证
        $("#pwd").blur(function () {
          var pwd=that.ruleForm.password;
          if (!pwd) {
            that.$notify({
              title: '警告',
              message: '请输入密码',
              type: 'warning'
            });

          } else if (!/^[A-Za-z0-9]+$/.test(pwd) || pwd.length < 4) {
            that.$notify({
              title: '警告',
              message: '密码只能是4' +
              '位以上英文或者数字',
              type: 'warning'
            });
          }
        })

      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  html, body {
    width: 100%;
    height: 100%;
    visibility: hidden;
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
        width: 87%;
        text-indent: 20px;
        position: relative;
        top: -2px;
        left: 10px;
        outline: none;
      }
    }
  }
</style>
