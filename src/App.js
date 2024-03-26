import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoaderPage from "./Loader/LoaderPage"
import Main from "./Main/Main";
import Portfolio from "./Portfolio/Portfolio";
import AboutMe from "./Information/AboutMe/AboutMe";
import Prices from "./Information/Prices/Prices";
import Question from "./Information/Question/Question";
import Clothes from "./Information/Clothes/Clothes";
import MyNavbar from "./MyNavbar/MyNavbar";
import "./App.css";


function App() {

  return <Router>
    
            <MyNavbar />
            {/* {stateLoader && <LoaderPage/>} */}
    
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path="/aboutme" element={<AboutMe/>}/>
              <Route path="/prices" element={<Prices/>}/>
              <Route path="/question" element={<Question/>}/>
              <Route path="/clothes" element={<Clothes/>}/>
            </Routes>
          </Router>
}

export default App;


