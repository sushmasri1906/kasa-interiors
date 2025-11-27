"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ACCENT = "#447f80";

const SERVICE_IMAGES = [
	{
		key: "homes",
		title: "Individual Homes & Villas",
		tag: "Bespoke Residences",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764151955/villa-HD_ywgpac.jpg",
		href: "/services#homes",
	},
	{
		key: "apartments",
		title: "Apartments",
		tag: "Smart City Living",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764151915/pexels-dayvison-de-oliveira-silva-5733617-1920x1280_ckthe0.jpg",
		href: "/services#apartments",
	},
	{
		key: "commercial",
		title: "Commercial & Offices",
		tag: "Workspaces That Perform",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764151940/office_tidjvy.jpg",
		href: "/services#commercial",
	},
];

export default function OurServicesBanner() {
	return (
		<section className="relative bg-white py-16 md:py-20 lg:py-24">
			{/* Gradient background using brand color */}
			<div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#447f80]/70 via-white/40 to-white" />

			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
				{/* Header */}
				<div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
					<div>
						<p className="inline-flex items-center gap-2 rounded-full border border-[#447f80]/30 bg-white/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[#447f80] shadow-sm">
							<span className="h-1.5 w-1.5 rounded-full bg-[#447f80]" />
							Our Services
						</p>

						<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
							Interiors for homes, apartments & workspaces.
						</h2>

						<p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
							Explore our core service categories — each crafted to match how
							you live, work and experience your space.
						</p>
					</div>

					<Link href="/services">
						<motion.button
							whileHover={{ scale: 1.04, y: -2 }}
							whileTap={{ scale: 0.97 }}
							className="inline-flex items-center gap-2 rounded-full border border-[#447f80] bg-white px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-[#447f80] shadow-[0_8px_22px_rgba(68,127,128,0.20)]">
							<span>View All Services</span>
							<span className="text-xs">↗</span>
						</motion.button>
					</Link>
				</div>

				{/* Cards Row */}
				<div className="mt-8 md:mt-10">
					<div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0">
						{SERVICE_IMAGES.map((service, index) => (
							<motion.div
								key={service.key}
								initial={{ opacity: 0, y: 18 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.25 }}
								transition={{
									duration: 0.45,
									ease: "easeOut",
									delay: 0.08 * index,
								}}
								whileHover={{
									y: -8,
									scale: 1.02,
									boxShadow: "0 25px 60px rgba(68,127,128,0.25)",
								}}
								className="min-w-[85%] snap-center md:min-w-0">
								<Link href={service.href} className="block h-full">
									<article
										className="
                      group relative flex w-full
                      flex-col md:flex-row
                      h-auto md:h-[278px]
                      items-stretch overflow-hidden
                      rounded-3xl border border-[#447f80]/25 bg-white shadow-sm transition-all
                    ">
										{/* IMAGE SIDE */}
										<div
											className="
                        relative w-full h-40
                        md:h-full md:w-2/5
                        overflow-hidden
                      ">
											<Image
												src={service.image}
												alt={service.title}
												fill
												className="object-cover transition-transform duration-700 group-hover:scale-110"
											/>
											<div className="absolute inset-0 bg-linear-to-r from-[#447f80]/30 via-transparent to-transparent" />
										</div>

										{/* CONTENT SIDE */}
										<div className="relative flex flex-1 flex-col justify-between px-5 py-5 md:px-7 md:py-7">
											<div>
												<span className="rounded-full bg-[#447f80]/10 px-3 py-1 text-[0.7rem] font-medium text-[#447f80]">
													{service.tag}
												</span>

												<h3 className="mt-3 text-[1rem] font-semibold text-slate-900">
													{service.title}
												</h3>

												<p className="mt-2 text-[0.85rem] leading-relaxed text-slate-600">
													Tailored designs, premium finishes & complete
													execution.
												</p>
											</div>

											{/* Bottom: CTA + bar */}
											<div className="mt-4">
												<div className="flex items-center justify-between">
													<span className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-slate-700 transition group-hover:text-[#447f80]">
														Explore Category ↗
													</span>

													<div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#447f80]/40 text-[#447f80] transition group-hover:bg-[#447f80] group-hover:text-white">
														+
													</div>
												</div>

												<div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
													<div className="h-full w-0 rounded-full bg-[#447f80] transition-all duration-300 group-hover:w-full" />
												</div>
											</div>
										</div>

										{/* Glow border on hover */}
										<div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-[#447f80]/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-[#447f80]/70" />
									</article>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
}
