"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ACCENT = "#447f80";

function GalleryGrid({ images }: { images: string[] }) {
	const [open, setOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const hasImages = images && images.length > 0;
	const activeImage = hasImages ? images[activeIndex] : null;

	/* Keyboard navigation */
	useEffect(() => {
		if (!open) return;

		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
			if (e.key === "ArrowRight")
				setActiveIndex((i) => (i + 1) % images.length);
			if (e.key === "ArrowLeft")
				setActiveIndex((i) => (i - 1 + images.length) % images.length);
		};

		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [open, images.length]);

	return (
		<>
			{/* GRID */}
			<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{images.map((src, index) => (
					<button
						key={index}
						onClick={() => {
							setActiveIndex(index);
							setOpen(true);
						}}
						className="
							group relative overflow-hidden rounded-2xl
							bg-slate-100
							shadow-[0_18px_50px_rgba(15,23,42,0.14)]
							transition-all duration-500
							hover:-translate-y-1
						">
						{/* image */}
						<div className="relative h-56 w-full">
							<Image
								src={src}
								alt={`Project image ${index + 1}`}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
							/>
						</div>

						{/* soft interior overlay */}
						<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

						{/* index */}
						<div className="absolute bottom-3 right-3 rounded-full bg-white/85 px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-slate-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
							{index + 1} / {images.length}
						</div>
					</button>
				))}
			</div>

			{/* FULLSCREEN VIEWER */}
			{open && activeImage && (
				<div className="fixed inset-0 z-50 bg-black">
					{/* Close */}
					<button
						onClick={() => setOpen(false)}
						className="absolute right-6 top-6 z-50 text-3xl text-white/80 hover:text-white">
						×
					</button>

					{/* Main Image */}
					<div className="relative h-full w-full">
						<Image
							src={activeImage}
							alt="Project view"
							fill
							priority
							className="object-contain"
						/>
					</div>

					{/* Navigation */}
					{images.length > 1 && (
						<>
							<button
								onClick={() =>
									setActiveIndex((i) => (i - 1 + images.length) % images.length)
								}
								className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-4 py-3 text-white hover:bg-black/80">
								‹
							</button>
							<button
								onClick={() => setActiveIndex((i) => (i + 1) % images.length)}
								className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-4 py-3 text-white hover:bg-black/80">
								›
							</button>
						</>
					)}

					{/* Bottom film strip */}
					<div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-md">
						<div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-4 py-3">
							{images.map((img, i) => (
								<button
									key={i}
									onClick={() => setActiveIndex(i)}
									className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition
										${
											i === activeIndex
												? "border-[#447f80]"
												: "border-transparent opacity-70 hover:opacity-100"
										}`}>
									<Image
										src={img}
										alt={`Thumb ${i + 1}`}
										fill
										className="object-cover"
									/>
								</button>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default GalleryGrid;
