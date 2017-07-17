<template>
    <div class="statist">
        <!--首页部分-->
      <h2>
        虚拟现实科技馆-VR资源统计分析平台
      </h2>
      <ul>

        <li class="yonghu">
          <router-link id="item-link" to="/OnlineSrevice">
          <img src="../assets/img/service.png"/><br/>
          <span>在线客服</span>
          </router-link>
        </li>


        <li class="guanli">
          <router-link id="item-link" to="/PartManage">
          <img src="../assets/img/manage.png"/><br/>
          <span>地方科技馆管理</span>
          </router-link>
        </li>


        <li class="ziyuan">
          <router-link id="item-link" to="/ResourceLook">
          <img src="../assets/img/resource.png"/><br/>
          <span>资源浏览</span>
          </router-link>
        </li>


        <li class="tongji">
          <router-link id="item-link" to="/CountAnalyse">
          <img src="../assets/img/count.png"/><br/>
          <span>统计分析</span>
          </router-link>
        </li>

      </ul>
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
  .statist{
    height: 100%;
  }
  #item-link{
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #000;
    text-decoration:none;
  }
  h2 {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: black;
    text-align: center;
    line-height: 80px;
    color: white;
    font-size: 30px;
  }

  ul {
    width: 100%;
    height: 100%;
    font-size: 0;
  }

  li {
    flex: auto;
    vertical-align: middle;
    cursor: pointer;
    font-size: 22px;
    text-align: center;
    display: inline-block;
    width: 25%;
    height: 100%;
    &:nth-child(2n) {
      background: #F5F5F5;
    }
    &:nth-child(2n+1) {
      background: #FFFFFF;
    }
  }

  ul li img {
    margin-top: 70%;
    margin-bottom: 20px;
  }
</style>
