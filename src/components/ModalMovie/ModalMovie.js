import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function ModalMovie(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#7F8487" }}>
          <Modal.Title>{props.chosenMovie.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={`https://image.tmdb.org/t/p/w400/${props.chosenMovie.poster_path}`}
            alt="Movie poster"
          />
        </Modal.Body>

        {props.chosenMovie.summary}

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
