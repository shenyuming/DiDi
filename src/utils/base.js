
// import axios from 'axios'
// import { resolve, reject } from 'q'
// import { Loading } from 'element-ui';
// let getData = (url,data={}) => {
//     return new Promise((resolve,reject) => {
//         axios({
//             url:url,
//             method:"post",
//             data:data
//         })
//         .then(res => {
//             if(res && res.data && res.data.code==0){
//                 resolve(res.data);
//             }else{
//                 reject(res.data.msg);
//             }
//         },(err => {
//             reject(err);
//         }))
//     })   
// }
// let getData1 = (url,data={}) => {
//     return new Promise((resolve,reject) => {
//         axios({
//             url:url,
//             method:"get",
//             params:data
//         })
//         .then(res => {
//             if(res && res.data && res.data.code==0){
//                 resolve(res.data);
//             }else{
//                 reject(res.data.msg);
//             }
//         },(err => {
//             reject(err);
//         }))
//     })   
// }
// let loadFn = (() => {
//     const loadOption={fullscreen: true ,lock: true, text: '数据马上出炉，请稍等ヾ(●´▽`●)ノ', spinner: 'el-icon-loading', background: 'rgba(0, 0, 0, 0.7)'}
//     let load;

//     return {
//         // constructor(vueThis){
//         //     this.vm = vueThis ;  //vue中的this  
//         // }
//         open(){
//             load = Loading.service(loadOption);
//         },
//         close(){
//             load.close();
//         }
//     }
// })()


// export  {
//     getData,
//     getData1,
//     loadFn  
// }