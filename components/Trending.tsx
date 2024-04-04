"use client";

import { useMovieContext } from "@/app/context/context";
import MovieCard from "./MovieCard";

export default function Trending() {
  const { movieData } = useMovieContext();
  return (
    <div>
      <h1 className=" m-8 flex justify-center text-2xl md:text-3xl lg:text-4xl">
        Trending movies for you
      </h1>
      <div className=" grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-3">
        {movieData.map(
          (movie: any) =>
            movie.isTrending && <MovieCard key={movie.title} {...movie} />
        )}
      </div>
    </div>
  );
}
