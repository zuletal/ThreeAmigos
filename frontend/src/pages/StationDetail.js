import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Page } from "../components/common";
import LatestReports from "../components/LatestReports";
import { getLatest, getStationReports } from "../functions/axios/reports";

const StationDetail = () => {
    const params = useParams();
    const [reports, setReports] = useState()
    const id = params.id;
    useEffect(() => {
        const getReports = async () => {
            const res = await getStationReports(id)
            setReports(res)
        }
        getReports()
    },[id])
    return (
        <Page>
            {reports && <LatestReports reports={reports} />}
        </Page>
    )
}
export default StationDetail;