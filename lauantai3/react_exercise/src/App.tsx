import { Counter } from "./components/Counter";

function App() {
	let age: number;
	age = 25;
	age = 24;

	interface Person {
		name: string;
		age: number;
	}
	const saana: Person = {
		name: "Saana",
		age: 23
	}
  return (
    <>
	<h1 className="bg-orange-500 text-5xl p-4">Hellurei ja hellät tunteet</h1>
	<p className="bg-yellow-200">jotain tekstiä</p>
	<p>{age} ja otetaan tähän vielä myös {saana.name}</p>
	<Counter/> 

	</>   
  )
}

export default App
