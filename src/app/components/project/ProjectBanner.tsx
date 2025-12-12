"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BG_IMAGE =
	"https://res.cloudinary.com/djthwunnh/image/upload/v1764151955/villa-HD_ywgpac.jpg";

const ACCENT = "#447f80";

export default function ProjectBanner() {
	return (
		<section className="relative flex min-h-[55vh] md:min-h-[70vh] w-full items-center justify-center overflow-hidden">
			{/* Background Image */}
			<Image
				src={BG_IMAGE}
				alt="Contact Kasa Interiors"
				fill
				priority
				className="object-cover"
			/>

			{/* Dark overlay */}
			<div className="absolute inset-0 bg-black/45" />

			{/* Architectural grid */}
			<div className="pointer-events-none absolute inset-0 opacity-[0.18]">
				<div className="h-full w-full bg-[linear-gradient(to_right\,rgba(255,255,255,0.12)_1px\,transparent_1px),linear-gradient(to_bottom\,rgba(255,255,255,0.08)_1px\,transparent_1px)] bg-size[70px_70px]" />
			</div>

			{/* Accent glow */}
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 0.55, scale: 1 }}
				transition={{ duration: 1.2, ease: "easeOut" }}
				className="pointer-events-none absolute -top-24 right-[-60px] h-72 w-72 rounded-full blur-[130px]"
				style={{ background: ACCENT }}
			/>

			{/* Text Content */}
			<motion.div
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.9, ease: "easeOut" }}
				className="relative z-10 px-6 text-center">
				{/* Label */}
				<motion.p className="text-[0.75rem] uppercase tracking-[0.28em] text-white/80">
					Our Projects
				</motion.p>

				<motion.h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
					Spaces Crafted by{" "}
					<span style={{ color: ACCENT }} className="font-extrabold">
						Kasa Interiors
					</span>
				</motion.h1>

				<motion.p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-white/90 tracking-wide">
					A curated selection of residential and commercial interiors — designed
					with precision, warmth, and timeless aesthetics.
				</motion.p>
			</motion.div>
		</section>
	);
}
