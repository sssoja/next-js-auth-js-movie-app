"use client";

import Movie, { IMovie } from "@/components/Movie";

export interface Params {
  params: {
    id: IMovie["id"];
  };
}

const page = ({ params }: Params) => {
  return (
    <main className="mt-5 flex flex-col">
      <Movie params={params} />
    </main>
  );
};

export default page;
