import FavouriteMovies from "@/components/movies/FavouriteMovies";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-16 py-8 sm:px-20">
      {session ? (
        <FavouriteMovies />
      ) : (
        <div className="flex flex-col">
          <div className="flex justify-between items-center mt-4">
            <h1 className="text-2xl font-medium">
              Sign in to view your favourite movies
            </h1>
          </div>
        </div>
      )}
    </main>
  );
}
