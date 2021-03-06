import axios from "axios";
import { getLatest } from "../functions/axios/reports";
axios.defaults.baseURL="http://localhost:5000"

    
test("get latest returns an array of stations", async () => {
    const res = await getLatest()
    expect(Array.isArray(res)).toBe(true)
    for (let station of res) {
        expect(typeof station.station_name).toBe('string')
        expect(station.station_id).toBeGreaterThan(0)
        expect(new Date(station.time)-new Date()).toBeLessThan(0)
    }
});