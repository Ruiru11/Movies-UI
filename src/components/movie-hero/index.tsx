import React from "react";
import "./hero.scss";

export type MovieHeroProps = {
  image: string;
  title: string;
  _id: string;
  releaseState: string;
  runtimeMins: string;
  plot: string;
  imDbRating: string;
  genres: string;
  genreList: {
    key: string;
    value: string;
    _id: string;
  }[];
  starList: {
    id: string;
    name: string;
    _id: string;
  }[];
  directorList: {
    id: string;
    name: string;
    _id: string;
  }[];
  favorite: boolean;
  _v: number;
};

function MovieHero({ image, title, _id }: MovieHeroProps) {
  const handleAction = (action: "play" | "watchlist") => {
    if (action === "play") {
      // .... p;ay logic
    }

    if (action === "watchlist") {
      // .... watchlist logic
    }
  };

  return (
    <div
      className="hero-image-container"
      style={{
        backgroundImage: `url('${image}')`
      }}
    >
      <div className="hero-title">
        <h1>{title}</h1>
      </div>
      <div className="hero-actions">
        <button onClick={() => handleAction("play")}>Play</button>
        <button onClick={() => handleAction("watchlist")}>Watch List</button>
      </div>
    </div>
  );
}

export default MovieHero;
