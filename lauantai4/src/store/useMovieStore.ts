import { create } from "zustand";

 export interface Movies {
	id: number;
	title: string;
	watched: boolean;
}

interface MovieState {
	movies: Movies[];
	toggleWatched: (id: number) => void;
}

export const useMovieStore = create<MovieState>((set) => ({
	movies: [
		{ id: 1, title: "The Devil Wears Prada", watched: true },
		{ id: 2, title: "Kill Bill", watched: true },
		{ id: 3, title: "It Ends With Us", watched: false },
		{ id: 4, title: "Oppenheimer", watched: false },
	],

	toggleWatched: (id: number) => 
		set((state) => ({
		movies: state.movies.map((movie) => 
			movie.id === id
				? { ...movie, watched: !movie.watched }
				: movie ),
	})),

}));

