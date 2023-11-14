import ProjectCard from "../sub/ProjectCard";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-20 text-[40px] font-semibold text-transparent">
        My projects
      </h1>
      <div className="flex h-full w-full flex-col gap-10 px-10 md:flex-row">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="A modern portfolio website built with Next.js"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Interactive website cards built with Next.js"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="A space-themed website built with Next.js"
        />
      </div>
    </div>
  );
}
