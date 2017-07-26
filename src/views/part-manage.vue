<template>
  <div class="part-manage">
    <!--地方科技馆管理页面-->
    <v-header :active="1" title="地方科技馆管理"></v-header>
    <div id="content">
      <div class="top">
        <div class="sel">
          <span class="s2">添加科技馆</span>
        </div>
      </div>
      <div class="list">
        <table id="museums-info" border="" cellspacing="" cellpadding="">
          <!--动态生成-->
        </table>
      </div>
    </div>
    <!--编辑-->
    <div id="edit">
      <div class="top">
        <span>编辑</span>
        <img src="../assets/img/close.png"/>
      </div>
      <div class="mid">
        <p><span>编码</span><input readonly title="" type="text" name="" id="e-code" value=""/></p>
        <p><span>科技馆名称</span><input title="" type="text" name="" id="e-museum" value=""/></p>
        <p><span>行政划分</span><input title="" type="text" name="" id="e-region" value=""/></p>
        <p><b class="b1">确认</b></p>
        <p><b class="b2">取消</b></p>
      </div>
    </div>
    <!--新增-->
    <div id="add">
      <div class="top">
        <span>添加科技馆</span>
        <img src="../assets/img/close.png"/>
      </div>
      <div class="mid">
        <p><span>编码</span><input title="" type="text" name="" id="a-code" value=""/></p>
        <p><span>科技馆名称</span><input title="" type="text" name="" id="a-museum" value=""/></p>
        <p><span>行政划分</span><input title="" type="text" name="" id="a-region" value=""/></p>
        <p><b class="b1">确认</b></p>
        <p><b class="b2">取消</b></p>
      </div>
    </div>
    <!--删除-->
    <div id="delete">
      <div class="top">
        <img src="../assets/img/delete-yes.png"/> 您确认将该条信息删除吗？
      </div>
      <div class="bottom">
        <span class="s1">确认</span><span class="s2">取消</span>
      </div>
    </div>
    <!--授权-->
    <div id="accredit">
      <div class="head">
        科技馆授权访问资源
        <img src="../assets/img/close.png"/>
      </div>
      <div class="one">
        <div class="top">
          <div class="left">
            HTC-VR资源
          </div>
          <div class="right">
            <span>确认授权</span>
          </div>
          <div class="clear"></div>
        </div>
        <div class="picture">
          <!-- Swiper -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <!--动态生成-->
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
          <div class="right">
            <span>确认授权</span>
          </div>
          <div class="clear"></div>
        </div>
        <div class="picture">
          <!-- Swiper -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <!--动态生成-->
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import api from '../api/index'
  export default {
    name: 'part-manage',
    data () {
      return {}
    },
    beforeCreate(){
      if (!window.sessionStorage.getItem("userName")) {
        this.$router.push('/')
      }
    },
    mounted(){
      //授权页面轮播图
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
      });
      this.getMuseumInfo();
    },
    methods: {
      //获取初始数据
      getMuseumInfo(){
        var lsVR = [{type: 'HTC', className: 'one'}, {type: 'Oculus', className: 'two'}];
        //加载信息列表
        api.getMuseumInfoList({}).then(res=>{
          this.loadData(res);
        }).catch(err=>console.log(err));
        //获取初始化数据001
        api.getVRInfoList({VrType: lsVR[0].type || undefined}).then(res=>{
          console.log(res)
        }).catch(err=>console.log(err));
        //获取初始化数据002
        api.getVRInfoList({VrType: lsVR[1].type || undefined}).then(res=>{
          console.log(res)
        }).catch(err=>console.log(err));
      },
      //合并属性
      getMuseumAttributes(data) {
        var rtValue = '';
        for (var item in data) {
          if (typeof data[item] === 'object') {
            continue;
          }
          if (rtValue === '') {
            rtValue = data[item];
          } else {
            rtValue += '|' + data[item];
          }
        }
        return rtValue;
      },
      //数据转换
      convertData(data) {
        var lsNames = '';
        var lsCodes = '';
        for (var item in data) {
          if (lsNames === '')
            lsNames = data[item].VrName;
          else
            lsNames += ',' + data[item].VrName;

          if (lsCodes === '')
            lsCodes = data[item].VrCode;
          else
            lsCodes += '|' + data[item].VrCode;
        }
        return {vrNames: lsNames, vrCodes: lsCodes};
      },
      //获取选中VR资源个数
      getVRCount() {
        var lsChecks = $('#accredit').find('input[type="checkbox"]');
        var count = 0;
        for (var i = 0, length = lsChecks.length; i < length; i++) {
          var item = lsChecks[i];
          if (item.checked) {
            count++;
          }
        }
        return count;
      },
      //获取所有选中VR元素标识
      getCheckedVRCode() {
        var codes = [];
        var lsElement = $('input[type="checkbox"]');
        for (var index in lsElement) {
          var el = lsElement[index];
          if (!el.checked) {
            continue;
          }
          codes.push(el.getAttribute('data-code'));
        }
        return codes;
      },
      //删除数据
      delData(code) {
        var params = {
          MuseumCode: code
        };
        api.delMuseum(params).then(res=>{
          var status = typeof res.Status === 'string' ? parseInt(res.Status) : res.Status;
          if(status){
            //加载信息列表
            api.getMuseumInfoList({}).then(res=>{
              this.loadData(res);
            });
          }else{
            this.$notify({
              title: '警告',
              message: '删除数据失败！',
              type: 'warning'
            });
          }
        })


      },
      //设置编辑信息
      setEditData(data) {
        //所属政区|编码|名称|状态
        var lsAttr = data && data.split('|');
        $('#e-order').val(lsAttr[1]);
        $('#e-code').val(lsAttr[1]);
        $('#e-museum').val(lsAttr[2]);
        $('#e-region').val(lsAttr[0]);
      },

      //编辑信息
      editData() {
        var itemOrder = $('#e-order').val();
        var itemCode = $('#e-code').val();
        var itemName = $('#e-museum').val();
        var itemRegion = $('#e-region').val();
        var params = {
          MuseumCode: itemCode || null,
          MuseumName: itemName || null,
          RegionName: itemRegion || null,
          RunStatus: '正常'
        };
        api.editMuseumInfo(params).then(res=>{
          var status = typeof res.Status === 'string' ? parseInt(res.Status) : res.Status;
          if(status){
            //加载信息列表
            api.getMuseumInfoList({}).then(res=>{
              this.loadData(res);
            });
          }else{
            this.$notify({
              title: '警告',
              message: '编辑信息失败！',
              type: 'warning'
            });
          }
        })
      },
      //添加信息
      addData() {
        var itemOrder = $('#a-order').val();
        var itemCode = $('#a-code').val();
        var itemName = $('#a-museum').val();
        var itemRegion = $('#a-region').val();
        var params = {
          MuseumCode: itemCode || null,
          MuseumName: itemName || null,
          RegionName: itemRegion || null,
          RunStatus: '正常'
        };
        api.addMuseum(params).then(res=>{
          var status = typeof res.Status === 'string' ? parseInt(res.Status) : res.Status;
          if(status){
            //加载信息列表
            api.getMuseumInfoList({}).then(res=>{
              this.loadData(res);
            });
          }else{
            this.$notify({
              title: '警告',
              message: '添加信息失败！',
              type: 'warning'
            });
          }
        })
      },
      //设置科技馆VR资源权限
      setVRProxy(museumCode) {
        var lsCodes = getCheckedVRCode() || [];
        var params = {
          MuseumCode: museumCode,
          VrCodeList: lsCodes.join(',')
        };
        api.setMuseumProxy(params).then(res=>{
          var status = typeof res.Status === 'string' ? parseInt(res.Status) : res.Status;
          if(status){
            //加载信息列表
            api.getMuseumInfoList({}).then(res=>{
              this.loadData(res);
            });
          }else{
            this.$notify({
              title: '警告',
              message: '设置权限失败！',
              type: 'warning'
            });
          }
        })
      },
      //设置默认VR资源
      setVRElementChecked(data) {
        $('input[type="checkbox"]').attr('checked', false);
        var lsCode = data && data.split('|');
        for (var i = 0, length = lsCode.length; i < length; i++) {
          var code = lsCode[i];
          var ckElement = $('input[type="checkbox"][data-code="' + code + '"]');
          if (ckElement) {
            //ckElement.attr('checked', true);
            for (var j = 0, sum = ckElement.length; j < sum; j++) {
              ckElement[j].checked = true;
            }
          }
        }
      },
      //加载科技馆信息列表
      loadData(res) {
        var that = this;
        var dataList = res.data.Data.itemList;

        $('#museums-info').bootstrapTable('destroy').bootstrapTable({
          columns: [
            {
              field: 'Number',
              title: '序号',
              formatter: function (value, row, index) {
                return index + 1;
              },
              align: 'center'
            }, {
              field: 'MuseumCode',
              title: '编码',
              align: 'center'
            }, {
              field: 'MuseumName',
              title: '科技馆名称',
              align: 'center'
            }, {
              title: 'VR资源',
              align: 'center',
              formatter: function (value, row, index) {
                return that.convertData(dataList[index].vrList).vrNames;
              }
            }, {
              field: 'RegionName',
              title: '所属行政区划',
              align: 'center'
            }, {
              field: 'RunStatus',
              title: '运行状态',
              align: 'center'
            }, {
              field: '操作',
              title: '操作',
              formatter: function (value, row, index) {
                setTimeout(function () {
                  that.updateEvent();
                }, 10);
                var rowCode = row.MuseumCode;
                var attrs = that.getMuseumAttributes(row);
                return ['<img data-attrs="' + attrs + '" data-code="' + rowCode + '" title="编辑" class="img1" src="../assets/img/bianji.png"/>',
                  '<img data-vr-code="' + that.convertData(row.vrList).vrCodes + '" data-code="' + rowCode + '" title="授权" class="img2" src="../assets/img/shouquan.png"/>',
                  '<img data-code="' + rowCode + '" title="删除" class="img3" src="../assets/img/delte.png"/>'].join(' ');
              },
              align: 'center',
              width: 240
            }],
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
      },
      updateEvent() {
        $('#content .list').find('table').find('.img1').on('click', function (e) {
          var attr = e.currentTarget.getAttribute('data-attrs');
          setEditData(attr);
          $('#edit').show();
        });
        $('#content .list').find('table').find('.img2').on('click', function (e) {
          $('#accredit').show();
          museumCode = e.currentTarget.getAttribute('data-code') || undefined;

          //设置已有VR资源
          var lsCodes = e.currentTarget.getAttribute('data-vr-code') || '';
          setVRElementChecked(lsCodes);
        });
        $('#content .list').find('table').find('.img3').on('click', function (e) {
          museumCode = e.currentTarget.getAttribute('data-code');
          $('#delete').show();
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

  .part-manage {
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
