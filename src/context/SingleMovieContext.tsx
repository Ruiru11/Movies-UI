import React, { createContext, useContext, useState } from "react";
import type { MovieHeroProps } from "../components/movie-hero";

type ContextProps = {
  movie?: MovieHeroProps;
  setMovie: (movie: MovieHeroProps | undefined) => void;
};

export const SingleMovieContext = createContext<ContextProps>({
  movie: undefined,
  setMovie: () => {}
});

export const SingleMovieContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [movie, setMovie] = useState<MovieHeroProps>();

  console.log("::::", localStorage.getItem("infiniteScrollEnabled"));

  return (
    <SingleMovieContext.Provider
      value={{
        movie,
        setMovie
      }}
    >
      {children}
    </SingleMovieContext.Provider>
  );
};

export const useSingleMovieContext = () => {
  return useContext(SingleMovieContext);
};
