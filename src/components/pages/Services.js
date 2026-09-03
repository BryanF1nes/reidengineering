const Services = {
    render(container) {
        const section = document.createElement("section");

        section.classList.add(
            "w-[1200px]",
            "mx-auto",
            "py-16"
        );

        const heading = document.createElement("h1");

        heading.textContent = "Our Services";

        heading.classList.add(
            "text-4xl",
            "font-semibold",
            "text-text-primary",
            "mb-6"
        );

        const description = document.createElement("p");

        description.textContent =
            "Reid Engineering Company provides professional engineering services focused on practical, reliable, and sustainable solutions.";

        description.classList.add(
            "text-lg",
            "font-light",
            "text-text-primary",
            "max-w-2xl",
            "mb-12"
        );

        const services = [
            {
                title: "Civil Engineering",
                description:
                    "Comprehensive civil engineering services for residential, commercial, and municipal projects.",
            },
            {
                title: "Wastewater Treatment",
                description:
                    "Engineering and design services for wastewater treatment facilities and related infrastructure.",
            },
            {
                title: "Site Development",
                description:
                    "Site planning, grading, drainage, and infrastructure design tailored to your project's needs.",
            },
        ];

        const serviceContainer = document.createElement("div");

        serviceContainer.classList.add(
            "grid",
            "grid-cols-3",
            "gap-8"
        );

        services.forEach((service) => {
            const card = document.createElement("article");

            card.classList.add(
                "bg-bg-card",
                "rounded-lg",
                "p-6"
            );

            const title = document.createElement("h2");

            title.textContent = service.title;

            title.classList.add(
                "text-xl",
                "font-semibold",
                "text-text-primary",
                "mb-3"
            );

            const description = document.createElement("p");

            description.textContent = service.description;

            description.classList.add(
                "font-light",
                "text-text-primary"
            );

            card.append(title, description);
            serviceContainer.appendChild(card);
        });

        section.append(
            heading,
            description,
            serviceContainer
        );

        container.appendChild(section);
    },
};

export default Services;
