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

        container.classList.add("flex", "justify-between", "mx-auto", "gap-8", "text-text-primary");
        image.classList.add("w-auto", "h-[700px]", "shadow-md/20");
        body.classList.add("text-body", "whitespace-pre-line");

        image.src = team.image;
        image.alt = team.name;

        body.textContent = team.text;

        container.append(image, body);
        return container;
    },
}

export default Team;
