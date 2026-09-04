import reidLogo from "../../../assets/main/rec_logo.png";

const Navbar = {
    render(container, items) {
        const nav = document.createElement("nav");

        nav.classList.add(
            "flex",
            "items-center",
            "max-w-7xl",
            "justify-between",
            "py-4",
            "px-6",
            "lg:px-8",
            "mx-auto"
        );

        nav.append(
            this.createBrand(),
            this.createDesktopNavigation(items),
            this.createMobileNavigation(items)
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
            "w-12",
            "h-12",
            "md:w-[60px]",
            "md:h-[60px]",
            "shadow-md/20",
            "rounded-full"
        );

        const textContainer = document.createElement("div");

        const title = document.createElement("p");
        title.textContent = "Reid Engineering Company";

        title.classList.add(
            "font-semibold",
            "text-text-primary",
            "max-md:hidden"
        );

        const subtitle = document.createElement("p");
        subtitle.textContent = "The Earth is the Lord's...";

        subtitle.classList.add(
            "font-light",
            "text-text-primary",
            "max-md:hidden"
        );

        textContainer.append(title, subtitle);
        container.append(logo, textContainer);

        link.appendChild(container);

        return link;
    },

    createDesktopNavigation(items) {
        const container = document.createElement("div");

        container.classList.add(
            "hidden",
            "md:flex",
            "items-center",
            "gap-10"
        );

        items.forEach((item) => {
            const link = document.createElement("a");

            link.href = item.route;
            link.textContent = item.label;
            link.dataset.route = item.route;

            link.classList.add(
                "font-light",
                "text-primary-900",
                "hover:text-primary-700"
            );

            if (item.primary) {
                link.classList.add(
                    "font-semibold",
                    "bg-primary-600",
                    "text-white",
                    "px-4",
                    "py-2",
                    "rounded-md",
                    "shadow-lg",
                    "shadow-primary-500/50",
                    "hover:bg-primary-500",
                    "hover:text-white"
                );
            }

            container.appendChild(link);
        });

        return container;
    },

    createMobileNavigation(items) {
        const wrapper = document.createElement("div");

        wrapper.classList.add(
            "md:hidden"
        );

        const button = document.createElement("button");

        button.type = "button";
        button.setAttribute("aria-label", "Open navigation");
        button.setAttribute("aria-expanded", "false");

        button.classList.add(
            "relative",
            "z-50",
            "p-2",
            "text-primary-900",
            "hover:text-primary-700"
        );

        const svgNamespace = "http://www.w3.org/2000/svg";

        const svg = document.createElementNS(svgNamespace, "svg");
        const path = document.createElementNS(svgNamespace, "path");

        svg.setAttribute("xmlns", svgNamespace);
        svg.setAttribute("fill", "none");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("stroke-width", "1.5");
        svg.setAttribute("stroke", "currentColor");

        svg.classList.add(
            "w-7",
            "h-7"
        );

        path.setAttribute(
            "stroke-linecap",
            "round"
        );

        path.setAttribute(
            "stroke-linejoin",
            "round"
        );

        path.setAttribute(
            "d",
            "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        );

        svg.appendChild(path);
        button.appendChild(svg);

        const backdrop = document.createElement("div");

        backdrop.classList.add(
            "fixed",
            "inset-0",
            "z-40",
            "bg-black/30",
            "opacity-0",
            "pointer-events-none",
            "transition-opacity",
            "duration-300"
        );

        const menu = document.createElement("div");

        menu.classList.add(
            "fixed",
            "top-0",
            "right-0",
            "z-40",
            "h-dvh",
            "w-full",
            "max-w-sm",
            "bg-white",
            "shadow-xl",
            "translate-x-full",
            "transition-transform",
            "duration-300",
            "ease-in-out",
            "pt-24",
            "px-6"
        );

        items.forEach((item) => {
            const link = document.createElement("a");

            link.href = item.route;
            link.textContent = item.label;
            link.dataset.route = item.route;

            link.classList.add(
                "block",
                "py-4",
                "font-light",
                "text-lg",
                "text-primary-900",
                "hover:text-primary-700"
            );

            if (item.primary) {
                link.classList.add(
                    "font-semibold",
                    "bg-primary-600",
                    "text-white",
                    "px-4",
                    "rounded-md",
                    "hover:bg-primary-500"
                );
            }

            menu.appendChild(link);
        });

        const toggleMenu = (open) => {
            menu.classList.toggle(
                "translate-x-full",
                !open
            );

            backdrop.classList.toggle(
                "opacity-0",
                !open
            );

            backdrop.classList.toggle(
                "pointer-events-none",
                !open
            );

            button.setAttribute(
                "aria-expanded",
                String(open)
            );

            document.body.classList.toggle(
                "overflow-hidden",
                open
            );
        };

        button.addEventListener("click", () => {
            const isOpen =
                button.getAttribute("aria-expanded") === "true";

            toggleMenu(!isOpen);
        });

        backdrop.addEventListener("click", () => {
            toggleMenu(false);
        });

        menu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                toggleMenu(false);
            });
        });

        wrapper.append(
            backdrop,
            menu,
            button
        );

        return wrapper;
    }

};

export default Navbar;
