"use client";
import { Movie, movieList } from "@/app/data";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import Image from "next/image";

type MovieProps = { params: { id: string; slug: string } };

export default function Slug({ params }: MovieProps) {
  const movie = getMovie(params.slug);

  function getMovie(query: string) {
    return movieList.find((movie) => movie.slug === query);
  }

  // MOVE THIS FUNCTION TO CONTEXT LATER!!!!
  function handleBookMark(movie: Movie) {
    console.log(
      "clicked! put bookmark function here :) use title or something as slug ",
      movie
    );
  }
  return (
    <main className="container">
      <div className="flex flex-col gap-4 py-2">
        <p className="text-3xl lg:text-5xl lg:text-center">{movie?.title}</p>
        <div className="grid grid-cols-2">
          <Image
            src={movie?.thumbnail as string}
            alt={movie?.thumbnail as string}
            width={300}
            height={300}
            className="object-contain rounded-lg shadow lg:w-4/5 "
          />
          <div className="px-2 grid lg:grid-rows-3">
            <div
              className="flex items-center gap-2 bg-yellow-400 py-2 px-2 rounded-lg text-sm transition-all lg:text-4xl justify-center"
              onClick={() => handleBookMark(movie as Movie)}
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
            <div className="lg:text-3xl flex flex-col justify-around">
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
            <div className="lg:grid grid-cols-2 gap-2 justify-between hidden ">
              {movie?.actors.map((actor) => (
                <p
                  key={actor}
                  className=" bg-yellow-300 p-4 rounded-lg text-2xl  flex justify-center items-center"
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
            <div className="grid grid-cols-2 gap-2 justify-between lg:hidden">
              {movie?.actors.map((actor) => (
                <p key={actor} className="text-sm bg-yellow-300 p-4 rounded-lg">
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
