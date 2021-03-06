import axios from 'axios'

export const getLatest = async (host="") => {
    let response = await axios.get(host+'/api/reports/latest')
    return response.data
}