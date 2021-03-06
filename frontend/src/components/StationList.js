import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getLatest } from '../functions/axios/reports'
import { Button, Page } from "../components/common";
import StationCard from './StationCard'
const calcTime = (time) => {
    const now = new Date()/1000
    const then = new Date(time)/1000
    const diff = now-then
    switch (true) {
        case diff < 60:
            return `${diff.toFixed(0)} seconds ago`;
        case diff < 3600:
            return `${(diff/60).toFixed(0)} minutes ago`;
        case diff < 3600*24:
            return `${(diff/3600).toFixed(0)} hours ago`;
        case diff < 3600*24*7:
            return `${(diff/3600/24).toFixed(0)} days ago`;
        default:
            return "More than a week ago"
            
    }
}
const StationList = () => {
    const [stations, setStations] = useState([])
    useEffect(() => {
        const getStationList = async () => {
            const latest = await getLatest()
            for (let station of latest) {
                station.time = calcTime(station.time)
            }
            
            setStations(latest)
        }
        getStationList()
    },[])

    return (
        <Page>
            <Button color={"lightblue"}>{"<Back"}</Button>
            {stations.map(station => <StationCard station={station} key={station.station_name} />)}            
        </Page>
    )

}





export default StationList