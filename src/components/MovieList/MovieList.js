import Movie from "../Movie/Movie";

export default function MovieList(props) {
  // console.log(1,props)
  return (
    <>
      {props.movies.map((movie ) => {
        return (
          <>
            <Movie  movie={movie} updatedMovie={props.updatedMovie}  />
          </>
        );
      })}
    </>
  );
}
