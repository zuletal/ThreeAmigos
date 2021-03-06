import "./App.css";
import StyledPractice from "./StyledPractice";
import { createGlobalStyle } from "styled-components";
import Train from "./components/icons/Train";
import StationCard from "./components/StationCard"
import { useEffect, useState } from "react";
import { getLatest } from "./functions/axios/reports";
import StationList from "./components/StationList";
const GlobalStyle = createGlobalStyle`
    body {
        min-height: 100vh;
        margin:0;
        color:#333;
        background:#eee;
    }
`;
function App() {
   
    return (
        <>
            <GlobalStyle />
            {/* <Train
                stroke="#eee"
                frontWindow="slategrey"
                headlights="lightyellow"
                sideWindows="darkgrey"
                track="#222"
                main1="rgba(0,212,255,1)"
                main2="rgba(2,0,36,1)"
            /> */}
            <StationList/>
        </>
    );
}

export default App;
