import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoaderPage from "./Loader/LoaderPage"
import Main from "./Main/Main";
import Portfolio from "./Portfolio/Portfolio";
import AboutMe from "./Information/AboutMe/AboutMe";
import Prices from "./Information/Prices/Prices";
import Question from "./Information/Question/Question";
import Clothes from "./Information/Clothes/Clothes";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

//   const [stateLoader, setStateLoader] = useState(true);

//   useEffect(() => {
//   const timer = setTimeout(() => setStateLoader(false),3000);
// },[])

  const [expanded, setExpanded] = useState(false);

  const navToggle = () => {
    setExpanded(expanded ? false : true);
  };

  const closeNav = () => {
    setExpanded(false);
  };

  return <Router>
    
    <Navbar expand="xl" expanded={expanded} className="navbar" >
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="navbar-brand" onClick={closeNav}>Валерий Тряпкин</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={navToggle}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
          <Nav.Link as={Link} to="/" className="nav-link" aria-current="page" onClick={closeNav}>Главная</Nav.Link>
          <Nav.Link as={Link} to="/portfolio" className="nav-link" aria-current="page" onClick={closeNav}>Портфолио</Nav.Link>
            <NavDropdown title="Информация" id="basic-nav-dropdown" data-bs-theme="dark">
              <NavDropdown.Item as={Link} to="/aboutme" className="nav-link-item" onClick={closeNav}>Обо мне</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/prices" className="nav-link-item" onClick={closeNav}>Цены</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/question" className="nav-link-item" onClick={closeNav}>Вопрос-ответ</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/clothes" className="nav-link-item" onClick={closeNav}>Одежда для фотосессии</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
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


