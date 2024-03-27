"use client";
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
  // MOVE THIS FUNCTION TO CONTEXT LATER!!!!
  function handleBookMark() {
    console.log(
      "clicked! put bookmark function here :) use title or something as slug ",
      props
    );
  }
  return (
    <div className="flex justify-center lg:ml-16">
      <div className="relative flex flex-col items-center shadow rounded-lg mt-8">
        <Link href={`/movies/${props.slug}`}>
          <Image
            src={props.thumbnail}
            alt={props.thumbnail}
            width={300}
            height={300}
            className="object-contain rounded-t-lg"
          />
        </Link>
        <div
          className="absolute bg-yellow-400 top-0 right-0 rounded-bl-lg p-2 rounded-tr-lg cursor-pointer"
          onClick={handleBookMark}
        >
          <BookmarkIcon
            width={30}
            height={30}
            className={props.bookmark ? `fill-black` : ``}
          />
        </div>
        <div className="px-4 py-2 bg-slate-200 h-full w-full flex flex-col justify-center rounded-b-lg ">
          <p className="text-sm italic">{props.title}</p>
          <div className="flex justify-between">
            <p className="bg-red">{props.rating}</p>
            <p>{props.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
