import { PROJECTS } from "@/app/data/projects";
import { ProjectCard } from "@/app/components/project/ProjectsCard";
import ProjectBanner from "@/app/components/project/ProjectBanner";

export default function ProjectsPage() {
	return (
		<main className="bg-white">
			{/* HERO BANNER */}
			<ProjectBanner />

			{/* PROJECT GRID */}
			<section className="py-16 sm:py-20">
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{PROJECTS.map((project) => (
							<ProjectCard key={project.slug} project={project} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
