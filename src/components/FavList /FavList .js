import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from "../Navbar/Navbar";
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
              </Card.Body>
            </Card>
          )
        })
      }
    </>
  )
}