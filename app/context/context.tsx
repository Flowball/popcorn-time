"use client";

import {
    Dispatch,
    PropsWithChildren,
    createContext,
    useContext,
    useState,
} from "react";
import { movieList } from "../data";

interface ContextData {
  movieData: any;
  setMovieData: Dispatch<any>
}

const MovieContext = createContext<ContextData>({} as ContextData);

function MovieProvider(props: PropsWithChildren) {
  const [movieData, setMovieData ] = useState<any>(movieList);

  localStorage.setItem("movieData", JSON.stringify(movieData))

  return (
    <MovieContext.Provider
      value={{
        movieData, setMovieData
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}

export const useMovieContext = () => useContext(MovieContext);

export default MovieProvider;
