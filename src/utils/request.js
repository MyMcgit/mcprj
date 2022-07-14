// 请求模块封装
import axios from 'axios'

const request= axios.create({
    baseURL:'http://haozhiyuan.ltd',
    timeout:5000
})

// 请求拦截


// 响应拦截

export default request