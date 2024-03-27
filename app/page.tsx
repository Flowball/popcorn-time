import MovieCard from "@/components/MovieCard";
import { movieList } from "./data";

export default function Home() {
  return (
    <main className="container">
      {/* EXAMPLE CODE TO USE MOVIECARD!!! */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 ml-6 gap-4">
        {movieList.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>
    </main>
  );
}
