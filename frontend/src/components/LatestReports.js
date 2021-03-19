import React from "react";
import styled from "styled-components";

const LatestReports = ({ reports }) => {
    console.log(reports);
    const createTimeString = (time) => {
        const timePart = new Date(time * 1000).toLocaleTimeString("en");
        const datePart = new Date(time * 1000).toLocaleDateString("en", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
        });
        return `${timePart} ${datePart}`;
    };
    return (
        <Container>
            <h3>Latest reports</h3>
            {reports.map((report) => {
                return <p>{createTimeString(report.time)}</p>;
            })}
        </Container>
    );
};

export default LatestReports;
const Container = styled.div`
    h3 {
        font-size: 22px;
    }
    font-size: 18px;

    background: #f2eaea;
    padding: 15px;
`;
