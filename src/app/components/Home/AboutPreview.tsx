"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Image from "next/image";

const ACCENT = "#447f80";

const slides = [
	{
		id: "who",
		number: "01",
		label: "Who We Are",
		kicker: "Full-service interior design studio",
		title: "We design spaces that feel considered, lived-in and long-lasting.",
		body: [
			"Kasa Interiors is a Hyderabad-based interior design studio crafting creative, functional and luxurious spaces across Telangana & Andhra Pradesh.",
			"We are known for our high-end finishes, attention to detail, and a personalised process from concept to execution — across homes, apartments, retail, hospitality and corporate spaces.",
		],
		badge: "Residential · Commercial · Hospitality",
	},
	{
		id: "motto",
		number: "02",
		label: "Our Motto",
		kicker: "Beyond expectations, every single time",
		title:
			"“Our motto is to exceed the expectations of our clients with every space we deliver.”",
		body: [
			"We respect the past, embrace the future, and believe that creativity — combined with exceptional skill and discipline — results in spaces of richness and timeless sophistication.",
			"Every project is treated as a long-term relationship, not a one-time assignment. Design, execution and detailing are aligned to how you live, work and grow.",
		],
		badge: "Design · Execute · Deliver",
	},
];

const slideVariants: Variants = {
	enter: (direction: number) => ({
		opacity: 0,
		x: direction > 0 ? 40 : -40,
	}),
	center: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
	exit: (direction: number) => ({
		opacity: 0,
		x: direction > 0 ? -30 : 30,
		transition: { duration: 0.35, ease: "easeIn" },
	}),
};

export default function AboutShowcase() {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(1);

	const current = slides[index];

	useEffect(() => {
		const id = setInterval(() => {
			setDirection(1);
			setIndex((prev) => (prev + 1) % slides.length);
		}, 9000);
		return () => clearInterval(id);
	}, []);

	const goTo = (nextIndex: number) => {
		if (nextIndex === index) return;
		setDirection(nextIndex > index ? 1 : -1);
		setIndex((nextIndex + slides.length) % slides.length);
	};

	return (
		<section className="relative overflow-hidden bg-[#f7f5f1] py-20 md:py-24 lg:py-28">
			{/* background accents */}
			<div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#447f80]/10 blur-3xl" />
			<div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#447f80]/10 blur-3xl" />

			<div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6 lg:flex-row lg:items-stretch lg:gap-16 lg:px-8">
				{/* LEFT */}
				<div className="flex-1 space-y-8">
					{/* FIXED: Missing <div> tag */}
					<div className="inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-600 shadow-sm">
						<span
							className="h-1.5 w-1.5 rounded-full"
							style={{ background: ACCENT }}
						/>
						<span>About · Kasa Interiors</span>
					</div>

					{/* Main heading */}
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">
							Design is intelligence made visible.
						</p>
						<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.4rem] lg:leading-tight">
							Thoughtful interiors that balance aesthetics, function and
							comfort.
						</h2>
					</div>

					{/* slider card */}
					<div className="relative">
						<div
							className="pointer-events-none absolute -left-3 top-6 hidden h-24 w-0.5 rounded-full md:block"
							style={{ background: ACCENT }}
						/>

						<div className="relative overflow-hidden rounded-3xl bg-white/90 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.12)] md:p-8">
							<AnimatePresence custom={direction} mode="wait">
								<motion.div
									key={current.id}
									custom={direction}
									variants={slideVariants}
									initial="enter"
									animate="center"
									exit="exit"
									className="space-y-5">
									{/* NUMBER + LABEL */}
									<div className="flex items-center justify-between gap-3">
										<div className="flex items-center gap-3">
											<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0faf9] text-xs font-semibold text-[#447f80]">
												{current.number}
											</div>
											<p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
												{current.label}
											</p>
										</div>
									</div>

									{/* kicker */}
									<p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
										{current.kicker}
									</p>

									{/* title */}
									<h3 className="text-lg font-semibold text-slate-900 md:text-xl lg:text-[1.4rem] lg:leading-snug">
										{current.title}
									</h3>

									{/* body */}
									<div className="space-y-3 text-[0.92rem] leading-relaxed text-slate-600 md:text-[0.95rem]">
										{current.body.map((paragraph) => (
											<p key={paragraph.slice(0, 24)}>{paragraph}</p>
										))}
									</div>

									{/* badge */}
									<div className="pt-3">
										<span className="inline-flex items-center gap-2 rounded-full bg-[#f0faf9] px-3 py-1 text-[0.7rem] font-medium text-[#214345]">
											<span className="h-1.5 w-1.5 rounded-full bg-[#447f80]" />
											{current.badge}
										</span>
									</div>
								</motion.div>
							</AnimatePresence>
						</div>

						{/* controls */}
						<div className="mt-5 flex flex-wrap items-center justify-between gap-4">
							<div className="flex items-center gap-2 text-[0.7rem] text-slate-500">
								<span className="h-px w-10 bg-linear-to-r from-transparent via-slate-300 to-transparent" />
								<span>
									Section {current.number} · {current.label}
								</span>
							</div>

							<div className="flex items-center gap-3">
								{slides.map((s, i) => {
									const active = i === index;
									return (
										<button
											key={s.id}
											onClick={() => goTo(i)}
											className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-all ${
												active
													? "border-[#447f80] bg-[#e5f3f3] text-[#447f80] shadow-sm"
													: "border-slate-200 bg-white text-slate-500 hover:border-[#447f80]/70 hover:text-[#447f80]"
											}`}>
											<span>{s.number}</span>
											<span className="hidden sm:inline">{s.label}</span>
										</button>
									);
								})}
							</div>
						</div>
					</div>
				</div>

				{/* RIGHT IMAGE PANEL */}
				<div className="relative flex-1">
					<div className="relative h-[280px] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-[0_24px_70px_rgba(15,23,42,0.35)] sm:h-[340px] md:h-[380px] lg:h-full">
						<div className="pointer-events-none absolute inset-4 rounded-[1.7rem] border border-white/15" />

						<Image
							src="https://res.cloudinary.com/djthwunnh/image/upload/v1764151915/pexels-dayvison-de-oliveira-silva-5733617-1920x1280_ckthe0.jpg"
							alt="Kasa Interiors studio preview"
							fill
							className="object-cover"
						/>

						<div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/65 via-black/30 to-transparent" />

						<div className="absolute bottom-5 left-5 flex flex-col gap-1 text-sm text-slate-50">
							<span className="inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.2em]">
								Kasa Interiors
							</span>
							<p className="text-[0.9rem] font-medium">
								Hyderabad · Vijayawada · Vishakapatnam
							</p>
						</div>

						<div className="absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[0.7rem] font-semibold text-slate-900 shadow-lg">
							Design · Execute · Deliver
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
