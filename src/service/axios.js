import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://random-data-api.com/api/v2',
})

const getRandomData = async url => {
    const response = await axiosInstance.get(url)
    return response.data
}

const getRandomDataWithParams = async (url, params) => {
    const response = await axiosInstance.get(url, { params })
    return response.data
}

export { getRandomData, getRandomDataWithParams }
