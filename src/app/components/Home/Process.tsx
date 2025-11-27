"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ACCENT = "#447f80";

const HOMES_URL =
	"https://res.cloudinary.com/djthwunnh/image/upload/v1764151955/villa-HD_ywgpac.jpg";
const APARTMENTS_URL =
	"https://res.cloudinary.com/djthwunnh/image/upload/v1764151915/pexels-dayvison-de-oliveira-silva-5733617-1920x1280_ckthe0.jpg";
const COMMERCIAL_URL =
	"https://res.cloudinary.com/djthwunnh/image/upload/v1764151940/office_tidjvy.jpg";

const steps = [
	{
		id: "01",
		title: "Discover & Plan",
		desc: "We meet, understand your lifestyle, needs and budget, then map out the vision, layout and timelines.",
		image: HOMES_URL,
	},
	{
		id: "02",
		title: "Design & Visualize",
		desc: "Concepts, moodboards and 3D designs — refining details, materials and finishes until everything feels right.",
		image: APARTMENTS_URL,
	},
	{
		id: "03",
		title: "Execute & Deliver",
		desc: "On-site execution, quality checks and final styling, ensuring your space is ready to move in and enjoy.",
		image: COMMERCIAL_URL,
	},
];

export default function ProcessSection() {
	return (
		<section className="relative bg-gradient-to-b from-slate-50 to-white py-20 md:py-24">
			<div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
				{/* Heading */}
				<div className="mx-auto mb-14 max-w-2xl text-center">
					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
						Smart planning of{" "}
						<span className="text-[#447f80]">work process</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
						className="mt-4 text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">
						From the first conversation to the final styling, our process is
						clear, collaborative and detail-driven — so you always know what’s
						happening at every stage.
					</motion.p>

					<div className="mt-6 flex justify-center">
						<div className="h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-[#447f80] to-transparent" />
					</div>
				</div>

				{/* Steps */}
				<div className="grid gap-10 md:grid-cols-3">
					{steps.map((step, index) => (
						<motion.div
							key={step.id}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{
								duration: 0.6,
								ease: "easeOut",
								delay: index * 0.12,
							}}
							className="group flex flex-col items-center text-center">
							{/* Circular image card */}
							<motion.div
								whileHover={{
									scale: 1.06,
									y: -6,
									boxShadow: "0 28px 70px rgba(15,23,42,0.2)",
									borderColor: ACCENT,
								}}
								className="relative mb-6 h-44 w-44 overflow-hidden rounded-full border-[6px] border-slate-200 bg-slate-100 shadow-sm transition-transform"
								style={{ borderColor: "rgba(148,163,184,0.7)" }}>
								{/* Inner subtle ring */}
								<div
									className="absolute inset-2 rounded-full border transition-colors"
									style={{ borderColor: "rgba(68,127,128,0.35)" }}
								/>
								<Image
									src={step.image}
									alt={step.title}
									fill
									className="rounded-full object-cover"
								/>

								{/* Gradient overlay */}
								<div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/55 via-black/18 to-transparent" />

								{/* Step number */}
								<div className="absolute inset-0 flex items-center justify-center">
									<span className="rounded-full bg-black/45 px-4 py-1 text-lg font-semibold tracking-[0.2em] text-white backdrop-blur group-hover:bg-black/30">
										{step.id}
									</span>
								</div>

								{/* Accent ring on hover */}
								<div className="pointer-events-none absolute inset-0 rounded-full border border-transparent group-hover:border-[#447f80]/60 group-hover:shadow-[0_0_0_1px_rgba(68,127,128,0.35)] transition-all" />
							</motion.div>

							<h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-800 group-hover:text-[#447f80] transition-colors">
								{step.title}
							</h3>
							<p className="mt-3 max-w-xs text-[0.85rem] leading-relaxed text-slate-600">
								{step.desc}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
