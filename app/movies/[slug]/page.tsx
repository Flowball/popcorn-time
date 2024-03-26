import { movieList } from "@/app/data";

export default function Slug({ params }) {
  const movie = getMovie(params.id);

  function getMovie(query: string) {
    return movieList.find((movie) => movie.slug === query);
  }
  return (
    <main className="">
      <h1>Popcorntime</h1>
      <p>THIS IS A SLUG PAGE 🍿</p>
      <p>LOOKING AT MOVIE {movie?.title}</p>
    </main>
  );
}
