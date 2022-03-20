import axios from "axios";
const baseURL = '/api'
export const getData = (url, params) => {
    params = params || {};
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get(baseURL + url, {
            params,
        }).then(res => {
            if (res.status == 200) {
                resolve(res.data);
            } else {
                alert('res.data.msg')
            }
        }).catch(error => {
            reject('网络异常')
        })
    })
}

export const postData = (url, params) => {
    params = params || {};
    return new Promise((resolve, reject) => {
        axios.post(baseURL + url, params).then(res => {
            if (res.status == 200) {
                resolve(res.data);
            }
        }).catch(error => {
            alert('网络异常');
        })
    })
}