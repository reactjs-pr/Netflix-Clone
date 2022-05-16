import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from "../Navbar/Navbar";
import Button from 'react-bootstrap/Button';

export default function FavList() {

  const [favMovies, setFavMovies] = useState();

  async function getFavMovies() {
    let url = 'https://movie-library-01.herokuapp.com/getMovie';
    let response = await fetch(url, {
      method: 'GET',
    });
    let recivedData = await response.json();
    setFavMovies(recivedData)
  }

 



  async function handleDelete(id) {
    let url = `https://movie-library-01.herokuapp.com/deleteMovie?id=${id}`;
    let response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  
    });
    if (response.status === 204) {
      getFavMovies();
      alert('Movie deleted successfully');
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
<div
        style={{
          backgroundColor: " rgb(42, 40, 40) ",
          padding:"20px",
                  }}>
            <Card style={{ width: '18rem' , padding:"20px" , display: "inline-block" }}>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400/${favMovie.poster_path}`} />
              <Card.Body                   style={{paddingLeft:"20px" }}
>
                <Card.Title>{favMovie.title}</Card.Title>
                <Card.Text>
                  {favMovie.summary}
                </Card.Text>
                <Card.Text>
                  {favMovie.comment}
                </Card.Text>
                  <Button 
                  style={{paddingLeft:"20px" }}
                  
                  
                  variant="primary" onClick={()=>handleDelete(favMovie.id)}>Delete</Button>
              </Card.Body>
            </Card>
            </div>
            
          )
        })
      }
    </>
  )
}