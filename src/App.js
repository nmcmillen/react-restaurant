import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Navbar, Container, Card, Nav, Button, Accordion } from 'react-bootstrap'
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

              <Link to="appetizers">appetizers |</Link>
              <Link to="mains">mains |</Link>
              <Link to="desserts">desserts |</Link>
              {/* <Outlet /> */}
            </Nav>
            </Container>
          </Navbar>
          <Card.Title>GUSTO</Card.Title>
          <Card.Text>
            Adding some sort of text in here at some point that's very mouthwatering.
          </Card.Text>
          <Button variant="danger">Our Menu</Button>
        </Card.ImgOverlay>
      </Card>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Appetizers</Accordion.Header>
          <Accordion.Body>
            {/* Appetizers Component */}
          <Appetizers />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Main Dishes</Accordion.Header>
          <Accordion.Body>
            {/* Mains Component */}
          <Mains />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Desserts</Accordion.Header>
          <Accordion.Body>
            {/* Desserts Component */}
          <Desserts />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>






      {/* <Appetizers /> */}
      {/* <Mains /> */}
      {/* <Desserts /> */}
      <Location />
    </div>
  );
}

export default App;


