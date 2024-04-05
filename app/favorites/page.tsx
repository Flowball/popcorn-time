"use client";

import MovieCard from "@/components/MovieCard";
import { useMovieContext } from "../context/context";

export default function Favorites() {
  const { movieData } = useMovieContext();
  return (
    <main className="container ">
      <h1 className="m-8 flex justify-center text-2xl md:text-3xl lg:text-4xl">
        {" "}
        Favorites{" "}
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-3">
        {movieData.map(
          (movie: any) =>
            movie.bookmark && <MovieCard key={movie.title} {...movie} />
        )}
      </div>
    </main>
  );
}
