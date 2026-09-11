import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import Project from "../projects/Project";
import projects from "../../data/projects";

const Projects = {
    render(container, slug) {
        const project = projects[slug];

        if (!project) {
            console.error(`Project "${slug}" not found.`);
            return;
        }

        const div = document.createElement("div");

        container.append(
            Banner.render(
                div,
                `${project.name}, ${project.location}`,
                project.system,
                project.image
            ),
            Project.render(div, project),
            Footer.render(div),
        );
    }
};

export default Projects;
