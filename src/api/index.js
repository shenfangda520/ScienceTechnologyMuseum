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
    return axios.get(getMuseumNamesListResource, {

    })
  },

  /**
   * 获取科技馆信息列表
   */
  getMuseumInfoList(params) {
    return axios.get(getMuseumInfoListResource, {

    })
  },

  /**
   * 添加科技馆
   */
  addMuseum(params) {
    return axios.get(addMuseumResource,{

    })
  },

  /**
   * 删除科技馆
   */
  delMuseum(params) {
    return fetch(delMuseumResource)
  },

  /**
   * 编辑科技馆
   */
  editMuseumInfo(params) {
    return fetch(editMuseumInfoResource, {sportId: id})
  },

  /**
   * 科技馆资源权限设置
   */
  setMuseumProxy(params) {
    return fetch(setMuseumProxyResource, params)
  },

  /**
   * 获取VR资源信息列表
   */
  getVRInfoList(params) {
    return fetch(getVRInfoListResource, params)
  },

  /**
   * 获取VR操作详细信息
   */
  getVRHandleInfoList(params) {
    return fetch(getVRHandleInfoListResource, params)
  },

  /**
   * 编辑VR操作次数
   */
  getPubTotravelNum(params) {
    return fetch(getPubTotravelNumResource, params)
  },

  /**
   * 上传VR操作次数
   */
  uploadOperNumInfo(params) {
    return fetch(uploadOperNumInfoResource, params)
  },

  /**
   * VR操作次数文件下载接口
   */
  outputExcel(params) {
    return fetch(outputExcelResource,params)
  }
}
