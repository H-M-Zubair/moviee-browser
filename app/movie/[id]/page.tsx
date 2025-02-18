import Movie from "@/components/Movie";
import { fetchMovieDetails } from "@/lib/api";

export default async function MovieDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id }: { id: string } = await params;
  const movie = await fetchMovieDetails(id);

  if (!movie) return <p className="text-red-500">Movie not found.</p>;

  return (
    <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-14 xl:mx-20">
      <Movie movie={movie} />
    </div>
  );
}
