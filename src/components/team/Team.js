const Team = {
    render(container, title, body) {
        const section = document.createElement("section");

        section.classList.add(
            "bg-card",
            "flex",
            "flex-col",
            "bg-card",
            "justify-start",
            "p-[96px]",
            "gap-[42px]",
            "max-w-[1200px]",
            "max-md:p-[24px]",
        );

        section.append(
            this.createContent()
        );

        container.appendChild(section);

        return section;
    },

    createContent() {
        const container = document.createElement("div");

        return container;
    },
}

export default Team;
