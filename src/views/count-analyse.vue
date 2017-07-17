<template>
    <div class="index-box">
        <!--首页部分-->
        <v-header></v-header>

        <v-paneldata></v-paneldata>
    </div>
</template>

<script>
    export default {
        name: 'index',
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
  }

  header {
    width: 100%;
    height: 120px;
    color: white;
    .top {
      width: 100%;
      height: 80px;
      font-size: 30px;
      .left {
        width: 120px;
        height: 80px;
        line-height: 80px;
        float: left;
        text-align: center;
        line-height: 80px;
        background: #333333;
        cursor: pointer;
      }
      .right {
        margin-left: 120px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        background: #1f1f1f;
      }
    }
    .bottom {
      width: 100%;
      height: 40px;
      background: #333333;
      border-top: 1px solid #4d4d4d;
      border-bottom: 1px solid #4d4d4d;
      ul {
        width: 1200px;
        height: 40px;
        margin: 0 auto;
        font-size: 0;
        li {
          display: inline-block;
          font-size: 14px;
          width: 298px;
          border-left: 1px solid #4d4d4d;
          text-align: center;
          line-height: 40px;
          cursor: pointer;
          img {
            position: relative;
            top: 4px;
            left: -5px;
          }
          &:last-child {
            background: #1f1f1f;
            border-right: 1px solid #4d4d4d;
          }
        }
      }
    }
  }

  #content {
    width: 1200px;
    margin: 0 auto;
    height: 500px;
    margin-top: 20px;
    .top {
      width: 100%;
      height: 28px;
      select {
        float: left;
        width: 166px;
        height: 26px;
        outline: none;
      }
      .sel {
        float: right;
        input {
          width: 166px;
          height: 26px;
          outline: none;
        }
        .s1 {
          display: inline-block;
          width: 74px;
          height: 26px;
          line-height: 26px;
          border: 1px solid #CCCCCC;
          text-align: center;
          cursor: pointer;
        }
        .s2 {
          display: inline-block;
          width: 110px;
          height: 26px;
          line-height: 26px;
          border: 1px solid #CCCCCC;
          text-align: center;
          cursor: pointer;
          &:hover {
            background: #DDDDDD;
          }
        }
      }
    }
    .list table {
      border: 1px solid white;
      border-collapse: collapse;
      width: 100%;
      margin-top: 5px;
      th, td {
        border: 1px solid white;
        padding: 10px;
        text-align: center;
        color: #333333;
      }
      th {
        background: #ececec;
        font-weight: bold;
      }
      .tr1 {
        &:hover {
          background: #f5f5f5;
          border: 1px solid #f5f5f5;
        }
        img {
          cursor: pointer;
        }
      }
    }
  }

  #edit {
    width: 511px;
    height: 535px;
    position: fixed;
    top: 100px;
    left: 32%;
    background: url(../assets/img/bianji-bk.png) no-repeat;
    display: none;
    .top {
      width: 439px;
      height: 50px;
      line-height: 50px;
      margin-left: 33px;
      margin-top: 33px;
      background: #1f1f1f;
      text-align: center;
      line-height: 50px;
      font-size: 22px;
      color: white;
      position: relative;
      img {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
      }
    }
    .mid p {
      width: 439px;
      height: 40px;
      margin-left: 33px;
      margin-top: 15px;
      span {
        display: inline-block;
        width: 96px;
        height: 100%;
        line-height: 40px;
        text-align: right;
      }
      input {
        width: 247px;
        height: 36px;
        outline: none;
        margin-left: 10px;
      }
      b {
        width: 247px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        display: inline-block;
        border: 1px solid #999999;
        font-weight: normal;
        margin-left: 106px;
        cursor: pointer;
        &:hover {
          background: #DDDDDD;
        }
      }
    }
  }

  .icon-arrow-left {
    background-position: -240px -96px;
  }

  .icon-arrow-right {
    background-position: -264px -96px;
  }

  [class^="icon-"], [class*=" icon-"] {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-top: 1px;
    line-height: 14px;
    vertical-align: text-top;
    background-image: url(../assets/img/glyphicons-halflings.png);
    background-position: 14px 14px;
    background-repeat: no-repeat;
  }
</style>
