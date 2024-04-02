"use client";
import { useMovieContext } from "@/app/context/context";
import { BookmarkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
  year: number;
  slug: string;
  rating: string;
  thumbnail: string;
  title: string;
  bookmark?: boolean;
}

export default function MovieCard(props: MovieCardProps) {
  const { bookmark } = useMovieContext();
  // MOVE THIS FUNCTION TO CONTEXT LATER!!!!

  return (
    <div className="flex justify-center ">
      <div className="relative flex flex-col items-center rounded-lg shadow">
        <Link href={`/movies/${props.slug}`}>
          <Image
            src={props.thumbnail}
            alt={props.thumbnail}
            width={300}
            height={300}
            className="rounded-t-lg object-contain"
          />
        </Link>
        <div
          className="absolute right-0 top-0 cursor-pointer rounded-bl-lg rounded-tr-lg bg-yellow-400 p-2"
          onClick={() => bookmark(props)}
        >
          <BookmarkIcon
            width={30}
            height={30}
            className={props.bookmark ? `fill-black` : ``}
          />
        </div>
        <div className="flex size-full flex-col justify-center rounded-b-lg bg-slate-200 px-4 py-2 ">
          <p className="text-sm italic">{props.title}</p>
          <div className="flex justify-between">
            <p>{props.rating}</p>
            <p>{props.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
