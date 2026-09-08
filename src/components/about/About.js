import John from "../../../assets/main/team/john_full.jpg";

const AboutDiv = {
    render(container) {
        const section = document.createElement("section");

        section.classList.add(
            "flex",
            "items-center",
            "justify-center",
            "bg-card",
            "p-[96px]",
        );

        section.append(
            this.createTagLine(),
        );

        container.appendChild(section);

        return section;
    },

    createTagLine() {
        const container = document.createElement("div");
        const identifier = document.createElement("p");
        const header = document.createElement("h2");
        const body = document.createElement("p");
        const img = document.createElement("img");

        img.src = John;
        img.alt = "John H. Reid, P.E";
        img.classList.add("w-1/2", "rounded-2xl", "shadow-md/30", "mt-6")

        container.classList.add(
            "flex",
            "flex-col",
            "items-center",
            "justify-center",
            "gap-2",
        );
        identifier.classList.add("text-small", "font-light", "text-text-primary");
        header.classList.add("text-h2", "font-semibold", "text-text-primary", "max-md:text-h4");
        body.classList.add("text-text-primary", "text-body", "tracking-[0.03em]", "text-text-primary", "max-md:text-small", "max-w-[800px]", "text-center");

        identifier.textContent = "story";
        header.textContent = "Our Story";
        body.textContent = "Reid Engineering Co. (REC) was formed by John H. Reid, P.E. in 1977 with a passion to provide a superior and more responsive client experience for private and public clients while raising the standard in engineering solutions delivery.";

        container.append(identifier, header, body, img);

        return container;
    },
}

export default AboutDiv;
