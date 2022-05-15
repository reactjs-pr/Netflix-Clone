import ModalMovie from "../ModalMovie/ModalMovie";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Movie(props) {

  const [show, setShow] = useState(false);

  const [chosenMovie, setChosenMovie] = useState();

  const handleClose = () => setShow(false);

  const handleShow = () => {
   
    setChosenMovie(props.movie);

    setShow(true);
  };
  return (
    <>
    
    
      <Card
        style={{
          padding: "20px",
          width: "18rem",
          margin: "20px",
          backgroundColor: " rgb(37, 36, 41)",
          color: "rgb(239, 238, 245)",
        }}
      >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w400/${props.movie.poster_path}`}
        />

        <Card.Title
         style={{
          padding: "20px"}}
        
        >{props.movie.title}</Card.Title>
        <Card.Body
          style={{
            overflowX: "hidden",
            scrollBehavior: "smooth",
            height: "200px",
          }}
        >
          <Card.Text>{props.movie.overview}</Card.Text>
        </Card.Body>
        <Card.Text>{props.movie.release_date}</Card.Text>

        

        <Button variant="primary" onClick={handleShow}>
          Add to Favorite
        </Button>
      </Card>
      
      {chosenMovie && (
        <ModalMovie
          show={show}
          handleClose={handleClose}
          chosenMovie={chosenMovie}
        />
      )}

    </>
  );
}
