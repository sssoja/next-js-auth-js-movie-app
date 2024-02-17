import MoviesList from "@/components/movies/MoviesList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-16 py-8 sm:px-20">
      <MoviesList />
    </main>
  );
}
