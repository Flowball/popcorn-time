"use client";

import MovieCard from "@/components/MovieCard";
import { useMovieContext } from "../context/context";

export default function Favorites() {
  const { movieData } = useMovieContext();
  return (
    <main className="lg:ml-28">
      <h1 className=" flex justify-center lg:text-4xl md:text-3xl text-2xl">Favorites</h1>
      <div className=" m-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-3">
        {movieData.map(
          (movie: any) =>
            movie.bookmark && <MovieCard key={movie.title} {...movie} />
        )}
      </div>
    </main>
  );
}

