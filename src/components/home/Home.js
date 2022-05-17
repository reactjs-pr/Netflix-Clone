import { useEffect, useState } from "react";

import Nav from "../Navbar/Navbar";

import MovieList from "../MovieList/MovieList";
import { Container } from "react-bootstrap";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getMovie() {
    let url = "https://moviesappsaleh.herokuapp.com/trending";

    let response = await fetch(url);

    console.log(1, response);

    let movieData = await response.json();

    console.log(2, movieData);

    setMovies(movieData);

    console.log(3, movies);
  }

  function updatedMovie(newRecipe, id) {
    let updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        movie.comment = newRecipe.userComment;
        return movie;
      } else {
        return movie;
      }
    });

    setMovies(updatedMovies);
  }

  useEffect(() => {
    setLoading(true);
    getMovie();
    setLoading(true);
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <div
          style={{
            backgroundColor: " rgb(42, 40, 40) ",
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(18rem,1fr))",
          }}
        >
          <MovieList
            movies={movies}
            updatedMovie={updatedMovie}
            loading={loading}
          />
        </div>
      </Container>
    </>
  );
}
