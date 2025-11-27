"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ACCENT = "#447f80";
const HIGHLIGHT = "#f2b101";

const HOMES_URL =
	"https://res.cloudinary.com/djthwunnh/image/upload/v1764151955/villa-HD_ywgpac.jpg";
const APARTMENTS_URL =
	"https://res.cloudinary.com/djthwunnh/image/upload/v1764151915/pexels-dayvison-de-oliveira-silva-5733617-1920x1280_ckthe0.jpg";
const COMMERCIAL_URL =
	"https://res.cloudinary.com/djthwunnh/image/upload/v1764151940/office_tidjvy.jpg";

const USP_ITEMS = [
	{
		key: "end-to-end",
		title: "End-to-End Execution",
		desc: "One integrated team for design, site work, and handover. No juggling vendors or chasing updates.",
	},
	{
		key: "3d-designs",
		title: "In-house 3D Designs",
		desc: "Photo-realistic 3D views before we build. You see the space, refine it, and then we execute.",
	},
	{
		key: "materials",
		title: "Premium Materials Quality",
		desc: "Engineered boards, branded hardware, and vetted finishes—specified, documented, and trackable.",
	},
	{
		key: "supervision",
		title: "On-site Supervision",
		desc: "Dedicated site checks and progress reports so design intent is followed down to the last detail.",
	},
	{
		key: "pricing",
		title: "Transparent Pricing",
		desc: "Itemised BOQs, clear inclusions, and controlled change orders. No surprise costs mid-project.",
	},
	{
		key: "timelines",
		title: "Timely Delivery",
		desc: "Realistic timelines with internal checkpoints. Work is planned like an engineering project, not guesswork.",
	},
];

const sectionVariants = {
	hidden: { opacity: 0, y: 32 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
};

// FIXED VARIANT (TS SAFE)
const cardVariants: any = {
	hidden: { opacity: 0, y: 20, scale: 0.98 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.45,
			ease: "easeOut",
			delay: 0.08 * i,
		},
	}),
};

const USP_IMAGES = [HOMES_URL, APARTMENTS_URL, COMMERCIAL_URL];

export default function WhyChooseKasa() {
	return (
		<section className="relative bg-white py-16 md:py-20 lg:py-24">
			{/* Background accents */}
			<div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#447f80]/8 blur-3xl" />
			<div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#f2b101]/10 blur-3xl" />

			<motion.div
				variants={sectionVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Heading */}
				<div className="max-w-3xl">
					<p className="inline-flex items-center gap-2 rounded-full bg-[#447f80]/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-700">
						<span
							className="h-1.5 w-1.5 rounded-full"
							style={{ background: HIGHLIGHT }}
						/>
						Why Choose Kasa
					</p>

					<h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.15rem]">
						Interiors engineered for{" "}
						<span className="text-[#447f80]">clarity</span>,{" "}
						<span className="text-[#447f80]">quality</span> &{" "}
						<span className="text-[#f2b101]">consistency</span>.
					</h2>

					<p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[0.96rem]">
						We run every project with the discipline of an engineering build:
						documented BOQs, 3D reviews, site supervision and timelines that are
						planned, not guessed.
					</p>
				</div>

				{/* USP GRID */}
				<div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{USP_ITEMS.map((item, index) => {
						const img = USP_IMAGES[index % USP_IMAGES.length];

						return (
							<motion.article
								key={item.key}
								custom={index}
								variants={cardVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								whileHover={{
									y: -6,
									boxShadow: "0 20px 45px rgba(15,23,42,0.14)",
								}}
								transition={{
									type: "spring",
									stiffness: 220,
									damping: 20,
								}}
								className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-4 sm:p-5">
								{/* Thumbnail */}
								<div className="mb-3 flex items-center gap-3">
									<div className="relative h-12 w-12 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
										<Image
											src={img}
											alt={item.title}
											fill
											className="object-cover transition-transform duration-500 group-hover:scale-105"
										/>
									</div>

									<div className="flex flex-col">
										<span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
											Advantage
										</span>
										<div className="mt-1 h-2 w-10 rounded-full bg-linear-to-r from-[#447f80] via-[#f2b101] to-transparent" />
									</div>
								</div>

								{/* Content */}
								<div className="space-y-2">
									<h3 className="text-sm font-semibold text-slate-900 sm:text-[0.95rem]">
										{item.title}
									</h3>
									<p className="text-[0.85rem] leading-relaxed text-slate-600">
										{item.desc}
									</p>
								</div>

								{/* Accent bottom bar */}
								<div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
									<div className="h-full w-0 rounded-full bg-linear-to-r from-[#447f80] via-[#f2b101] to-[#447f80] transition-all duration-300 group-hover:w-full" />
								</div>
							</motion.article>
						);
					})}
				</div>
			</motion.div>
		</section>
	);
}
