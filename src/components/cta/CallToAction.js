import Paris from "../../../assets/main/projects/paris-dscf0064.jpg";

const CallToAction = {
    render(container) {
        const section = document.createElement("section");

        section.classList.add(
            "flex",
            "flex-col",
            "justify-between",
            "bg-card",
            "p-4",
            "sm:p-8",
            "lg:p-[96px]",
            "gap-8"
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

            // Responsive width
            "w-full",
            "max-w-[1200px]",

            // Responsive height
            "min-h-[200px]",
            "sm:min-h-[380px]",
            "lg:h-[400px]",

            "mx-auto",

            // Responsive padding
            "p-6",
            "sm:p-8",

            "items-center",
            "justify-center",
            "rounded-3xl",
            "sm:rounded-4xl",
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
            "justify-center",
            "text-center",
            "max-w-3xl"
        );

        header.textContent = "Ready to start your project?";
        subheader.textContent =
            "Schedule a call with one of our engineers";

        header.classList.add(
            "text-h2",
            "font-semibold",
            "max-md:text-xl"
        );

        subheader.classList.add(
            "text-body",
            "max-md:text-sm"
        );

        a.href = "/contact";
        a.dataset.route = "/contact";
        a.textContent = "Schedule A Consultation";

        a.classList.add(
            "font-semibold",
            "bg-primary-600",
            "text-white",
            "px-6",
            "py-3",
            "sm:px-8",
            "sm:py-4",
            "rounded-md",
            "shadow-lg",
            "shadow-primary-500/50",
            "hover:bg-primary-500",
            "hover:text-white",
            "text-sm",
            "sm:text-base",
            "text-center"
        );

        content.append(header, subheader, a);
        container.append(overlay, content);

        return container;
    }
};

const CallToActionV2 = {
    render(container) {
        const section = document.createElement("section");

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
            "w-full",
            "min-h-[400px]",
            "bg-center",
            "bg-cover",
            "bg-no-repeat",
            "flex",
            "items-center",
            "justify-center",
            "overflow-hidden"
        );

        // Black 40% overlay
        overlay.classList.add(
            "absolute",
            "inset-0",
            "bg-black/40"
        );

        // Centered content
        content.classList.add(
            "relative",
            "z-10",
            "flex",
            "flex-col",
            "items-center",
            "justify-center",
            "gap-3",
            "text-center",
            "text-white",
            "px-6",
            "max-w-3xl"
        );

        header.textContent = "Ready to start your project?";

        header.classList.add(
            "text-h2",
            "font-semibold",
            "text-white",
            "max-md:text-xl"
        );

        subheader.textContent =
            "Schedule a call with one of our engineers";

        subheader.classList.add(
            "text-body",
            "text-white",
            "max-md:text-sm"
        );

        a.href = "/contact";
        a.dataset.route = "/contact";
        a.textContent = "Schedule A Consultation";

        a.classList.add(
            "font-semibold",
            "bg-primary-600",
            "text-white",
            "px-6",
            "py-3",
            "sm:px-8",
            "sm:py-4",
            "rounded-md",
            "shadow-lg",
            "shadow-primary-500/50",
            "hover:bg-primary-500",
            "hover:text-white",
            "text-sm",
            "sm:text-base",
            "text-center"
        );

        content.append(
            header,
            subheader,
            a
        );

        container.append(
            overlay,
            content
        );

        return container;
    }
};

export { CallToAction, CallToActionV2 };
