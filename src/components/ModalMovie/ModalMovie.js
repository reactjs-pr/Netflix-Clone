import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

export default function ModalMovie(props) {


  let commentRef = useRef();

function handleComment(e){

  e.preventDefault();

  let userComment = commentRef.current.value;

  console.log({userComment})


  let newMovie = { ...props.chosenMovie, userComment };

  props.updatedMovie(newMovie, props.chosenMovie.id);


}


async function handleAddFav(e,movie) {

  e.preventDefault();

  

  let data = {
    name: movie.title,
    time: movie.release_date,
    summary: movie.overview,
    image: movie.poster_path,
    comment: movie.comment
  }


let response = await fetch(url, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
})

let addedRecipe = await response.json();
console.log("addedRecipe", addedRecipe);



}


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
 <br />
                    {props.chosenMovie.comment ? props.chosenMovie.comment : "No comment is added"}



        <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              style={{textAlign:"center",
              padding:"10px"
            
            }}
            >
              <Form.Label>Add Comment</Form.Label>
              <Form.Control ref={commentRef} as="textarea" rows={3} />
            </Form.Group>
        
            <Button variant="primary" type="submit" onClick={(e)=>handleComment(e)} >
             Submit
            </Button>



            <Button variant="primary" type="submit" onClick={(e) => { handleAddFav(e, props.chosenMovie) }}>
                            Add to favorites
                        </Button>





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
