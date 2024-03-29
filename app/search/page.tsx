"use client";

import SearchInput from "@/components/SearchInput";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useMovieContext } from "../context/context";

export default function SearchPage() {
  const { movieData } = useMovieContext();
  const [profileData, setProfileData] = useState([]);
  const searchParams = useSearchParams();
  console.log(searchParams);

  useEffect(() => {
    setProfileData(movieData);
  }, []);
  return (
    <div>
      <SearchInput defaultValue={"hej"} />
    </div>
  );
}
