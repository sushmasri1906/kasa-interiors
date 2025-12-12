"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/app/data/projects";

const ACCENT = "#447f80";

export function ProjectCard({ project }: { project: Project }) {
	return (

		<Link
			href={`/projects/${project.slug}`}
			className="
				group flex h-full flex-col overflow-hidden
				rounded-3xl border border-slate-100 bg-white
				shadow-[0_18px_45px_rgba(15,23,42,0.12)]
				transition-all duration-300
				hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.18)]
			">
				
			<div className="relative h-52 w-full overflow-hidden">
				<Image
					src={project.coverImage}
					alt={project.title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
					sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
				/>

				<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

				<div className="absolute left-4 top-4">
					<span className="rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-700 shadow-sm backdrop-blur">
						{project.type}
					</span>
				</div>
			</div>

			<div className="flex flex-1 flex-col p-4 text-left">
				<p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
					{project.location}
				</p>

				<h3 className="mt-2 text-[1.05rem] font-semibold leading-snug text-slate-900">
					{project.title}
				</h3>

				<p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
					{project.shortDescription}
				</p>

				<div className="mt-4 flex items-center justify-between gap-3 text-[0.75rem] text-slate-500">
					{project.area && <p className="font-medium">{project.area}</p>}
					{project.style && (
						<p className="truncate text-right italic">{project.style}</p>
					)}
				</div>

				<div className="mt-3 flex items-center justify-between">
					<div
						className="h-[3px] w-12 rounded-full"
						style={{ backgroundColor: ACCENT }}
					/>
					<span className="text-[0.75rem] font-medium text-slate-500 transition-colors group-hover:text-slate-800">
						View project →
					</span>
				</div>
			</div>
		</Link>
	);
}
