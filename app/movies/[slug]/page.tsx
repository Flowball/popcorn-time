"use client";
import { useMovieContext } from "@/app/context/context";
import Rating from "@/components/Rating";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type MovieProps = { params: { slug: string } };

export default function Slug({ params }: MovieProps) {
  /* FEATURE FLAG LIVES HERE KRISTIAN!!! */
  const [featureFlag, setFeatureFlag] = useState(true);
  const { bookmark, movieData } = useMovieContext();
  const movie = getMovie(params.slug);

  function getMovie(query: string) {
    return movieData.find((movie) => movie.slug === query);
  }

  return (
    <main className="container">
      <div className="flex flex-col gap-4 py-2">
        <p className="text-3xl lg:text-center lg:text-5xl">{movie?.title}</p>
        <div className="grid grid-cols-2">
          <Image
            src={movie?.thumbnail as string}
            alt={movie?.thumbnail as string}
            width={300}
            height={300}
            className="rounded-lg object-contain shadow lg:w-4/5 "
          />

          <div className="grid px-2 lg:grid-rows-3">
            <div
              className="flex items-center justify-center gap-2 rounded-lg bg-yellow-400 p-2 text-sm transition-all lg:text-4xl"
              onClick={() => bookmark(movie)}
            >
              {movie?.bookmark ? (
                <>
                  <MinusCircleIcon width={35} height={35} />
                  <p className="text-sm lg:text-4xl">Remove from list</p>
                </>
              ) : (
                <>
                  <PlusCircleIcon width={35} height={35} />
                  <p>Add to list</p>
                </>
              )}
            </div>
            <div className="flex flex-col justify-around lg:text-3xl">
              <div>
                Year released: <b>{movie?.year}</b>
              </div>
              <div>
                PG Rating: <b>{movie?.rating}</b>
              </div>
              <div>
                Genre: <b>{movie?.genre}</b>
                {featureFlag && (
                  <div className="text-6xl">
                    <Rating />
                  </div>
                )}
              </div>
            </div>
            <div className="hidden grid-cols-2 justify-between gap-2 lg:grid ">
              {movie?.actors.map((actor) => (
                <p
                  key={actor}
                  className=" flex items-center justify-center rounded-lg  bg-yellow-300 p-4 text-2xl"
                >
                  {actor}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <div>
            <h3 className="text-2xl">Synopsis</h3>
            <p>{movie?.synopsis}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">Actors</h3>
            <div className="grid grid-cols-2 justify-between gap-2 lg:hidden">
              {movie?.actors.map((actor) => (
                <p key={actor} className="rounded-lg bg-yellow-300 p-4 text-sm">
                  {actor}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
