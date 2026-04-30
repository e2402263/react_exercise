import { useState } from "react";
import { useMovieStore } from "../store/useMovieStore";

export const MovieList = () => {
	const movies = useMovieStore((state) => state.movies);
	const toggleWatched = useMovieStore((state) => state.toggleWatched);

	const [filterType, setFilterType] = useState<
	"all" | "watched" | "unwatched">("all");

	let filteredMovies = movies;

	if( filterType === "watched") {
		filteredMovies = movies.filter((m) => m.watched);
	} else if (filterType === "unwatched") {
		filteredMovies = movies.filter((m) => !m.watched);
	}

	return (
		<div className="max-w-xl mx-auto mt-10 font-sans">
			<h2 className="text-2xl font-bold mb-4">Movie Library</h2>

			<div className="flex gap-3 mb-6">
				<button onClick={() => setFilterType("all")}
						className={`px-3 py-1 rounded border ${
							filterType === "all" ? "bg-black text-white" : "bg-white"
						}`}
						>All movies</button>

				<button onClick={() => setFilterType("watched")}
					className={`px-3 py-1 rounded border ${
							filterType === "watched" ? "bg-black text-white" : "bg-white"
						}`}
						>Watched movies</button>

				<button onClick={() => setFilterType("unwatched")}
					className={`px-3 py-1 rounded border ${
							filterType === "unwatched" ? "bg-black text-white" : "bg-white"
						}`}
						>Unwatched movies</button>
			</div>

			<ul className="space-y-3">
				{filteredMovies.map((movie) => (
					<li 
						key={movie.id} 
						className="flex justify-between items-center p-3 border rounded-lg shadow-sm"
					>
					<span>
						{movie.title}{" "}
						<span className="text-sm text-gray-500">
							 ({movie.watched ? "Watched" : "Not watched"})
						</span>
					</span>
					<button 
						onClick={() => toggleWatched(movie.id)}
						className="px-3 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600"
					>
						Toggle
					</button>
					</li>
				))}
			</ul>
		</div>
	)
}