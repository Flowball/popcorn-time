"use client";
import MovieCard from "@/components/MovieCard"; // Importera MovieCard-komponenten
import SearchInput from "@/components/SearchInput";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMovieContext } from "../context/context";

export default function SearchPage() {
  const { movieData } = useMovieContext();
  const [profileData, setProfileData] = useState([]);
  const router = useRouter();
  const searchParams = router.query;

  useEffect(() => {
    // Filtrera filmerna baserat på söksträngen
    if (searchParams && searchParams.q && searchParams.length > 0) {
      const filteredMovies = movieData.filter((movie) =>
        movie.title.toLowerCase().includes(searchParams.toLowerCase())
      );
      setProfileData(filteredMovies);
    } else {
      // Om ingen sökning görs, visa alla filmer
      setProfileData(movieData);
    }
  }, [searchParams, movieData]);

  return (
    <div className="ml-6">
      <SearchInput defaultValue={searchParams || ""} />{" "}
      {/* Skicka söksträngen tillbaka till SearchInput */}
      {/* Visa de filtrerade filmerna */}
      {profileData.map((movie) => (
        <div key={movie.slug} className="m-6">
          <MovieCard
            year={movie.year}
            slug={movie.slug}
            rating={movie.rating}
            thumbnail={movie.thumbnail}
            title={movie.title}
            bookmark={movie.bookmark}
          />
        </div>
      ))}
    </div>
  );
}
