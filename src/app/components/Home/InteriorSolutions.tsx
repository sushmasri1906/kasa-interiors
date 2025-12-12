"use client";

import { motion } from "framer-motion";

// REACT ICONS
import {
	FaBath,
	FaRegLightbulb,
	FaLayerGroup,
	FaPalette,
	FaPaintRoller,
	FaCouch,
	FaSearch,
	FaBoxOpen,
	FaBoxes,
	FaChild,
	FaBookOpen,
	FaDoorClosed,
} from "react-icons/fa";
import { MdTableChart, MdTv } from "react-icons/md";

const ACCENT = "#447f80";

const FEATURES = [
	{ label: "Modular Kitchen", icon: FaBoxes },
	{ label: "Storage & Wardrobe", icon: FaBoxOpen },
	{ label: "Crockery Units", icon: FaSearch },
	{ label: "Space Saving Furniture", icon: FaCouch },
	{ label: "TV Units", icon: MdTv },

	{ label: "Study Tables", icon: MdTableChart },
	{ label: "False Ceiling", icon: FaLayerGroup },
	{ label: "Lights", icon: FaRegLightbulb },
	{ label: "Wallpaper", icon: FaPalette },
	{ label: "Wall Paint", icon: FaPaintRoller },

	{ label: "Bathroom", icon: FaBath },
	{ label: "Pooja Unit", icon: FaBookOpen },
	{ label: "Foyer Designs", icon: FaDoorClosed },
	{ label: "Movable Furniture", icon: FaBoxOpen },
	{ label: "Kids Bedroom", icon: FaChild },
];

export default function InteriorSolutions() {
	return (
		<section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
			{/* subtle accent glow */}
			<div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-64 bg-[radial-gradient(circle_at_top,#447f8012,transparent_65%)]" />

			<div className="mx-auto max-w-5xl px-6 text-center">
				{/* Top tag */}
				<motion.p
					initial={{ opacity: 0, y: 8 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
					className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-slate-600">
					Kasa Interiors
				</motion.p>

				{/* Heading */}
				<motion.h2
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45, delay: 0.1 }}
					className="mt-4 text-3xl font-semibold leading-snug text-slate-900 sm:text-[2rem]">
					End-to-end interior <span style={{ color: ACCENT }}>solutions</span>
				</motion.h2>

				{/* Description */}
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45, delay: 0.18 }}
					className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
					We design, manufacture and execute complete home interiors — modular
					kitchens, wardrobes, furniture, ceilings, lighting and more. Crafted
					for your lifestyle with our signature premium finish.
				</motion.p>

				{/* Feature Grid */}
				<div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
					{FEATURES.map((item, idx) => {
						const Icon = item.icon;
						return (
							<motion.div
								key={item.label}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: idx * 0.03 }}
								whileHover={{ y: -6 }}
								className="group flex flex-col items-center text-center">
								<div
									className="
										flex h-16 w-16 items-center justify-center
										rounded-2xl border border-slate-200 bg-white
										shadow-[0_14px_35px_rgba(15,23,42,0.08)]
										transition-all group-hover:shadow-[0_20px_55px_rgba(15,23,42,0.12)]
									">
									<Icon size={30} color={ACCENT} />
								</div>

								<p className="mt-3 text-[0.9rem] font-medium text-slate-700 group-hover:text-slate-900">
									{item.label}
								</p>

								<span
									className="mt-1 h-[3px] w-8 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
									style={{ backgroundColor: ACCENT }}
								/>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
