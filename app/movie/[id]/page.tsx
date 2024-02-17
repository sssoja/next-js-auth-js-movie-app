"use client";

import MovieDetails, { IMovie } from "@/components/movies/MovieDetails";

export interface Params {
  params: {
    id: IMovie["id"];
  };
}

const page = ({ params }: Params) => {
  return (
    <main className="mt-5 flex flex-col">
      <MovieDetails params={params} />
    </main>
  );
};

export default page;
