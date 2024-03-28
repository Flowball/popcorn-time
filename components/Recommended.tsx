"use client";

import { useMovieContext } from "@/app/context/context";
import MovieCard from "./MovieCard";

export default function Recommended() {
   const { movieData } = useMovieContext();
   return (
      <div className="flex flex-col">
         <h1 className="flex justify-center text-4xl ml-6">
            Recommended movies for you
         </h1>
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 ml-6 gap-4">
            {movieData
               .slice(movieData.length - 8, movieData.length)
               .map(
                  (movie: any) =>
                     !movie.isTrending &&
                     !movie.bookmark && (
                        <MovieCard key={movie.title} {...movie} />
                     )
               )}
         </div>
      </div>
   );
}
