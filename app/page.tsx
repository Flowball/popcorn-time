"use client";
import MovieCard from "@/components/MovieCard";
import { useMovieContext } from "./context/context";
import { Movie } from "./data";

export default function Home() {
   const { movieData } = useMovieContext();
   return (
      <main className="container">
         <h1>Popcorntime</h1>
         <p>hello popcorn-time 🍿</p>

         {/* EXAMPLE CODE TO USE MOVIECARD!!! */}
         <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
            {movieData.map((movie: Movie) => (
               <MovieCard key={movie.title} {...movie} />
            ))}
         </div>
      </main>
   );
}
