import { projectInfo } from "../projectInfo";
import Card from "./Card";

export default function MyWork() {
  const displayProjects = projectInfo.map((project, index) => (
    <Card
      key={project.id}
      title={project.title}
      thumbnail={project.thumbnail}
      description={project.description}
      github={project.github}
      website={project.website}
      cardHide={index > 3 ? "hidden md:block" : ""}
    />
  ));

  return (
    <div
      id="work"
      className="container mt-56 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-44 w-full"
    >
      <section className="w-full">
        <h2 id="work" className="secondary-title">
          My work
        </h2>
        <p className="section-paragraph">
          I’ve worked extensively in creating fast and reliable software using
          technologies like react, redux, next js and gatsby to name a few.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {displayProjects}
        </div>

        <div className="mx-auto text-center mt-12">
          <a
            href="https://manikagnish.com/projects"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-6 py-2 bg-theme text-white font-bold">
              View more
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
