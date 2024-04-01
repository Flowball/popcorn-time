"use client";

import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { movieList } from "../data";

interface ContextData {
  movieData: any;
  setMovieData: Dispatch<any>;
  bookmark: ({}) => void;
}

const MovieContext = createContext<ContextData>({} as ContextData);

function MovieProvider(props: PropsWithChildren) {
  const [movieData, setMovieData] = useState<any>(movieList);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const lsMovieData = localStorage.getItem("movieData");
    if (lsMovieData) {
      setMovieData(JSON.parse(lsMovieData));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("movieData", JSON.stringify(movieData));
  }, [movieData, isLoaded]);

  function bookmark(movie: any) {
    const updatedMovieData = movieData.map((item: any) =>
      item.slug === movie.slug ? { ...item, bookmark: !item.bookmark } : item
    );
    setMovieData(updatedMovieData);
  }

  return (
    <MovieContext.Provider
      value={{
        movieData,
        setMovieData,
        bookmark,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}

export const useMovieContext = () => useContext(MovieContext);

export default MovieProvider;
