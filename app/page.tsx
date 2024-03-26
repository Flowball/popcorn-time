import MovieCard from "@/components/MovieCard";
import { movieList } from "./data";

export default function Home() {
  return (
    <main className="container ">
      {/* EXAMPLE CODE TO USE MOVIECARD!!! */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-3 lg:gap-1">
        {movieList.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>
    </main>
  );
}
