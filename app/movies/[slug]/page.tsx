"use client";
import { useMovieContext } from "@/app/context/context";
import { Movie } from "@/app/data";
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
    return movieData.find((movie: Movie) => movie.slug === query);
  }

  return (
    <main className="container overflow-hidden">
      <div className="flex flex-col gap-4 py-2">
        <p className="text-2xl lg:text-center lg:text-4xl">{movie?.title}</p>
        <div className="grid grid-cols-2">
          <div className="flex justify-center">
            <Image
              src={movie?.thumbnail as string}
              alt={movie?.thumbnail as string}
              width={300}
              height={300}
              className="rounded-lg object-contain shadow lg:w-4/5"
            />
          </div>

          <div className="flex flex-col gap-2 px-2 lg:grid-rows-3">
            <div
              className="flex items-center justify-center gap-2 rounded-lg bg-yellow-400 p-2 text-sm transition-all lg:p-6 lg:text-3xl"
              onClick={() => bookmark(movie)}
            >
              {movie?.bookmark ? (
                <>
                  <MinusCircleIcon width={35} height={35} />
                  <p>Remove from list</p>
                </>
              ) : (
                <>
                  <PlusCircleIcon width={35} height={35} />
                  <p>Add to list</p>
                </>
              )}
            </div>
            <div className="flex h-full flex-col gap-4 lg:text-2xl">
              <div>
                Year released: <b>{movie?.year}</b>
              </div>
              <div>
                PG Rating: <b>{movie?.rating}</b>
              </div>
              <div>
                Genre: <b>{movie?.genre}</b>
              </div>
            </div>
            {featureFlag && movie?.bookmark && <Rating />}
            <p className="hidden text-2xl lg:block">Actors</p>
            <div className="hidden grid-cols-2 justify-between gap-2 lg:grid ">
              {movie?.actors.map((actor: string) => (
                <p
                  key={actor}
                  className=" flex items-center justify-center rounded-lg  bg-yellow-300 p-4 text-xl"
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
            <h3 className="block text-2xl lg:hidden">Actors</h3>
            <div className="grid grid-cols-2 justify-between gap-2 lg:hidden">
              {movie?.actors.map((actor: string) => (
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
