import MoviesList from "@/components/movies/MoviesList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 py-8 sm:px-12">
      <MoviesList />
    </main>
  );
}
