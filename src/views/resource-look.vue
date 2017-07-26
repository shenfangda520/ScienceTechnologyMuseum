<template>
  <div class="resource">
    <!--资源浏览页面-->
    <v-header :active="2" title="资源浏览"></v-header>
    <div id="accredit">
      <div class="one">
        <div class="top">
          <div class="left">
            HTC-VR资源
          </div>
          <!--<div class="right">
              <span>确认授权</span>
          </div>-->
          <div class="clear"></div>
        </div>
        <div class="picture">
          <!-- Swiper -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div v-for="(data,index) in Listdata" :data-code="data.VrCode" class="swiper-slide swiper-slide-active"
                   style="width: 216px; margin-right: 30px;">
                <div class="img">
                  <img :src="data.ImgURL">
                </div>
                <p>
                  <label>{{data.VrName}}</label>
                </p>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </div>

      <div class="two">
        <div class="top">
          <div class="left">
            Oculus-VR资源
          </div>
          <!--<div class="right">
              <span>确认授权</span>
          </div>-->
          <div class="clear"></div>
        </div>
        <div class="picture">
          <!-- Swiper -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div v-for="(data,index) in Listdatadw" :data-code="data.VrCode"
                   class="swiper-slide swiper-slide-active"
                   style="width: 216px; margin-right: 30px;">
                <div class="img">
                  <img :src="data.ImgURL">
                </div>
                <p>
                  <label>{{data.VrName}}</label>
                </p>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </div>

      <div id="information">
        <span class="sanjiao"></span>
        <div class="top">
          <h2>恐龙大灭绝</h2>
          <!--<h4>发行于：2017年5月20日</h4>-->
        </div>
        <div class="mid">

        </div>
        <div class="bottom">
          恐龙（英文名：Dinosaur）[1]
          ，是出现在中生代时期（三叠纪，侏罗纪和白垩纪）的一类爬行动物的统称，矫健的四肢、长长的尾巴和庞大的身躯是大多数恐龙的写照。它们主要栖息于湖岸平原（或海岸平原）上的森林地或开阔地带。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import api from '../api/index'
  import '../../static/js/swiper.min'
  export default {
    name: 'resource',
    data () {
      return {
        Listdata: [],
        Listdatadw: []
      }
    },
    beforeCreate(){
      if (!window.sessionStorage.getItem("userName")) {
        this.$router.push('/')
      }
    },
    mounted(){
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
      })
      //
      this.getVRInfoList()
    },
    methods: {
      getVRInfoList(){
        console.log("请求数据中")
        let lsVR = [{type: 'HTC', className: 'one'}, {type: 'Oculus', className: 'two'}];
        api.getVRInfoList({VrType: lsVR[0].type || undefined}).then(res => {
          console.log(res)
          this.Listdata = res.Data;

        }).catch(err =>{
          console.log(err);
        });
        api.getVRInfoList({VrType: lsVR[1].type || undefined}).then(res => {
          //console.log(res)
          this.Listdatadw = res.Data;

        }).catch(err =>{
          console.log(err);
        });

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../static/css/swiper.min.css";

  html, body {
    width: 100%;
    height: 100%;
  }

  .resource {
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
          &:nth-child(3) {
            background: #1f1f1f;
          }
          &:last-child {
            border-right: 1px solid #4d4d4d;
          }
        }
      }
    }
  }

  #accredit {
    width: 1250px;
    height: 560px;
    position: relative;
    top: 50px;
    margin: 0 auto;
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
    .one .top, .two .top {
      width: 100%;
      height: 30px;
    }
    .one .top .left {
      float: left;
      width: 113px;
      height: 100%;
      line-height: 30px;
      font-size: 19px;
      border-bottom: 2px solid #333333;
    }
    .two {
      .top .left {
        float: left;
        width: 113px;
        height: 100%;
        line-height: 30px;
        font-size: 19px;
        border-bottom: 2px solid #333333;
        float: left;
        width: 136px;
        height: 100%;
        line-height: 30px;
        font-size: 19px;
        border-bottom: 2px solid #333333;
      }
      margin-top: 50px;
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
      width: 1080px;
      height: 31px;
      line-height: 31px;
      margin-left: 7px;
      border-bottom: 1px solid #cccccc;
      text-align: right;
      float: left;
      width: 1057px;
      height: 31px;
      line-height: 31px;
      margin-left: 7px;
      border-bottom: 1px solid #cccccc;
      text-align: right;
    }
    .one .top .right span, .two .top .right span {
      display: inline-block;
      width: 75px;
      height: 25px;
      border: 1px solid #666666;
      line-height: 25px;
      text-align: center;
      cursor: pointer;
    }
    .one .top .right span:hover, .two .top .right span:hover {
      color: white;
      background: #676767;
    }
    .one .picture, .two .picture {
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
    .one .picture .swiper-slide, .two .picture .swiper-slide {
      position: relative;
    }
    .one .picture .swiper-slide .img, .two .picture .swiper-slide .img {
      width: 224px;
      height: 126px;
      background: lavender;
      margin: 0 auto;
    }
    .one .picture .swiper-slide .img img, .two .picture .swiper-slide .img img {
      width: 224px;
      height: 126px;
    }
    .one .picture .swiper-slide p, .two .picture .swiper-slide p {
      width: 224px;
      height: 36px;
      background: #F5F5F5;
      line-height: 36px;
      margin: 0 auto;
    }
    .one .picture .swiper-slide p label, .two .picture .swiper-slide p label {
      margin-left: 10px;
    }
    .one .picture .swiper-slide p input {
      float: right;
      width: 20px;
      height: 20px;
      margin-top: 9px;
      margin-right: 9px;
    }
  }

  #information {
    width: 440px;
    height: 513px;
    /*height:420px;*/
    background: url(../assets/img/sanjiaokuang.png) no-repeat;
    position: absolute;
    top: 0;
    left: 230px;
    z-index: 99;
    color: #ececec;
    display: none;
    .top {
      width: 345px;
      height: 50px;
      margin-left: 52.5px;
      margin-top: 25px;
      h4 {
        font-size: 12px;
      }
    }
    .mid {
      width: 345px;
      height: 215px;
      background: lavender;
      margin-left: 52.5px;
      img {
        width: 345px;
        height: 215px;
      }
    }
    .bottom {
      margin-top: 15px;
      margin-left: 52.5px;
      width: 345px;
      background: #333333;
      padding: 15px 0;
      text-indent: 28px;
      font-size: 14px;
    }
  }
</style>
