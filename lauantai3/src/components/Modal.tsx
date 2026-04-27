import type { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export function Modal({onClose, children}: ModalProps) {
	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center">
			
			<div className="bg-white rounded-xl p-6 relative max-w-lg w-full">

			
				<button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl">
					X
				</button>

				{children}

			</div>
		</div>
	);
}