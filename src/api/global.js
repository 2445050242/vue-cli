/**
 * Created by OYSK on 2017/8/20.
 */
//公用数据的获取，存放在sessionStorage
import http from './http'
import {prefix} from './common'

//获取可用快递
export  function getAvailableExpress() {
  let kdm_local = sessionStorage.getItem(prefix+'availabeExpress')
  if(!kdm_local) {
    http.get('/available_express').then((res) => {
      sessionStorage.setItem(prefix+'availabeExpress', JSON.stringify(res.data.data))
      return res.data.data
    })
  }else {
    return JSON.parse(kdm_local)
  }
}
//当用户进行快递公司管理时，清这session数据，让其再次请求
export  function clearAvailableExpress() {
  sessionStorage.removeItem(prefix+'availabeExpress')
  return getAvailableExpress()
}

//获取地区信息
export function getRegionData() {
  let kdm_local = sessionStorage.getItem(prefix+'region')
  if(!kdm_local) {
    http.get('/region').then((res) => {
      sessionStorage.setItem(prefix + 'region', JSON.stringify(res.data.data))
      return res.data.data
    });
  } else {
    return JSON.parse(kdm_local)
  }
}

//获取常用快递设置信息
export function getExpressSetting() {
  let kdm_local =sessionStorage.getItem(prefix+'expresssetting');
  if(!kdm_local) {
    http.get('/expresssetting').then((res) => {
      sessionStorage.setItem(prefix + 'expresssetting', JSON.stringify(res.data.data))
      return res.data.data
    })
  } else {
      return JSON.parse(kdm_local)
  }
}

//编辑常用快递设置清除
export  function clearExpressSetting() {
  sessionStorage.removeItem(prefix+'expresssetting')
  return getExpressSetting()
}


//获取所有快递公司信息
export function getEpsCompany() {
  let kdm_local = sessionStorage.getItem(prefix+'epscompany')
  if(!kdm_local) {
    http.get('/epscompany').then((res) => {
      sessionStorage.setItem(prefix + 'epscompany', JSON.stringify(res.data.data))
      return res.data.data
    })
  } else {
    return JSON.parse(kdm_local)
  }
}

//获取常用寄件人
export function getAddress() {
  let kdm_local = sessionStorage.getItem(prefix+'address')
  if(!kdm_local) {
    http.get('/address').then((res) => {
      sessionStorage.setItem(prefix + 'address', JSON.stringify(res.data.data))
      return res.data.data
    })
  } else {
    return JSON.parse(kdm_local)
  }
}

// 获取支付模式,需要传入code参数
export function getPayType(code) {
  let kdm_local = sessionStorage.getItem(prefix+'pay_type')
  if(!kdm_local) {
    http.get('/pay_type',code).then(res => {
      sessionStorage.setItem(prefix + 'pay_type', JSON.stringify(res.data.data))
      return res.data.data
    })
  } else {
    return JSON.parse(kdm_local)
  }
}

// 获取业务类型，需传入code参数
export function getExpType(code) {
  let kdm_local = sessionStorage.getItem(prefix+'exp_type')
  if(!kdm_local) {
    http.get('/exp_type',code).then(res => {
      sessionStorage.setItem(prefix + 'exp_type', JSON.stringify(res.data.data))
      return res.data.data
    })
  } else {
    return JSON.parse(kdm_local)
  }
}











