import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from "../Navbar/Navbar";
import Button from 'react-bootstrap/Button';
export default function FavList() {

  const [favMovies, setFavMovies] = useState();

  async function getFavMovies() {
    let url = 'https://movies-bahaa.herokuapp.com/getMovies';
    let response = await fetch(url, {
      method: 'GET',
    });
    let recivedData = await response.json();
    setFavMovies(recivedData)
  }
  async function handleDelete(id) {
    let url = 'https://movies-bahaa.herokuapp.com/DELETE';
    let response = await fetch(url, {
        method: 'DELETE',
    })
    // let deletedRecipe = await response.json();

    if (response.status === 204) {
      getFavMovies();
        alert("Recipe deleted successfully");
    }

}

 

  useEffect(() => {
    getFavMovies();
  }, [])

  return (
    <>
     <Nav />
      {
        favMovies && favMovies.map((favMovie) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400/${favMovie.image}`} />
              <Card.Body>
                <Card.Title>{favMovie.title}</Card.Title>
                <Card.Text>
                  {favMovie.summary}
                </Card.Text>
                <Card.Text>
                  {favMovie.comment}
                </Card.Text>
                <Button variant="primary" onClick={()=>handleDelete(favMovie.id)}>Delete</Button>
              </Card.Body>
            </Card>
          )
        })
      }
    </>
  )
}