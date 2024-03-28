"use client";

import MovieCard from "@/components/MovieCard";
import { useMovieContext } from "../context/context";

export default function Favorites() {
  const { movieData } = useMovieContext();
  return (
    <main className="lg:ml-28">
      <h1>Favorites</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 ml-6 gap-4">
        {movieData.map(
          (movie: any) =>
            movie.bookmark && <MovieCard key={movie.title} {...movie} />
        )}
      </div>
    </main>
  );
}
