// Import the newly created component
import { TeamCard } from "./components/TeamCard";

export default function App() {
  return (
    <div className="p-4">
		<h1 className="text-2xl font-bold mb-8 text-slate-700">
			Welcome to React!
		</h1>
			
		<div className="flex gap-4">
			<TeamCard name="Daisy" role="Cockerspanieli"/>
			<TeamCard name="Bruno" role="Saksanpaimenkoira"/>
			<TeamCard name="Tiuhti" role="Kissa"/>
		</div>
    </div>
  );
}
