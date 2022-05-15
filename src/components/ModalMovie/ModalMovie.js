import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function ModalMovie(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        
        <Modal.Header closeButton style={{ backgroundColor: "#7F8487" }}>
        
          <Modal.Title 
           style={{textAlign:"center",
           
           marginLeft:"20px"
         }}
          
          >{props.chosenMovie.title}</Modal.Title>
        
        </Modal.Header>
         
         
          {props.chosenMovie.summary}

        <Modal.Body>
         
         
          <img

            style={{marginLeft:"30px"}}


            src={`https://image.tmdb.org/t/p/w400/${props.chosenMovie.poster_path}`}
            alt="Movie poster"
          />




        <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              style={{textAlign:"center",
              padding:"10px"
            
            }}
            >
              <Form.Label>Add Comment</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>


        </Modal.Body>


          <Modal.Footer  style={{display:"flex" , justifyContent:"center" , backgroundColor: "#7F8487"}}>
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
