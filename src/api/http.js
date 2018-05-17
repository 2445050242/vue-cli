/**
 * Created by OYSK on 2017/7/23.
 */
import axios from 'axios'
//统一处理所有http请求和响应
import router from '../router/index'
import { Notification } from 'element-ui'
import {prefix} from  'api/common'

// axios 配置
// axios.defaults.headers.common['Authorization'] = strorage;
axios.defaults.timeout = 50000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// function selectDiff (array) {
//   let newArray = [];
//   for (let i = 0; i<array.length; i++) {
//     if (array.indexOf(array[i], i+1) == -1){
//       newArray.push(array[i])
//     }
//   }
//   return newArray
// }
// http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     // let strorage =localStorage.getItem(prefix+'token');
//     // if (strorage) {
//     //   config.headers.Authorization =`Bearer ${strorage}`;
//     // }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   });
//
// // http response 拦截器
// let messInfo = ''
// let arr = {}
// axios.interceptors.response.use(
//   response => {
//     // 后台token更新，则修改localstorage的token
//     // if (response.data.token) {
//     //   localStorage.setItem(prefix + 'token', response.data.token);
//     // }
//     // sessionStorage.removeItem(prefix + 'errorCode')
//     //console.log(response)
//     switch(response.status){
//       case 202:
//         Notification.warning({
//           title: '提示',
//           message: response.data.message
//         });
//         break;
//       case 203: // 清除token信息并跳转到登录页面
//         // if (!sessionStorage.getItem(prefix + 'errorToken')) {
//         //   sessionStorage.setItem(prefix + 'errorToken', '203')
//         //   Notification.warning({
//         //     title: '提示',
//         //     message: '用户信息认证失败~~'
//         //   });
//         // }
//         // localStorage.removeItem(prefix + 'token');
//         // sessionStorage.removeItem(prefix + 'token');
//         // router.replace({
//         //   path: '/Login',
//         //   query: {redirect: router.currentRoute.fullPath}
//         // });
//         // setTimeout(() => {
//         //   sessionStorage.removeItem(prefix + 'token')
//         // },5000)
//         break;
//     }
//     return response;
//   },
//   error => {
//     //console.log(error.response)
//     if(!sessionStorage.getItem(prefix+'errorCode')){
//       sessionStorage.setItem(prefix + 'errorCode', JSON.stringify(arr))
//     }
//     let errorCode = JSON.parse(sessionStorage.getItem(prefix+'errorCode'))
//     if (error.response) {
//       switch (error.response.status) {
//         case 400:
//           if (!errorCode['400']) {
//             errorCode['400'] = error.response.data.message
//             //messInfo = error.response.data.message
//             Notification.error({
//               title: '错误',
//               message: error.response.data.message
//             });
//           }
//           // messInfo = error.response.data.message
//           break;
//         case 404:
//           if (!errorCode["404"]) {
//             errorCode["404"] = '404 Not Found'
//             Notification.error({
//               title: '错误',
//               message: "404 Not Found"
//             });
//           }
//           // messInfo = "404 Not Found"
//           break;
//         case 406:
//           if (!errorCode['406']) {
//             errorCode['406'] = error.response.data.message
//             //messInfo = error.response.data.message
//             Notification.error({
//               title: '错误',
//               message: error.response.data.message
//             });
//           }
//           //messInfo = error.response.data.message
//           break;
//         default:
//           console.log(error.response.data.message)
//       }
//     } else{
//         console.log("请求超时啦~")
//     }
//     //console.log(errorCode)
//     //console.log(messInfo)
//     sessionStorage.setItem(prefix + 'errorCode', JSON.stringify(errorCode))
//     setTimeout(() => {
//       sessionStorage.removeItem(prefix + 'errorCode')
//     },5000)
//     return error.response
//     //return Promise.reject(error.response.data)
//   });


let  baseUrl = '/index';
export default {
  post (url, data) {
    // let kdm_local =localStorage.getItem(prefix+'token');
    return axios({
      method: 'post',
      url:baseUrl+url,
      data: data,
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret.slice(0, -1);
        return data;
      }],
      timeout: 50000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        // 'Authorization': `Bearer ${kdm_local}`
      }
    }).catch((error) => {
      console.log(error.message)
    })
  },
  get (url, params) {
    // let kdm_local =localStorage.getItem(prefix+'token');
    return axios({
      method: 'get',
      url:baseUrl+url,
      params, // get 请求时带的参数
      timeout: 50000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
         // 'Authorization': `Bearer ${kdm_local}`
      }
    })
  },
  delete (url, data) {
    // let kdm_local =localStorage.getItem(prefix+'token');
    return axios({
      method: 'delete',
      url:baseUrl+url,
      data:data, // get 请求时带的参数
      timeout: 50000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        // 'Authorization': `Bearer ${kdm_local}`
      },
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret.slice(0, -1);
        return data;
      }],
    })
  },
  put (url, data) {
    // let kdm_local =localStorage.getItem(prefix+'token');
    return axios({
      method: 'put',
      url:baseUrl+url,
      data: data,
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret.slice(0, -1);
        return data;
      }],
      timeout: 50000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        // 'Authorization': `Bearer ${kdm_local}`
      },

    })
  },
}

