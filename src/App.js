import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Navbar, Container, Card, Nav, Button, Accordion, Image, Tab, Tabs, Sonnet } from 'react-bootstrap'
import Appetizers from './routes/Appetizers';
import Mains from './routes/Mains';
import Desserts from './routes/Desserts';
import Location from './routes/Location';

function App() {
  return (
    <div className="App">
      <Card className="bg-dark text-white">
        <Card.Img src="https://bit.ly/3Ji6eFS" alt="Gusto Hero Background" />
        <Card.ImgOverlay>
          <Navbar bg="" variant="dark">
            <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="d-flex">
              {/* MENU LINKS */}
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/mains">OUR MENU</Nav.Link>
              <Nav.Link href="/location">LOCATION</Nav.Link>
              {/* 
              <Link to="appetizers">appetizers |</Link>
              <Link to="mains">mains |</Link>
              <Link to="desserts">desserts |</Link> */}
              {/* <Outlet /> */}
            </Nav>
            </Container>
          </Navbar>
          <div className="gusto-center">
          <Card.Title id="res-name">GUSTO</Card.Title>
          <Card.Text>
            Adding some sort of text in here at some point that's very mouthwatering.
          </Card.Text>
          <Button variant="danger">Our Menu</Button>
          </div>
        </Card.ImgOverlay>
      </Card>

      <Tabs defaultActiveKey="appetizers" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="appetizers" title="Appetizers">
        <Appetizers />
        </Tab>
        <Tab eventKey="mains" title="Main Dishes">
        <Mains />
        </Tab>
        <Tab eventKey="desserts" title="Desserts">
        <Desserts />
        </Tab>
      </Tabs>


      {/* <Appetizers /> */}
      {/* <Mains /> */}
      {/* <Desserts /> */}
      <Location />
    </div>
  );
}

export default App;


