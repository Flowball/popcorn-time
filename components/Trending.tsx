"use client";

import { useMovieContext } from "@/app/context/context";
import MovieCard from "./MovieCard";

export default function Trending() {
  const { movieData } = useMovieContext();
  return (
    <div className="flex flex-col">
      <h1 className="ml-6 flex justify-center text-4xl">
        Trending movies for you
      </h1>
      <div className="ml-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-3">
        {movieData.map(
          (movie: any) =>
            movie.isTrending && <MovieCard key={movie.title} {...movie} />
        )}
      </div>
    </div>
  );
}
