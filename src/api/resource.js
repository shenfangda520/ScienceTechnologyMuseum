/**
 * Created by 96400 on 2017/7/24.
 */
import {API_ROOT} from './config.js'
const apiKJG = {
  Login:'/api/UserInfo/valLogin',//用户登录
  getMuseumNamesList:'/api/Museum/getMuseumList',//获取科技馆名称列表接口
  getMuseumInfoList:'/api/Museum/getMuseumInfoList',//获取科技馆信息列表
  addMuseum:'/api/Museum/addMuseum',//添加科技馆
  delMuseum:'/api/Museum/delMuseum',//删除科技馆
  editMuseumInfo:'/api/Museum/editMuseumInfo',//编辑科技馆
  setMuseumProxy:'/api/Museum/editMuseumAuthority',//科技馆资源权限设置
  getVRInfoList:'/api/VR/getVRInfoList',//获取VR资源信息列表
  getVRHandleInfoList:'/api/VR/getOperInfoList',//获取VR操作详细信息
  getPubTotravelNum:'/api/users/api/getPubTotravelNum',//编辑VR操作次数
  uploadOperNumInfo:'/api/UploadOperNumInfo',//上传VR操作次数
  outputExcel:'/api/VR/ExcelOutputs'//VR操作次数文件下载接口
}

export const LoginResource = API_ROOT.concat(apiKJG.Login);
export const getMuseumNamesListResource = API_ROOT.concat(apiKJG.getMuseumNamesList);
export const getMuseumInfoListResource = API_ROOT.concat(apiKJG.getMuseumInfoList);
export const addMuseumResource = API_ROOT.concat(apiKJG.addMuseum);
export const delMuseumResource = API_ROOT.concat(apiKJG.delMuseum);
export const editMuseumInfoResource = API_ROOT.concat(apiKJG.editMuseumInfo);
export const setMuseumProxyResource = API_ROOT.concat(apiKJG.setMuseumProxy);
export const getVRInfoListResource = API_ROOT.concat(apiKJG.getVRInfoList);
export const getVRHandleInfoListResource = API_ROOT.concat(apiKJG.getVRHandleInfoList);
export const getPubTotravelNumResource = API_ROOT.concat(apiKJG.getPubTotravelNum);
export const uploadOperNumInfoResource = API_ROOT.concat(apiKJG.uploadOperNumInfo);
export const outputExcelResource = API_ROOT.concat(apiKJG.outputExcel);

