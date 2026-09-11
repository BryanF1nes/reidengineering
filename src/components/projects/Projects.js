import projects from "../../data/projects";

const Projects = {
    render(container) {
        const section = document.createElement("section");

        section.classList.add(
            "bg-card",
            "flex",
            "flex-col",
            "justify-between",
            "bg-card",
            "p-[96px]",
            "gap-[42px]",
            "text-white",
            "max-md:p-[24px]"
        );

        section.append(
            this.createTagLine(),
            this.createContent(projects)
        );

        container.appendChild(section);

        return section;
    },

    createTagLine() {
        const container = document.createElement("div");
        const identifier = document.createElement("p");
        const header = document.createElement("h2");
        const body = document.createElement("p");
        container.classList.add(
            "flex",
            "flex-col",
            "gap-2",
            "w-full",
            "max-w-[1200px]",
            "mx-auto"
        );

        identifier.classList.add("text-small", "font-light", "text-text-primary");
        header.classList.add("text-h2", "font-semibold", "text-text-primary", "max-md:text-h4");
        body.classList.add("text-body", "tracking-[0.03em]", "text-text-primary", "max-md:text-small");

        identifier.textContent = "projects";
        header.textContent = "Our Projects";
        body.textContent = "REC has been providing quality services to clients around the country, here are some of our projects.";

        container.append(identifier, header, body);

        return container;
    },

    createContent(projects) {
        const container = document.createElement("div");

        container.classList.add(
            "text-text-primary",
            "flex",
            "flex-col",
            "gap-16",
            "w-full",
            "max-w-[1200px]",
            "mx-auto"
        );

        Object.entries(projects).forEach(([slug, project], index) => {
            container.appendChild(
                this.createProject(project, index)
            );
        });


        return container;
    },

    createProject(project, index) {
        const article = document.createElement("article");

        const imageContainer = document.createElement("div");
        const image = document.createElement("img");

        const content = document.createElement("div");
        const location = document.createElement("p");
        const title = document.createElement("h3");
        const description = document.createElement("p");

        const a = document.createElement("a");

        // Image
        image.src = project.image;
        image.alt = project.name;

        image.classList.add(
            "w-full",
            "h-full",
            "object-cover",
            "transition-transform",
            "duration-500",
            "hover:scale-105"
        );

        imageContainer.classList.add(
            "w-full",
            "h-[400px]",
            "overflow-hidden",
            "rounded-lg"
        );

        imageContainer.appendChild(image);

        // Content
        location.textContent = project.location;
        title.textContent = project.name;
        description.textContent = project.text;

        content.classList.add(
            "flex",
            "flex-col",
            "gap-3"
        );

        location.classList.add(
            "text-small",
            "font-light"
        );

        title.classList.add(
            "text-h3",
            "font-semibold"
        );

        description.classList.add(
            "text-body",
            "font-light",
            "max-w-xl"
        );

        a.textContent = "Learn More";
        a.dataset.route = `/projects/${project.route}`;

        a.classList.add(
            "mt-auto",
            "self-start",
            "font-semibold",
            "text-text-primary",
            "border-2",
            "border-primary-800",
            "px-6",
            "py-3",
            "rounded-md",
            "shadow-lg",
            "max-md:text-small",
            "flex-none",
            "cursor-pointer"
        );

        content.append(
            location,
            title,
            description,
            a
        );

        // Layout
        article.classList.add(
            "grid",
            "grid-cols-1",
            "lg:grid-cols-2",
            "gap-8",
            "lg:gap-16",
            "items-center",
            "py-[32px]"
        );

        // Alternate image position
        if (index % 2 !== 0) {
            imageContainer.classList.add(
                "lg:order-2"
            );

            content.classList.add(
                "lg:order-1"
            );
        }

        article.append(
            imageContainer,
            content
        );

        return article;
    }
};

export default Projects;
