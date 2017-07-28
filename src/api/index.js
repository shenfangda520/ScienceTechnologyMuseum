/**
 * Created by 96400 on 2017/7/12.
 */
import axios from 'axios';
//上线正式
import {
  LoginResource,//用户登录
  getMuseumNamesListResource,//获取科技馆名称列表接口
  getMuseumInfoListResource,
  addMuseumResource,
  delMuseumResource,
  editMuseumInfoResource,
  setMuseumProxyResource,
  getVRInfoListResource,
  getVRHandleInfoListResource,
  getPubTotravelNumResource,
  uploadOperNumInfoResource,
  outputExcelResource
} from './resource'
export default {
  /**
   * 用户登录
   */
  getLogin(Name,Pwd) {
    return axios.post(LoginResource,{
        userName: Name||'',
        userPwd: Pwd||''
      }
    )
  },

  /**
   * 获取科技馆名称列表接口
   */
  getMuseumNamesList(params) {
    return axios.get(getMuseumNamesListResource,params)
  },

  /**
   * 获取科技馆信息列表
   */
  getMuseumInfoList(params,type) {
    return axios.get(getMuseumInfoListResource, {
      regionName: params.regionName || null,
      museumCode: params.museumCode || null,
      museumName: params.museumName || null,
      runStatus: params.runStatus || null,
      pageIndex: params.pageIndex || 0,
      pageNum: params.pageNum || 0
    })
  },

  /**
   * 添加科技馆
   */
  addMuseum(params) {
    return axios.post(addMuseumResource,{
      MuseumCode: params.MuseumCode || null,
      MuseumName: params.MuseumName || null,
      RegionName: params.RegionName || null,
      RunStatus: params.RunStatus || null
    })
  },

  /**
   * 删除科技馆
   */
  delMuseum(params) {
    return  axios.post(delMuseumResource,{
      '': params.MuseumCode || null
    })
  },

  /**
   * 编辑科技馆
   */
  editMuseumInfo(params) {
    return  axios.post(editMuseumInfoResource,{
      OperID: params.OperID || null,
      OperNum: params.OperNum || null,
      SYNCSTATUS: params.SYNCSTATUS || '同步成功'
    })
  },

  /**
   * 科技馆资源权限设置
   */
  setMuseumProxy(params) {
    return  axios.post(setMuseumProxyResource, params)
  },

  /**
   * 获取VR资源信息列表
   */
  getVRInfoList(type) {
    return axios.get(getVRInfoListResource,type)
  },

  /**
   * 获取VR操作详细信息
   */
  getVRHandleInfoList(params) {
    return  axios.get(getVRHandleInfoListResource, {
      MuseumCode: params.MuseumCode || null,
      VrCode: params.VrCode || null,
      StartDate: params.StartDate || null,
      EndDate: params.EndDate || null,
      PageIndex: params.PageIndex || null,
      PageNum: params.PageNum || null
    })
  },

  /**
   * 编辑VR操作次数
   */
  getPubTotravelNum(params) {
    return  axios.get(getPubTotravelNumResource, {
      OperID: params.OperID || null,
      OperNum: params.OperNum || null,
      SYNCSTATUS: params.SYNCSTATUS || '同步成功'
    })
  },

  /**
   * 上传VR操作次数
   */
  uploadOperNumInfo(params) {
    // return  axios.get(uploadOperNumInfoResource, params)
  },

  /**
   * VR操作次数文件下载接口
   */
  outputExcel(params) {
    var path = outputExcelResource;
    return  axios.get(outputExcelResource,{
      MuseumCode: params.MuseumCode,
      VrCode: null,
      StartDate: params.StartDate,
      EndDate: params.EndDate,
      PageIndex: null,
      PageNum: null
    })
    path += "?MuseumCode=" + (params.MuseumCode || '') + '&StartDate=' +(params.StartDate || '') + '&EndDate=' + (params.EndDate || '');
    window.location.href = path;
  }
}
