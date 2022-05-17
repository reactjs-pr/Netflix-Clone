import Movie from "../Movie/Movie";

export default function MovieList(props) {
  // console.log(1,props)

  console.log(props.loading);
  return (
    <>
      {props.movies.map((movie) => {
        return (
          <>
            {props.loading ? (
               <Movie
               movie={movie}
               updatedMovie={props.updatedMovie}
               loading={props.loading}
             />
            ) : (
              <Movie
                movie={movie}
                updatedMovie={props.updatedMovie}
                loading={props.loading}
              />
            )}
          </>
        );
      })}
    </>
  );
}
