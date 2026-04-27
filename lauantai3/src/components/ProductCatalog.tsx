import { useEffect, useState } from "react";
import type { StoreItem } from "../types";
import { Modal } from "./Modal";

export function ProductCatalog() {
	const [items, setItems] = useState<StoreItem[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products?limit=6");

				const data: StoreItem[] = await response.json();
				setItems(data);
			} catch (error) {
				console.error("Error fetching products:", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchItems();
	}, []);

	if (isLoading) {
		return <p className="text-center p-8">Loading products...</p>;
	}

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
				{items.map((item) => (
					<div
						key={item.id}
						onClick={() => setSelectedItem(item)}
						className="border rounded-xl p-4 cursor-pointer"
					>
						<img src={item.image} className="h-40 object-contain mx-auto" />
						<h2 className="font-bold mt-2">{item.title}</h2>
						<p>{item.price}€</p>
					</div>
				))}
			</div>

			{selectedItem && (
				<Modal onClose={() => setSelectedItem(null)}>
					<img src={selectedItem.image} className="h-64 w-full object-contain" />
					<h2 className="text-2xl font-bold mt-4">{selectedItem.title}</h2>
					<p className="mt-2">{selectedItem.description}</p>
					<p className="mt-4 font-semibold">{selectedItem.price}€</p>
				</Modal>
			)}
		</>
	);
}