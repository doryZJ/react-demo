import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://core-testing.pansheng.com',
})

instance.interceptors.response.use((response) => {
  const { data, status } = response
  if (status !== 200) {
    return Promise.reject(new Error('请求失败！'))
  }
  return data
}, (error) => {
  return Promise.reject(error);
})

export default instance;
