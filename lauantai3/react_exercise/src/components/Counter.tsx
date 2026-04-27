import { useState } from "react";

export function Counter() {
	const [counter, setCounter] = useState(0);
	return (
		<>
			<h1>Laskuri</h1>
			<p>Laskurin arvo on {counter}</p>
			<button 
				onClick={() => setCounter(counter + 1)}
				className="bg-red-500 rounded-2xl text-white p-3"
				>Kasvata laskuria</button>
		</>
	);
}