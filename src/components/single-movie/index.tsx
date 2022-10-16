import React from "react";
import { useSingleMovieContext } from "../../context/SingleMovieContext";
import { MovieHeroProps } from "../movie-hero";
import "./single-movie.scss";

type SingleMovieProps = {
  movie: MovieHeroProps;
};

function SingleMovie({ movie }: SingleMovieProps) {
  const { setMovie } = useSingleMovieContext();

  return (
    <div className="movie-container">
      <div className="movie-image">
        <img src={movie.image} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h6>{movie.title}</h6>
        <p>{movie.plot}</p>
        <button
          className="close-item"
          onClick={() => {
            setMovie(undefined);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SingleMovie;
