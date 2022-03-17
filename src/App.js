import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Card, Nav, Button } from 'react-bootstrap'
// import Mains from '../routes/Mains';



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
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="Mains">OUR MENU</Nav.Link>
              <Nav.Link href="#pricing">LOCATION</Nav.Link>
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
    </div>
  );
}

export default App;
