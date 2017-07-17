<template>
    <div class="part-manage">
        <!--地方科技馆管理页面-->
        <v-header></v-header>

        <v-paneldata></v-paneldata>
    </div>
</template>

<script>
    export default {
        name: 'part-manage',
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

  .part-manage {
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
          &:nth-child(2) {
            background: #1f1f1f;
          }
          &:last-child {
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
          margin-right: 15px;
        }
      }
    }
  }

  #edit, #add {
    width: 511px;
    height: 535px;
    position: fixed;
    top: 100px;
    left: 32%;
    background: url(../assets/img/bianji-bk.png) no-repeat;
    display: none;
  }

  #edit .top, #add .top {
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
  }

  #edit .top img, #add .top img {
    /*position: absolute;
    top: 10px;
    right: 10px;*/
    float: right;
    margin-top: 10px;
    margin-right: 10px;
    cursor: pointer;
    width: 31px;
    height: 31px;
  }

  #edit .mid p, #add .mid p {
    width: 439px;
    height: 40px;
    margin-left: 33px;
    margin-top: 20px;
  }

  #edit .mid p span, #add .mid p span {
    display: inline-block;
    width: 96px;
    height: 100%;
    line-height: 40px;
    text-align: right;
  }

  #edit .mid p input, #add .mid p input {
    width: 247px;
    height: 36px;
    outline: none;
    margin-left: 10px;
  }

  #edit .mid p b, #add .mid p b {
    width: 247px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    display: inline-block;
    border: 1px solid #999999;
    font-weight: normal;
    margin-left: 106px;
    cursor: pointer;
  }

  #edit .mid p b:hover, #add .mid p b:hover {
    background: #DDDDDD;
  }

  #delete {
    width: 422px;
    height: 166px;
    position: fixed;
    top: 32%;
    left: 35%;
    background: white;
    box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.5);
    display: none;
    .top {
      width: 100%;
      height: 116px;
      line-height: 116px;
      text-align: center;
      img {
        position: relative;
        top: 20px;
        left: -15px;
      }
    }
    .bottom {
      width: 100%;
      height: 50px;
      .s1 {
        width: 50%;
        height: 100%;
        display: inline-block;
        background: #cccccc;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
      }
      .s2 {
        width: 50%;
        height: 100%;
        display: inline-block;
        background: #cccccc;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
        background: #f5f5f5;
      }
    }
  }

  #accredit {
    width: 1250px;
    height: 560px;
    border: 1px solid #b5b5b5;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.5);
    display: none;
    .head {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: #1f1f1f;
      font-size: 22px;
      color: white;
      img {
        float: right;
        margin-top: 10px;
        margin-right: 15px;
        cursor: pointer;
      }
    }
    .one, .two {
      width: 1200px;
      height: 220px;
      margin: 0 auto;
      margin-top: 25px;
    }
    .one .top {
      width: 100%;
      height: 30px;
      .left {
        float: left;
        width: 113px;
        height: 100%;
        line-height: 30px;
        font-size: 19px;
        border-bottom: 2px solid #333333;
      }
    }
    .two .top .left {
      float: left;
      width: 136px;
      height: 100%;
      line-height: 30px;
      font-size: 19px;
      border-bottom: 2px solid #333333;
    }
    .one .top .right {
      float: left;
      width: 1080px;
      height: 31px;
      line-height: 31px;
      margin-left: 7px;
      border-bottom: 1px solid #cccccc;
      text-align: right;
    }
    .two .top .right {
      float: left;
      width: 1057px;
      height: 31px;
      line-height: 31px;
      margin-left: 7px;
      border-bottom: 1px solid #cccccc;
      text-align: right;
    }
    .one {
      .top .right span {
        display: inline-block;
        width: 75px;
        height: 25px;
        border: 1px solid #666666;
        line-height: 25px;
        text-align: center;
        cursor: pointer;
        &:hover {
          color: white;
          background: #676767;
        }
      }
      .picture {
        width: 100%;
        height: 180px;
        margin-top: 10px;
        position: relative;
      }
    }
    .two .picture {
      width: 100%;
      height: 180px;
      margin-top: 10px;
      position: relative;
    }
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  #accredit {
    .one .picture .swiper-slide .img, .two .picture .swiper-slide .img {
      width: 224px;
      height: 126px;
      background: lavender;
      margin: 0 auto;
    }
  }

  .img img {
    width: 224px;
    height: 126px;
  }

  #accredit {
    .one .picture .swiper-slide p, .two .picture .swiper-slide p {
      width: 224px;
      height: 36px;
      background: #F5F5F5;
      line-height: 36px;
      margin: 0 auto;
      label {
        margin-left: 10px;
      }
      input {
        float: right;
        width: 20px;
        height: 20px;
        margin-top: 9px;
        margin-right: 9px;
      }
    }
  }
</style>
