import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Routes, Route, Link, Outlet } from "react-router-dom";
import {
  Navbar,
  Container,
  Card,
  Nav,
  Button,
  Tab,
  Tabs,
} from "react-bootstrap";
import Appetizers from "./routes/Appetizers";
import Mains from "./routes/Mains";
import Desserts from "./routes/Desserts";
import Location from "./routes/Location";

function App() {
  return (
    <div className="App">
      <Card className="bg-dark text-white">
        <Card.Img
          id="hero-image"
          src="https://bit.ly/3Ji6eFS"
          alt="Gusto Hero Background"
        />
        <Card.ImgOverlay>
          <Navbar bg="" variant="dark">
            <Container>
              <Navbar.Brand href="#home"></Navbar.Brand>
              <Nav className="d-flex">
                {/* MENU LINKS */}
                <Nav.Link href="">HOME</Nav.Link>
                <Nav.Link href="">OUR MENU</Nav.Link>
                <Nav.Link href="">LOCATION</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <div className="gusto-center">
            <Card.Title id="res-name">GUSTO</Card.Title>
            <Card.Text>
              A unique and mouthwatering dining experience.
            </Card.Text>
            <Button id="button-edit" variant="danger">
              Our Menu
            </Button>
          </div>
        </Card.ImgOverlay>
      </Card>

      <h2 class="menu-header">MENU</h2>

      <Tabs
        defaultActiveKey="appetizers"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
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
      <Location />
    </div>
  );
}

export default App;
