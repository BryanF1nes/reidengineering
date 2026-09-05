import Paris from "../../../assets/main/projects/paris-dscf0064.jpg";

const CallToAction = {
    render(container) {
        const section = document.createElement("section");

        section.classList.add(
            "flex",
            "flex-col",
            "justify-between",
            "bg-card",
            "p-[48px]",
            "gap-[42px]"
        );

        section.append(
            this.createCta()
        );

        container.appendChild(section);

        return section;
    },

    createCta() {
        const container = document.createElement("div");
        const overlay = document.createElement("div");
        const content = document.createElement("div");

        const header = document.createElement("h2");
        const subheader = document.createElement("p");
        const a = document.createElement("a");

        container.style.backgroundImage = `url(${Paris})`;

        container.classList.add(
            "relative",
            "bg-center",
            "bg-cover",
            "flex",
            "flex-col",
            "gap-3",
            "w-[1200px]",
            "h-[400px]",
            "mx-auto",
            "p-4",
            "items-center",
            "justify-center",
            "rounded-4xl",
            "text-white",
            "overflow-hidden",
            "shadow-xl/30"
        );

        // Black 40% overlay
        overlay.classList.add(
            "absolute",
            "inset-0",
            "bg-black/40"
        );

        // Keep content above overlay
        content.classList.add(
            "relative",
            "z-10",
            "flex",
            "flex-col",
            "gap-3",
            "items-center",
            "justify-center"
        );

        header.textContent = "Ready to start your project?";
        subheader.textContent = "Schedule a call with one of our engineers";

        header.classList.add(
            "text-h2",
            "font-semibold"
        );

        subheader.classList.add(
            "text-body",
        );

        a.href = "/contact";
        a.dataset.route = "/contact";
        a.textContent = "Schedule A Consultation";

        a.classList.add(
            "font-semibold",
            "bg-primary-600",
            "text-white",
            "px-8",
            "py-4",
            "rounded-md",
            "shadow-lg",
            "shadow-primary-500/50",
            "hover:bg-primary-500",
            "hover:text-white",
            "max-md:text-small"
        );

        content.append(header, subheader, a);
        container.append(overlay, content);

        return container;
    }
}

export default CallToAction;
