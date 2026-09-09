const Team = {
    render(container, team) {
        const section = document.createElement("section");

        section.classList.add(
            "bg-card",
            "flex",
            "justify-center",
            "items-center",
            "gap-[42px]",
            "py-[96px]",
            "max-w-[1200px]",
            "max-md:p-[24px]",
            "mx-auto"
        );

        section.append(
            this.createContent(team)
        );

        container.appendChild(section);

        return section;
    },
    createContent(team) {
        const container = document.createElement("div");
        const image = document.createElement("img");
        const body = document.createElement("p");

        container.classList.add(
            "flex",
            "items-start",
            "justify-between",
            "mx-auto",
            "gap-12",
            "w-full",
            "max-w-[1200px]",
            "text-text-primary",
            "max-lg:flex-col",
            "max-lg:gap-8",
            "max-lg:p-4",
            "max-lg:justify-center"
        );

        image.classList.add(
            "w-auto",
            "h-[700px]",
            "shadow-md/20",
            "max-md:w-full",
            "max-md:h-auto",
            "max-md:max-h-[500px]",
            "max-md:mx-auto",
        );

        body.classList.add(
            "text-body",
            "whitespace-pre-line",
            "leading-relaxed",
            "flex-1",
            "max-w-2xl",
            "max-lg:max-w-none",
        );

        image.src = team.image;
        image.alt = team.name;

        body.textContent = team.text;

        container.append(image, body);

        return container;
    },
}

export default Team;
