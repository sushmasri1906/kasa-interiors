"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/app/data/projects";
import { ProjectCard } from "@/app/components/project/ProjectsCard";

const ACCENT = "#447f80";

export default function FeaturedProjects() {
	const featured = PROJECTS.slice(0, 3); // top 3 featured

	return (
		<section className="relative w-full bg-white py-16 sm:py-20">
			{/* soft accent glow in background */}
			<div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-64 bg-[radial-gradient(circle_at_top,#447f8015,transparent_65%)]" />

			<div className="mx-auto max-w-6xl px-6">
				{/* Header */}
				<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
							<span
								className="mr-2 h-1.5 w-1.5 rounded-full"
								style={{ backgroundColor: ACCENT }}
							/>
							<p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-600">
								Our Work
							</p>
						</div>

						<h2 className="mt-3 text-xl font-semibold text-slate-900 sm:text-[1.4rem]">
							Featured interior projects
						</h2>
						<p className="mt-2 max-w-xl text-sm text-slate-600">
							A curated selection of homes, villas and workspaces we’ve designed
							across Hyderabad – crafted around how our clients actually live
							and work.
						</p>
					</div>

					<Link
						href="/projects"
						className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:border-transparent hover:shadow-md"
						style={{ "--accent": ACCENT } as React.CSSProperties}>
						<span className="mr-1">View all projects</span>
						<span className="text-[1.1rem]" style={{ color: ACCENT }}>
							↗
						</span>
					</Link>
				</div>

				{/* Cards */}
				<div
					className="
						mt-10 grid auto-rows-[1fr] gap-8
						sm:grid-cols-2
						lg:grid-cols-3
						lg:[&>*:first-child]:col-span-2
					">
					{featured.map((project, index) => (
						<motion.div
							key={project.slug}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{
								duration: 0.45,
								ease: "easeOut",
								delay: index * 0.08,
							}}
							className="h-full">
							<ProjectCard project={project} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
