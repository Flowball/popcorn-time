import { movieList } from "@/app/data";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import Image from "next/image";

type MovieProps = { params: { id: string; slug: string } };

export default function Slug({ params }: MovieProps) {
  const movie = getMovie(params.slug);

  function getMovie(query: string) {
    return movieList.find((movie) => movie.slug === query);
  }
  console.log(movie?.actors);
  return (
    <main className="container">
      <div className="flex flex-col gap-4 py-2">
        <p className="text-3xl">{movie?.title}</p>
        <div className="grid grid-cols-2 ">
          <Image
            src={movie.thumbnail}
            alt={movie.thumbnail}
            width={300}
            height={300}
            className="object-contain rounded-lg shadow"
          />
          <div className="px-2">
            <div className="flex items-center gap-2 bg-yellow-400 py-2 px-2 rounded-lg text-sm transition-all ">
              {movie?.bookmark ? (
                <>
                  <MinusCircleIcon width={35} height={35} />
                  <p className="text-sm">Remove from list</p>
                </>
              ) : (
                <>
                  <PlusCircleIcon width={35} height={35} />
                  <p>Add to list</p>
                </>
              )}
            </div>
            <div>Year released: {movie?.year}</div>
            <div>PG Rating: {movie?.rating}</div>
            <div>Genre: {movie?.genre}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <div>
            <h3 className="text-2xl">Synopsis</h3>
            <p>{movie?.synopsis}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">Actors</h3>
            <div className="grid grid-cols-2 gap-2 justify-between">
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
