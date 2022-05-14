import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function nav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="/FavList"> FavList </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
