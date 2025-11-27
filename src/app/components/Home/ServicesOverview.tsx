"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ACCENT = "#447f80";

const SERVICES = [
	{
		key: "homes",
		title: "Individual Homes & Villas",
		tag: "Bespoke Residences",
		desc: "Warm, personalised interiors tailored for family living, entertaining and everyday comfort.",
		points: ["Custom layouts", "Material guidance", "Turnkey execution"],
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764151955/villa-HD_ywgpac.jpg",
		href: "/services#homes",
		badge: "Best for independent houses & villas",
		number: "01",
	},
	{
		key: "apartments",
		title: "Apartments",
		tag: "Smart City Living",
		desc: "Space-efficient interiors for 2BHK, 3BHK & duplex apartments with smart storage and clean lines.",
		points: ["Modular storage", "Optimised layouts", "Quick handover"],
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764151915/pexels-dayvison-de-oliveira-silva-5733617-1920x1280_ckthe0.jpg",
		href: "/services#apartments",
		badge: "Ideal for urban lifestyle homes",
		number: "02",
	},
	{
		key: "commercial",
		title: "Commercial & Offices",
		tag: "Workspaces That Perform",
		desc: "Clean, focused environments designed for teams, clients and a strong brand impression.",
		points: ["Brand-led design", "Efficient planning", "Employee comfort"],
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764151940/office_tidjvy.jpg",
		href: "/services#commercial",
		badge: "Perfect for offices, studios & retail",
		number: "03",
	},
];

export default function ServicesOverview() {
	return (
		<section className="relative bg-white py-18 md:py-20 lg:py-24">
			{/* soft background accent */}
			<div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-[#447f80]/6 via-transparent to-transparent" />

			<div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
				{/* Section heading */}
				<div className="text-center max-w-2xl mx-auto">
					<p className="inline-flex items-center gap-3 rounded-full bg-[#447f80] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white">
						Our Core Expertise
					</p>

					<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.2rem]">
						Interiors for{" "}
						<span className="text-[#447f80]">homes, apartments</span> and{" "}
						<span className="text-[#447f80]">modern workspaces</span>.
					</h2>

					<p className="mt-3 text-sm leading-relaxed text-slate-600">
						Choose the category that matches your space — we align design,
						materials and execution around how you live and work.
					</p>
				</div>

				{/* Scroll hint on mobile */}
				<div className="mt-4 flex justify-center md:hidden">
					<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[0.7rem] text-slate-500">
						<span className="h-1.5 w-1.5 rounded-full bg-[#447f80]" />
						<span>Swipe to explore services</span>
					</div>
				</div>

				{/* Cards */}
				<div className="mt-8 md:mt-10">
					<div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
						{SERVICES.map((service, index) => (
							<motion.div
								key={service.key}
								initial={{ opacity: 0, y: 18 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{
									duration: 0.5,
									delay: index * 0.12,
									ease: "easeOut",
								}}
								className="min-w-[82%] snap-center md:min-w-0">
								<Link href={service.href} className="block h-full">
									<motion.article
										whileHover={{
											y: -6,
											boxShadow: "0 22px 50px rgba(15,23,42,0.18)",
										}}
										transition={{
											type: "spring",
											stiffness: 210,
											damping: 18,
										}}
										className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
										{/* IMAGE */}
										<div className="relative h-52 w-full overflow-hidden md:h-56">
											<Image
												src={service.image}
												alt={service.title}
												fill
												className="object-cover transition-transform duration-700 group-hover:scale-105"
											/>

											<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/25 to-transparent" />

											{/* number + tag */}
											<div className="absolute left-4 top-4 flex items-center gap-2">
												<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-xs font-semibold text-[#447f80] shadow-md">
													{service.number}
												</div>

												<span className="rounded-full bg-black/55 px-3 py-1 text-[0.7rem] font-medium text-slate-50 backdrop-blur">
													{service.tag}
												</span>
											</div>

											{/* title chip */}
											<div className="absolute bottom-3 left-3 right-3">
												<div className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold text-slate-900 shadow-md backdrop-blur">
													<span
														className="h-1.5 w-1.5 rounded-full"
														style={{ background: ACCENT }}
													/>
													<span className="truncate">{service.title}</span>
												</div>
											</div>

											{/* hover accent ring */}
											<div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition group-hover:border-[#447f80]/50" />
										</div>

										{/* TEXT BODY */}
										<div className="flex flex-1 flex-col justify-between px-4 pb-4 pt-3 md:px-5 md:pt-4">
											<div>
												<p className="text-[0.88rem] leading-relaxed text-slate-600">
													{service.desc}
												</p>

												<ul className="mt-3 space-y-1.5 text-[0.78rem] text-slate-500">
													{service.points.map((pt) => (
														<li key={pt} className="flex items-center gap-2">
															<span className="h-1 w-4 rounded-full bg-slate-200 group-hover:bg-[#c9e3e3] transition" />
															<span>{pt}</span>
														</li>
													))}
												</ul>
											</div>

											<div className="mt-4 space-y-2">
												<p className="text-[0.72rem] text-slate-400">
													{service.badge}
												</p>

												<div className="flex items-center justify-between">
													<button
														type="button"
														className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-700 group-hover:text-[#447f80] transition">
														<span>View Details</span>
														<span className="text-xs transition-transform group-hover:translate-x-1">
															↗
														</span>
													</button>

													<div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-[0.75rem] text-slate-500 transition group-hover:border-[#447f80] group-hover:text-[#447f80]">
														+
													</div>
												</div>

												<div className="mt-2 h-2 w-full rounded-full bg-slate-100">
													<div className="h-full w-0 rounded-full bg-[#447f80] transition-all duration-300 group-hover:w-full" />
												</div>
											</div>
										</div>
									</motion.article>
								</Link>
							</motion.div>
						))}
					</div>
				</div>

				{/* CTA — SEE MORE SERVICES */}
				<div className="mt-10 flex justify-center">
					<Link href="/services">
						<motion.button
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className="group inline-flex items-center gap-2 rounded-full border border-[#447f80] px-6 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-[#447f80] shadow-[0_10px_30px_rgba(68,127,128,0.18)] bg-white">
							<span>See More Services</span>
							<motion.span
								initial={{ x: 0 }}
								whileHover={{ x: 3 }}
								className="text-sm">
								↗
							</motion.span>
						</motion.button>
					</Link>
				</div>
			</div>
		</section>
	);
}
