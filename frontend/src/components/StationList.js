import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getLatest } from '../functions/axios/reports'
import { Button, Page } from "../components/common";
import StationCard from './StationCard'

const StationList = () => {
    const [stations, setStations] = useState([])
    useEffect(() => {
        const getStationList = async () => {
            const latest = await getLatest()            
            setStations(latest)
        }
        getStationList()
    },[])

    return (
        <Page>
            <Button color={"lightblue"}>{"< Back"}</Button>
            {stations.map(station => <StationCard station={station} key={station.station_name} />)}            
        </Page>
    )

}





export default StationList