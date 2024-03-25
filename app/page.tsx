import MovieCard from "@/components/MovieCard";
import { movieList } from "./data";

export default function Home() {
  return (
    <main className="">
      <h1>Popcorntime</h1>
      <p>hello popcorn-time 🍿</p>
      <div>
        {movieList.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>
    </main>
  );
}
