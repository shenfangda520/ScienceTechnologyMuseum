<template>
  <div class="count-analyse">
    <!--统计分析页面-->
    <v-header :active="3" title="统计分析"></v-header>
    <div id="content">
      <!--上半部分-->
      <div class="top">
        <select title="" id="city-name" name="">
          <option value="">选择地方科技馆</option>
          <option v-for="(item,index) in MuseumNames" :data-code="item.museumCode">{{item.museumName}}-{{item.regionName}}</option>
        </select>
        <div class="sel">
          <input type="text" id="start-time" name="" value="" placeholder="选择开始时间"/>
          <input type="text" id="end-time" name="" value="" placeholder="选择截止日期"/>
          <span class="s1">搜索</span>
          <span class="s2"><a style="color:#333;">导出Excel</a></span>
          <!--导出Excel  href="http://10.6.80.93:8066/api/VR/ExcelOutputs"-->
        </div>
      </div>
      <!--下半部分-->
      <div class="list">
        <table id="vrHandle-info" border="" cellspacing="" cellpadding="">

        </table>
      </div>

    </div>
    <!--编辑部分-->
    <div id="edit">
      <div class="top">
        编辑
        <img src="../assets/img/close.png"/>
      </div>
      <div class="mid">
        <p><span>编号</span><input title="" readonly type="text" name="" id="e-code" value=""/></p>
        <p><span>日期</span><input title="" readonly type="text" name="" id="e-time" value=""/></p>
        <p><span>科技馆名称</span><input title="" readonly type="text" name="" id="e-name" value=""/></p>
        <p><span>资源名称</span><input title="" readonly type="text" name="" id="e-theme" value=""/></p>
        <p><span>状态</span><input title="" type="text" name="" id="e-state" value=""/></p>
        <p><span>操作次数</span><input
          onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^0-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"
          onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^0-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"
          title="" type="text" name="" id="e-handle" value="666"/></p>
        <p><b class="b1">确认</b></p>
        <p><b class="b2">取消</b></p>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import api from '../api/index'
  export default {
    name: 'count-analyse',
    data () {
      return {
        MuseumNames: [],
        VRHandleInfo: [],

      }
    },
    beforeCreate(){
      if (!window.sessionStorage.getItem("userName")) {
        this.$router.push('/')
      }
    },
    mounted(){
      //设置开始日期控件
      $('#start-time').datetimepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        minView: 'month'
      });

      //设置结束日期控件
      $('#end-time').datetimepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        minView: 'month'
      });
      this.getVRHandleInfo();
      this.getMuseumNames();
    },
    methods: {
      //请求数据
      getVRHandleInfo(){
        api.getVRHandleInfoList().then(res => {
          //console.log(res)
          this.VRHandleInfo = res.data.Data.itemList;
          this.loadMuseumHandleInfo(res)
          //console.log(this.VRHandleInfo)
        })
      },
      getMuseumNames(){
        api.getMuseumNamesList().then(res => {
          //console.log(res)
          this.MuseumNames = res.data.Data.itemList;
          //console.log(this.MuseumNames)
        })
      },
      setTemplateInfo(data) {
        //编号|日期|名称|状态|操作次数
        var lsAttr = data.split('|');
        $('#e-code').val(lsAttr[0]);
        $('#e-time').val(lsAttr[1]);
        $('#e-name').val(lsAttr[2]);
        $('#e-theme').val(lsAttr[3]);
        $('#e-handle').val(lsAttr[4]);
        $('#e-state').val(lsAttr[5]);
        vrHandleCheckCode = lsAttr[0];
      },
      //属性合并
      getAttributes(data) {
        console.log("被调用了！")
        var rtValue = '';

        var lsField = ['OperID', 'OPERDATE', 'MuseumName', 'VrName', 'OperNum', 'UploadStatus'];
        for (var i = 0, length = lsField.length; i < length; i++) {
          var field = lsField[i];
          if (rtValue === '') {
            //rtValue = data[lsField[i]];
            rtValue = field === 'OPERDATE' ? data[lsField[i]].split('T')[0] : (data[lsField[i]] !== null ? data[lsField[i]] : '同步成功');
          } else {
            //rtValue += '|' + data[lsField[i]];
            rtValue += '|' + (field === 'OPERDATE' ? data[lsField[i]].split('T')[0] : (data[lsField[i]] !== null ? data[lsField[i]] : '同步成功'));
          }
        }
        return rtValue;
      },
      //编辑提交事件
      editHandleInfo() {
        var code = $('#e-code').val();
        var time = $('#e-time').val();
        var name = $('#e-name').val();
        var theme = $('#e-theme').val();
        var staus = $('#e-state').val();
        var handleCount = $('#e-handle').val();
        var params = {
          OperID: code,
          OperNum: handleCount,
          SYNCSTATUS: staus === '' ? '同步成功' : staus
        };
        VRHandle.editVRHandleCount(params, 'POST', function (result) {
          var status = typeof result.Status === 'string' ? parseInt(result.Status) : result.Status;
          var dataList = [];
          if (status) {
            VRHandle.getVRHandleInfoList({}, 'GET', loadMuseumHandleInfo);
          }
          else {
            console.log('数据编辑失败!');
          }
        })
      },
      //点击搜索按钮和下拉列表选择事件
      searchInfo(code, startTime, endTime) {
        var params = {
          MuseumCode: code || null,
          StartDate: startTime || null,
          EndDate: endTime || null
        };

        api.getVRHandleInfoList().then(res => {
          //console.log(res)
          this.VRHandleInfo = res.data.Data.itemList;
          this.loadMuseumHandleInfo(res)
          //console.log(this.VRHandleInfo)
        })

      },
      //加载表格
      loadMuseumHandleInfo(res) {
        var that = this;
        var dataList = res.data.Data.itemList;

        $('#vrHandle-info').bootstrapTable('destroy').bootstrapTable({
          columns: [
            {
              field: 'Number',
              title: '序号',
              formatter: function (value, row, index) {
                return index + 1;
              },
              align: 'center'
            },
            {
              field: 'MuseumName',
              title: '科技馆名称',
              align: 'center'
            },
            {
              field: 'OPERDATE',//'OperID',
              title: '日期',
              align: 'center',
              formatter: function (value, row, index) {
                return row.OPERDATE.split('T')[0];//zlh 2017.07.06 日期仅显示年月日
              }
            },
            {
              field: 'VrName',
              title: '资源名称',
              align: 'center'
            },
            {
              field: 'UploadStatus',
              title: '状态',
              align: 'center',
              formatter: function (value, row, index) {
                return value !== null ? value : '同步成功'
              }
            },
            {
              field: 'OperNum',
              title: '操作次数',
              align: 'center'
            },
            {
              title: '编辑',
              formatter: function (value, row, index) {
                setTimeout(function () {
                  $('#content .list').find('table').find('img').on('click', function (e) {
                    var data = e.currentTarget.that.getAttribute('data-attrs');
                    that.setTemplateInfo(data);
                    $('#edit').show();
                  });
                }, 1);
                return ['<img data-vr-code="' + row.VrCode + '" data-code="' + row.OperID + '" data-attrs="' + that.getAttributes(row) + '" title="编辑" src="../assets/img/bianji.png"/>'].join(' ');
              },
              align: 'center'
            }
          ],
          data: dataList,
          striped: true,  //表格显示条纹
          pagination: true, //启动分页
          pageSize: 10,  //每页显示的记录数
          pageNumber: 1, //当前第几页
          pageList: [],  //记录数可选列表
          search: false,  //是否启用查询
          showColumns: false,  //显示下拉框勾选要显示的列
          showRefresh: false,  //显示刷新按钮
          onClickRow: function (e) {
          }
        });
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

  .count-analyse {
    input {
      font-size: 18px;
    }
    #city-name {
      font-size: 18px;
    }
    width: 100%;
    height: 120px;
    color: #000;
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
          font-size: 18px;
          width: 74px;
          height: 26px;
          line-height: 26px;
          border: 1px solid #CCCCCC;
          text-align: center;
          cursor: pointer;
        }
        .s2 {
          display: inline-block;
          font-size: 18px;
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
