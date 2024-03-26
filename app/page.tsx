export default function Home() {
  return (
    <main className="container">
      <h1>Popcorntime</h1>
      <p>hello popcorn-time 🍿</p>

      {/* EXAMPLE CODE TO USE MOVIECARD!!! */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
        {movieList.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div> */}
    </main>
  );
}
