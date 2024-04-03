"use client";

import { useMovieContext } from "@/app/context/context";
import MovieCard from "./MovieCard";

export default function Recommended() {
  const { movieData } = useMovieContext();
  return (
    <div className="lg:ml-28">
      <h1 className=" m-12 flex justify-center lg:text-3xl md:text-2xl text-2xl">
        Recommended movies for you
      </h1>
      <div className="ml-6 mb-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-3">
        {movieData
          .slice(movieData.length - 8, movieData.length)
          .map(
            (movie: any) =>
              !movie.isTrending &&
              !movie.bookmark && <MovieCard key={movie.title} {...movie} />
          )}
      </div>
    </div>
  );
}
