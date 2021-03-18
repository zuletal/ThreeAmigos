import axios from "axios";
import { addReport, getLatest, getStationReports } from "../functions/axios/reports";


    
test("get latest returns an array of stations", async () => {
    const res = await getLatest()
    console.log(res)
    expect(Array.isArray(res)).toBe(true)
    for (let station of res) {
        expect(typeof station.station_name).toBe('string')
        expect(station.station_id).toBeGreaterThan(0)
        expect(new Date(station.time)-new Date()).toBeLessThan(0)
    }
});

test("create report sends back a report ID", async () => {
    const res = await addReport(2, 1)
    expect(res).toBeGreaterThan(0);
})
test("create report without an valid stationID returns undefined", async () => {
    const res = await addReport(546462, 1)
    expect(res).toBe(undefined)
})
test("create report without a valid userID returns undefined", async () => {
    const res = await addReport(2, -1)
    expect(res).toBe(undefined)
})

test('get reports from one station should return an array', async () => {
    const res = await getStationReports(62)
    expect(Array.isArray(res)).toBe(true)
    expect(res.length).toBeGreaterThan(0)
})
test('get reports from an invalid station should return an empty array', async () => {
    const res = await getStationReports(-1)
    expect(res.length).toBe(0)
})

