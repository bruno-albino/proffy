import axios from 'axios'

const api = axios.create({
    baseURL: '192.168.0.7:19000'
})

export default api