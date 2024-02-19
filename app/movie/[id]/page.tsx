"use client";

import MovieDetails, { IMovie } from "@/components/movies/MovieDetails";

export interface Params {
  params: {
    id: IMovie["id"];
  };
}

const page = ({ params }: Params) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 py-8 sm:px-12">
      <MovieDetails params={params} />
    </main>
  );
};

export default page;
