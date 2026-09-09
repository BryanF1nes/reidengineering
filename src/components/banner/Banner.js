import Caroline from "../../../assets/main/projects/caroline_000_6742.jpg";

const Banner = {
    render(container, header, info, image = Caroline) {
        const section = document.createElement("section");
        const overlay = document.createElement("div");
        const content = this.createBanner(header, info);

        section.style.backgroundImage = `url(${image})`;

        section.classList.add(
            "relative",
            "w-full",
            "h-[400px]",
            "bg-cover",
            "bg-center",
        );

        overlay.classList.add(
            "absolute",
            "inset-0",
            "bg-primary-800/80"
        );

        content.classList.add(
            "relative",
            "z-10",
            "max-w-[1200px]",
            "h-full",
            "mx-auto",
            "flex",
            "flex-col",
            "justify-center",
            "text-white",
            "max-xl:p-6"
        );

        section.append(overlay, content);
        container.appendChild(section);

        return section;
    },

    createBanner(header, info) {
        const container = document.createElement("div");
        const title = document.createElement("h3");
        const body = document.createElement("p");

        title.textContent = header;
        body.textContent = info;

        title.classList.add(
            "text-h3",
            "font-semibold",
            "max-md:text-h4"
        );

        body.classList.add("max-w-2/3");

        container.append(title, body);

        return container;
    }
};

export default Banner;
