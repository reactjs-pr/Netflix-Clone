import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function nav() {
  return (
    <>
      <Navbar  variant="dark">
        <Container>
          <Navbar.Brand 
          
          style={{
color:"black"


          }}
          
          href="/">Home</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link
                  style={{
                    color:"black"
                    
                    
                              }}
            
            
            href="/FavList"> FavList </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
