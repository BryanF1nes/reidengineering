const Project = {
    render(container, project) {
        const section = document.createElement("section");

        console.log(project);

        section.classList.add(
            "bg-card",
            "flex",
            "flex-col",
            "justify-between",
            "p-[96px]",
            "gap-[42px]",
            "text-white",
            "max-md:p-[24px]"
        );

        section.append(
            this.createProject(project)
        );

        container.appendChild(section);

        return section;
    },

    createProject(project) {
        const container = document.createElement("div");

        container.classList.add(
            "grid",
            "grid-cols-2",
            "max-w-[1200px]",
            "mx-auto",
            "items-center",
            "justify-center",
            "gap-12",
            "w-full",
        );

        container.append(
            this.createImage(project),
            this.createComponents(project)
        );

        if (project.accomplishment) {
            container.append(this.createAccomplishment(project));
        }

        return container;
    },

    createImage(project) {
        const image = document.createElement("img");

        image.src = project.image;
        image.alt = project.name;

        image.classList.add(
            "w-full",
            "h-auto",
            "shadow-md",
            "rounded-md",
            "object-cover"
        );

        return image;
    },

    createComponents(project) {
        const container = document.createElement("div");
        const list = document.createElement("ul");
        const header = document.createElement("h6");

        header.textContent = "The major site components were:";

        header.classList.add(
            "text-h6",
            "text-text-primary",
            "font-semibold",
            "mb-4"
        );

        list.classList.add(
            "flex",
            "flex-col",
            "gap-2",
            "list-none",
            "p-0",
            "m-0"
        );

        project.components.forEach((component) => {
            const item = document.createElement("li");
            const check = document.createElement("span");

            check.textContent = "✔";

            check.classList.add(
                "text-green-500",
                "mr-2",
                "shrink-0"
            );

            item.classList.add(
                "flex",
                "items-start",
                "text-text-primary",
                "text-body"
            );

            item.append(
                check,
                document.createTextNode(component)
            );

            list.append(item);
        });

        container.append(
            header,
            list
        );

        return container;
    },

    createAccomplishment(project) {
        const container = document.createElement("div");
        const accomplishment = document.createElement("p");

        accomplishment.textContent = project.accomplishment;

        accomplishment.classList.add("text-white", "text-body", "font-semibold");
        container.classList.add("bg-linear-to-b", "from-primary-400", "to-primary-600", "p-4", "rounded-md", "shadow-md/20", "col-span-2", "max-lg:col-span-1");

        container.append(accomplishment);

        return container;
    }
};

export default Project;
