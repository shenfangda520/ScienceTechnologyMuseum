<template>
    <div class="index-box">
        <!--首页部分-->
        <v-header></v-header>

      <div id="taking">
        <div class="left">
          <p>用户列表</p>
          <ul>
            <li>石家庄馆<div>12</div></li>
            <li>廊坊少年宫馆</li>
            <li>杭州馆</li>
            <li>呼和浩特馆</li>
            <li>驻马店科技馆</li>
          </ul>
        </div>
        <div class="right">
          <div class="head">
            <p></p>
            <span>在与用户交流</span>
            <p></p>
          </div>
          <div class="history">
            <div class="panel_right">
              <div class="arrow_box arrow_right_box">Hello!</div>
              <div class="icon_right"></div>
            </div>
            <div style="clear:both;">
              <div class="arrow_box arrow_left_box">Hi</div>
              <div class="icon_left"></div>
            </div>
          </div>
          <div class="speaking">
            <p>
              <img src="img/smile.png"/>
              <img src="img/A.png">
              <select name="">
                <option value="">默认字体</option>
                <option value="">微软雅黑</option>
                <option value="">宋体</option>
                <option value="">思源黑体</option>
                <option value="">黑体</option>
                <option value="">隶书</option>
              </select>
              <span>字体大小</span>
              <select name="">
                <option value="">10</option>
                <option value="">9</option>
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
                <option value="">13</option>
              </select>
            </p>
            <textarea id="new-message" placeholder="我想问..."></textarea>
            <div class="btn"><span>发送</span><b>
              <img src="img/down-jiantou.png"/>
              <div class="news">
                <p>按Ctrl+Enter发送消息，按Enter换行</p>
                <p>按Enter发送消息，按Ctrl+Enter换行</p>
              </div>
            </b>
            </div>
          </div>
        </div>
      </div>
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
          &:first-child {
            background: #1f1f1f;
          }
          &:last-child {
            border-right: 1px solid #4d4d4d;
          }
        }
      }
    }
  }

  #taking {
    width: 1170px;
    height: 550px;
    margin: 40px auto;
    .left {
      width: 180px;
      height: 100%;
      border: 1px solid #cccccc;
      float: left;
      p {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #f5f5f5;
        text-indent: 10px;
        font-weight: bolder;
      }
      ul li {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #f5f5f5;
        text-indent: 10px;
        font-weight: bolder;
        border-bottom: 1px solid #e5e5e5;
        background: white;
        color: #5d5d5d;
        font-weight: normal;
        cursor: pointer;
      }
    }
    .right {
      width: 976px;
      height: 100%;
      margin-left: 192px;
      border: 1px solid #cccccc;
      .head {
        height: 40px;
        width: 949px;
        margin: 0 auto;
        font-size: 0;
        p {
          width: 415px;
          height: 20px;
          border-bottom: 1px solid #e5e5e5;
          display: inline-block;
          position: relative;
          top: -5px;
        }
        span {
          display: inline-block;
          font-size: 14px;
          width: 119px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: #999999;
        }
      }
      .history {
        width: 100%;
        height: 390px;
        overflow-y: auto;
        border-bottom: 1px solid #cccccc;
      }
      .speaking {
        width: 100%;
        height: 119px;
        position: relative;
        p {
          width: 100%;
          height: 35px;
          line-height: 35px;
          color: #999999;
          img {
            position: relative;
            top: 5px;
            left: 10px;
            cursor: pointer;
            margin-right: 15px;
          }
        }
        textarea {
          width: 974px;
          height: 82px;
          text-indent: 15px;
          resize: none;
          outline: none;
          border-color: #FFFFFF;
        }
        .btn {
          width: 106px;
          height: 35px;
          position: absolute;
          bottom: 5px;
          right: 5px;
          span {
            display: inline-block;
            width: 90px;
            height: 100%;
            background: black;
            color: white;
            text-align: center;
            line-height: 35px;
            cursor: pointer;
          }
          b {
            display: inline-block;
            width: 14px;
            height: 100%;
            background: black;
            margin-left: 2px;
            line-height: 35px;
            text-align: center;
            cursor: default;
            position: relative;
            .news {
              position: absolute;
              width: 248px;
              height: 62px;
              border: 1px solid #CCCCCC;
              color: #999999;
              font-weight: normal;
              font-size: 12px;
              right: 0;
              display: none;
              p {
                &:first-child {
                  background: #f5f5f5;
                  height: 31px;
                  line-height: 31px;
                  cursor: pointer;
                }
                &:last-child {
                  background: white;
                  height: 31px;
                  line-height: 31px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }

  .no-read-message {
    float: right;
    height: 24px;
    width: 24px;
    background: #00c15c;
    margin: 8px;
    border-radius: 12px;
    line-height: 24px;
    display: none;
    span {
      margin: 0 -2px;
      color: #fff;
    }
  }

  /*对话*/
  .arrow_box {
    position: relative;
    background: #333;
    padding: 8px;
    max-width: 320px;
    border-radius: 6px;
    float:left;
    color: #dddddd;
    margin:0 0 5px 0;
    word-wrap: break-word;
  }

  .arrow_right_box:after {
    left: 100%;
    top: 18px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-left-color: #333;
    border-width: 8px;
    margin-top: -8px;
  }

  .arrow_left_box:after {
    right: 100%;
    top: 18px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-right-color: #333;
    border-width: 8px;
    margin-top: -8px;
  }

  .arrow_left_box{
    margin:0 0 5px 56px;
  }

  .panel_right {
    float: right;
  }

  .icon_right {
    height: 32px;
    width: 32px;
    background: #333;
    float: left;
    margin: 0 5px 0 20px;
  }

  .icon_left {
    height: 32px;
    width: 32px;
    background: #333;
    margin: 0 0 0 5px;
  }
</style>
