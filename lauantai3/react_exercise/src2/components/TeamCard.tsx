import { useState } from "react";

// Props interface
interface CardProps {
  name: string;
  role: string;
}

// Component
export function TeamCard({ name, role }: CardProps) {
	const [votes, setVotes] = useState(0);

	return (
    <div className="bg-gray-100 rounded-xl shadow-md p-4 w-64 text-center">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600 mb-2">{role}</p>  

	  <p className="mb-2">Votes: {votes}</p>

      <button
        onClick={() => setVotes(votes + 1)}
        className=" bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Vote 👍
      </button>
    </div>
  );
}