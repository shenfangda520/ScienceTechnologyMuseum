<template>
    <div class="header">
      <div class="top">
        <div class="left">
          <a style="color: white;text-decoration: none;" href="statistical.html">返回</a>
        </div>
        <div class="right">
          资源浏览
        </div>
      </div>
      <div class="clear"></div>
      <div class="bottom">
        <ul>
          <li class="yonghu"><img src="img/yonghu.png">在线客服</li>
          <li class="guanli"><img src="img/guanli.png">地方科技馆管理</li>
          <li class="ziyuan"><img src="img/ziyuan.png">资源浏览</li>
          <li class="tongji"><img src="img/tongji.png">统计分析</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'header',
        data () {
            return {
                msg: 'App'
            }
        },
        mounted(){

        },
        methods: {

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

</style>
