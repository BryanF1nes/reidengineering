import reidLogo from "../../../assets/main/rec_logo.png";

const Navbar = {
    render(container, items) {
        const nav = document.createElement("nav");

        nav.classList.add(
            "flex",
            "items-center",
            "w-[1200px]",
            "justify-between",
            "py-4"
        );

        nav.append(
            this.createBrand(),
            this.createNavigation(items)
        );

        container.appendChild(nav);

        return nav;
    },

    createBrand() {
        const link = document.createElement("a");
        const container = document.createElement("div");

        link.href = "/";
        link.dataset.route = "/";

        container.classList.add(
            "flex",
            "items-center",
            "gap-2"
        );

        const logo = document.createElement("img");

        logo.src = reidLogo;
        logo.alt = "Reid Engineering Company";
        logo.classList.add(
            "w-[60px]",
            "h-[60px]",
            "shadow-md/20",
            "rounded-full"
        );

        const textContainer = document.createElement("div");

        const title = document.createElement("p");
        title.textContent = "Reid Engineering Company";
        title.classList.add(
            "font-semibold",
            "text-text-primary"
        );

        const subtitle = document.createElement("p");
        subtitle.textContent = "The Earth is the Lord's...";
        subtitle.classList.add(
            "font-light",
            "text-text-primary"
        );

        textContainer.append(title, subtitle);
        container.append(logo, textContainer);

        link.appendChild(container);

        return link;
    },

    createNavigation(items) {
        const container = document.createElement("div");

        container.classList.add(
            "flex",
            "items-center",
            "gap-10"
        );

        items.forEach((item) => {
            const link = document.createElement("a");

            link.href = item.route;
            link.textContent = item.label;
            link.dataset.route = item.route;

            link.classList.add("font-light", "text-primary-900", "hover:text-primary-700");

            if (item.primary) {
                link.classList.add(
                    "font-semibold",
                    "bg-primary-500",
                    "text-white",
                    "px-4",
                    "py-2",
                    "rounded-md",
                    "shadow-lg",
                    "shadow-primary-500/50",
                    "hover:bg-primary-600",
                    "hover:text-white",
                );
            }

            container.appendChild(link);
        });

        return container;
    }
};

export default Navbar;
