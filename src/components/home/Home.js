import { useEffect, useState } from "react";
import Nav from "../Navbar/Navbar";
import MovieList from "../MovieList/MovieList";
export default function Home() {
  const [movies, setMovies] = useState([]);
  async function getMovie() {
    let url = "https://moviesappsaleh.herokuapp.com/trending";
    let response = await fetch(url);
    console.log(1, response);
    let movieData = await response.json();
    console.log(2, movieData);
    setMovies(movieData);
    console.log(3, movies);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <Nav />
      <div
        style={{
          backgroundColor: " rgb(42, 40, 40) ",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(18rem,1fr))",
        }}
      >
        <MovieList movies={movies} />
      </div>
    </>
  );
}
