import axios from 'axios'
axios.defaults.baseURL="http://localhost:5000"
export const getLatest = async () => {
    let response = await axios.get('/api/reports/latest')
    return response.data
}

export const addReport = async (stationID, userID) => {
    try {
    
        let response = await axios.post('/api/reports/add', { stationID, userID })
        return response.data
    } catch {
        
    }
}

export const getStationReports = async (stationID) => {
    let response = await axios.get('/api/reports/station/' + stationID)
    return response.data
}