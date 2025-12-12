import { PROJECTS } from "@/app/data/projects";
import GalleryGrid from "@/app/components/project/GalleryGrid";
import Image from "next/image";
import {
	FiMapPin,
	FiHome,
	FiChevronRight,
	FiCamera,
	FiCheckCircle,
	FiStar,
	FiMaximize2,
} from "react-icons/fi";
import { notFound } from "next/navigation";

const ACCENT = "#447f80";

function InfoPill({
	icon: Icon,
	label,
	value,
}: {
	icon: React.ElementType;
	label: string;
	value?: string | number;
}) {
	if (value === undefined || value === null || value === "") return null;

	return (
		<div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/95 px-4 py-2 shadow-sm backdrop-blur">
			<span
				className="grid h-9 w-9 place-items-center rounded-full"
				style={{ backgroundColor: `${ACCENT}14` }}>
				<Icon className="h-4 w-4" style={{ color: ACCENT }} />
			</span>
			<div className="leading-tight">
				<p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-slate-500">
					{label}
				</p>
				<p className="text-sm font-semibold text-slate-900">{value}</p>
			</div>
		</div>
	);
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = PROJECTS.find((p) => p.slug === slug);

	if (!project) notFound();

	return (
		<main className="bg-white pb-20">
			{/* ================= HERO ================= */}
			<section className="relative w-full">
				<div className="relative h-[60vh] sm:h-[68vh] md:h-[72vh] lg:h-[82vh] overflow-hidden">
					<Image
						src={project.heroImage || project.coverImage}
						alt={project.title}
						fill
						priority
						className="object-cover object-center"
						sizes="100vw"
					/>

					{/* overlay */}
					<div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/35 to-black/10" />

					{/* breadcrumbs */}
					<div className="absolute top-0 inset-x-0 z-20">
						<div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-20 flex items-center gap-2 text-xs text-white/75">
							<FiHome className="opacity-90" />
							<span>Projects</span>
							<FiChevronRight className="opacity-60" />
							<span className="truncate text-white/85">{project.title}</span>
						</div>
					</div>

					{/* hero content */}
					<div className="absolute inset-x-0 bottom-0 z-20">
						<div className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-24 md:pb-28">
							<div className="max-w-3xl space-y-4">
								<div className="flex flex-wrap gap-2">
									<span
										className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-white"
										style={{ backgroundColor: `${ACCENT}cc` }}>
										<FiStar />
										{project.type}
									</span>

									{project.location && (
										<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
											<FiMapPin />
											{project.location}
										</span>
									)}
								</div>

								<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
									{project.title}
								</h1>

								<p className="max-w-2xl text-sm sm:text-[0.95rem] md:text-base leading-relaxed text-white/85">
									{project.shortDescription}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ================= INFO PILLS ================= */}
			<div className="relative z-30 -mt-8 sm:-mt-10 md:-mt-12">
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<div
						className="
    grid grid-cols-1 gap-3
    sm:grid-cols-3
    md:flex md:flex-wrap md:items-center md:justify-center
    md:rounded-full md:p-5
    md:bg-[linear-gradient(to_right,rgba(68,127,128,0.22),rgba(255,255,255,0.55),rgba(255,255,255,0.9))]
    md:backdrop-blur-sm
    md:border md:border-[#447f80]/20
  ">
						<InfoPill icon={FiMaximize2} label="Area" value={project.area} />
						<InfoPill
							icon={FiCamera}
							label="Photos"
							value={project.images.length}
						/>
						<InfoPill icon={FiStar} label="Style" value={project.style} />
					</div>
				</div>
			</div>

			{/* ================= CONTENT ================= */}
			<section className="mt-16 sm:mt-20 md:mt-24">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
					{/* overview */}
					<div>
						<h2 className="text-xl font-semibold text-slate-900">
							Project Overview
						</h2>

						<p className="mt-3 text-sm sm:text-[0.95rem] leading-relaxed text-slate-700">
							{project.overview}
						</p>

						<div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
							<div className="flex items-center gap-3">
								<span
									className="grid h-10 w-10 place-items-center rounded-2xl"
									style={{ backgroundColor: `${ACCENT}14` }}>
									<FiCheckCircle
										className="h-5 w-5"
										style={{ color: ACCENT }}
									/>
								</span>
								<div>
									<p className="font-semibold text-slate-900">Key Highlights</p>
									<p className="text-xs text-slate-500">
										Design & execution focus points
									</p>
								</div>
							</div>

							<ul className="mt-5 space-y-3 text-sm text-slate-700">
								{project.highlights.map((point, index) => (
									<li key={index} className="flex gap-3">
										<span
											className="mt-2 h-2 w-2 rounded-full shrink-0"
											style={{ backgroundColor: ACCENT }}
										/>
										{point}
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* facts */}
					<aside className="lg:sticky lg:top-24">
						<div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
							<p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
								Project Facts
							</p>

							<div className="mt-5 space-y-4">
								{[
									{
										label: "Location",
										value: project.location,
										icon: FiMapPin,
									},
									{ label: "Project Type", value: project.type, icon: FiStar },
									{ label: "Area", value: project.area, icon: FiMaximize2 },
								].map(
									(item, i) =>
										item.value && (
											<div
												key={i}
												className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
												<span
													className="grid h-10 w-10 place-items-center rounded-2xl"
													style={{ backgroundColor: `${ACCENT}14` }}>
													<item.icon
														className="h-5 w-5"
														style={{ color: ACCENT }}
													/>
												</span>
												<div>
													<p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
														{item.label}
													</p>
													<p className="mt-1 text-sm font-semibold text-slate-900">
														{item.value}
													</p>
												</div>
											</div>
										)
								)}
							</div>
						</div>
					</aside>
				</div>
			</section>

			{/* ================= GALLERY ================= */}
			<section className="mt-14">
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<div className="flex items-end justify-between gap-6">
						<div>
							<h2 className="text-xl font-semibold text-slate-900">
								Project Gallery
							</h2>
							<p className="mt-2 text-sm text-slate-600">
								A closer look at the interiors.
							</p>
						</div>

						<div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm">
							<FiCamera />
							<span className="font-semibold">{project.images.length}</span>
							photos
						</div>
					</div>

					<div className="mt-8">
						<GalleryGrid images={project.images} />
					</div>
				</div>
			</section>
		</main>
	);
}
