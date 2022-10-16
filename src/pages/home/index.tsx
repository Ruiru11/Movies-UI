import React, { useEffect, useState } from "react";
import MovieHero, { MovieHeroProps } from "../../components/movie-hero";
import MovieList from "../../components/movie-list";
import SingleMovie from "../../components/single-movie";
import "./home.scss";
import { useSingleMovieContext } from "../../context/SingleMovieContext";

function Home() {
  const { movie } = useSingleMovieContext();
  const [moviesRecords, setMovies] = useState<MovieHeroProps[]>([]);
  const [loading, setLoading] = useState(true);
  const heroItem: unknown = moviesRecords[0];
  console.log("////", localStorage.getItem("token"));

  const getMovies = (token: string) => {
    setLoading(true);
    fetch("http://localhost:3030/api/v1/movies/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("res", data);
        setMovies(data);

        setLoading(false);
      })
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      console.log("called");
      window.location.href = "/login";
    } else {
      getMovies(localStorage.getItem("token") as string);
    }
  }, []);

  console.log({ movie });

  return (
    <div className="">
      {loading ? (
        <div>
          <h1>......loading</h1>
        </div>
      ) : (
        <>
          <MovieHero {...(heroItem as MovieHeroProps)} />
          <MovieList
            scroll="left-to-right"
            title="Favourites"
            movies={moviesRecords.slice(0, 9)}
          />
          <MovieList
            scroll="up-to-bottom"
            title="Movie List"
            movies={moviesRecords}
          />
          {movie?._id && <SingleMovie movie={movie} />}
        </>
      )}
    </div>
  );
}

export default Home;
