"use client";

import MovieCard from "@/components/MovieCard";
import { useMovieContext } from "../context/context";

export default function Favorites() {
  const { movieData } = useMovieContext();
  return (
    <main>
      <h1 className=" m-8 flex justify-center lg:text-4xl md:text-3xl text-2xl"> Favorites </h1>
      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-3">
        {movieData.map(
          (movie: any) =>
            movie.isTrending && <MovieCard key={movie.title} {...movie} />
        )}
      </div>
    </main>
  );
}



