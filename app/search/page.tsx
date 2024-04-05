"use client";
import MovieCard from "@/components/MovieCard"; // Importera MovieCard-komponenten
import SearchInput from "@/components/SearchInput";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useMovieContext } from "../context/context";
import { Movie } from "../data";

export default function SearchPage() {
  const { movieData } = useMovieContext(); // använder denna för att hämta datan om filmerna, kan också använda "getMovie"
  const [profileData, setProfileData] = useState([]);
  const searchParams = useSearchParams();
  const searchQuery = searchParams && searchParams.get("title");

  useEffect(() => {
    const handleSearch = () => {
      if (searchQuery && searchQuery.length > 0) {
        const filteredMovies = movieData.filter((movie: Movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProfileData(filteredMovies);
      } else {
        setProfileData([]); // gör till en tom array sen (om vi vill)
      }
    };

    handleSearch();
  }, [searchQuery, movieData]);

  return (
    <div className="container">
      <SearchInput defaultValue={searchQuery || ""} />
      {/* Använder searchQuery för defaultValue */}
      {/* Visa de filtrerade filmerna eller ett meddelande */}
      {profileData.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-3">
          {profileData.map((movie: Movie) => (
            <MovieCard
              key={movie.slug}
              year={movie.year}
              slug={movie.slug}
              rating={movie.rating}
              thumbnail={movie.thumbnail}
              title={movie.title}
              bookmark={movie?.bookmark}
            />
          ))}
        </div>
      ) : (
        <p className="mt-16 flex justify-center">No movies where found</p>
      )}
    </div>
  );
}
