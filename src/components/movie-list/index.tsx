import React from "react";
import { Link } from "react-router-dom";
import { useSingleMovieContext } from "../../context/SingleMovieContext";
import type { MovieHeroProps } from "../movie-hero";
import "./movie-list.scss";

type MovieListProps = {
  movies: MovieHeroProps[];
  title?: string;
  scroll?: "up-to-bottom" | "left-to-right";
};

function MovieList({
  movies,
  title,
  scroll = "left-to-right"
}: MovieListProps) {
  const style =
    scroll === "up-to-bottom"
      ? {
          gridTemplateRows: `repeat(${movies.length / 9}, 240px)`
        }
      : {};

  const { setMovie } = useSingleMovieContext();

  return (
    <div className="movie-list-section">
      {title && (
        <div className="movie-list-section-title">
          <span>{title}</span>
        </div>
      )}
      <div className={`movie-list-container ${scroll}`} style={style}>
        {movies.map((mv) => {
          return (
            <div
              className="movie-list-item"
              key={mv.id}
              onClick={() => {
                setMovie(mv);
              }}
            >
              <img src={mv.image} alt={mv.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
