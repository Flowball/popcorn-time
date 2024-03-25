import MovieCard from "@/components/MovieCard";
import { movieList } from "./data";

export default function Home() {
  return (
    <main className="">
      <h1>Popcorntime</h1>
      <p>hello popcorn-time 🍿</p>
      <div className="grid grid-cols-3 gap-4">
        {movieList.map((movie) => (
          <MovieCard
            key={movie.title}
            thumbnail={movie.thumbnail}
            rating={movie.rating}
            year={movie.year}
            title={movie.title}
          />
        ))}
      </div>
    </main>
  );
}
