import styled from "styled-components";
import { Button } from "./common";
import { Link } from 'react-router-dom'
const calcTime = (time) => {
    const now = new Date() / 1000;
    const then = new Date(time*1000) / 1000;
    const diff = now - then;
    switch (true) {
        case diff < 60:
            return `${diff.toFixed(0)} seconds ago`;
        case diff < 3600:
            return `${(diff / 60).toFixed(0)} minutes ago`;
        case diff < 3600 * 24:
            return `${(diff / 3600).toFixed(0)} hours ago`;
        case diff < 3600 * 24 * 7:
            return `${(diff / 3600 / 24).toFixed(0)} days ago`;
        default:
            return "More than a week ago";
    }
};

const timeColor = (time) => {
    const now = new Date() / 1000;
    const then = new Date(time) / 1000;
    const diff = now - then;
    switch (true) {
        case diff < 900:
            return "#FF7171";
        case diff < 3600:
            return "#FFCB7C";
        default:
            return "#E5E5E5";
    }
};

const StationCard = ({ station }) => {
    console.log(station)
    return (
        <>
            <CardContainer color={timeColor(station.time)}>
                <StationName>{station.station_name}</StationName>
                <StationTime>{calcTime(station.time)}</StationTime>
                <Link to={`/stations/${station.station_id}`}><MoreInfo color="lightblue"> More info</MoreInfo></Link>
            </CardContainer>
        </>
    );
};

export default StationCard;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    grid-auto-rows: auto;
    background-color: ${(props) => props.color};
    padding: 17px;
    @media only screen and (min-width: 500px) {
        width: 300px;
    }
`;

const StationName = styled.div`
    font-size: 18px;
    margin-bottom: 6px;
    grid-column: 1;
    grid-row: 1;
`;

const StationTime = styled.div`
    font-size: 12px;
    grid-column: 1;
    grid-row: 2;
`;

const MoreInfo = styled(Button)`
    grid-column: 2;
    grid-row: 1 / 3;
`;
