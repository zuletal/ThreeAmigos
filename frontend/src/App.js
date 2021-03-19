import "./App.css";
import { createGlobalStyle } from "styled-components";

import StationList from "./components/StationList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StationDetail from "./pages/StationDetail";
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
            <Router>
                <Switch>
                    <Route exact path="/" component={StationList}/>
                    <Route path="/stations/:id" component={StationDetail}/>
                </Switch>
            </Router>
            {/* <Train
                stroke="#eee"
                frontWindow="slategrey"
                headlights="lightyellow"
                sideWindows="darkgrey"
                track="#222"
                main1="rgba(0,212,255,1)"
                main2="rgba(2,0,36,1)"
            /> */}
            
        </>
    );
}

export default App;
