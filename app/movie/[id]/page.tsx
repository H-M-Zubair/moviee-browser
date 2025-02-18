import Movie from "@/components/Movie";
import { fetchMovieDetails } from "@/lib/api";

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const movie = await fetchMovieDetails(id);

  if (!movie) return <p className="text-red-500">Movie not found.</p>;

  return (
    <div>
      <Movie movie={movie} />
    </div>
  );
}
