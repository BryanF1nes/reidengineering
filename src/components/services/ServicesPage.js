import services from "../../data/services";

const ServicesPage = {
    render(container) {
        const section = document.createElement("section");

        section.classList.add(
            "flex",
            "flex-col",
            "justify-between",
            "bg-bg",
            "p-[48px]",
            "gap-[42px]"
        );

        section.append(
            this.createTagLine(),
            this.createCards(services),
        );

        container.appendChild(section);

        return section;
    },

    createTagLine() {
        const container = document.createElement("div");
        const identifier = document.createElement("p");
        const header = document.createElement("h2");
        const body = document.createElement("p");

        container.classList.add(
            "flex",
            "flex-col",
            "gap-2",
            "max-w-[1200px]",
            "mx-auto"
        );
        identifier.classList.add("text-small", "font-light", "text-text-primary");
        header.classList.add("text-h2", "font-semibold", "text-text-primary", "max-md:text-h4");
        body.classList.add("text-body", "tracking-[0.03em]", "text-text-primary", "max-md:text-small");

        identifier.textContent = "services";
        header.textContent = "Our Services";
        body.textContent = "We provide wastewater treatment solutions in the Municipal, Industrial and Federal markets. For over 40 years REC has focused on the design of new, upgraded or expanded wastewater treatment systems for direct discharge, groundwater recharge, spray irrigation/land application, reuse and pretreatment systems that discharge to POTWs.";

        container.append(identifier, header, body);

        return container;
    },

    createCards(cards) {
        const container = document.createElement("div");

        container.classList.add(
            "grid",
            "grid-cols-3",
            "max-w-[1200px]",
            "mx-auto",
            "gap-4",
            "my-8",
            "items-stretch",
            "max-lg:grid-cols-2",
            "max-md:grid-cols-1"
        );

        cards.map((card) => {
            const cardContainer = document.createElement("div");
            const img = document.createElement("img");
            const heading = document.createElement("h6");
            const body = document.createElement("p");
            const itemsContainer = document.createElement("ul");

            cardContainer.classList.add(
                "bg-white",
                "flex",
                "flex-col",
                "items-center",
                "rounded-lg",
                "px-10",
                "py-8",
                "gap-2",
                "shadow-md/20",
                "w-full",
                "h-full",
                "max-w-[380px]",
                "max-md:px-6"
            );

            img.src = card.icon;
            img.classList.add(
                "w-[50px]",
                "h-[50px]",
                "shrink-0"
            );

            heading.textContent = card.title;
            heading.classList.add(
                "text-h6",
                "font-semibold",
                "text-text-primary",
                "max-md:text-body"
            );

            body.textContent = card.description;
            body.classList.add(
                "text-body",
                "text-text-primary",
                "text-center",
                "tracking-[0.03em]",
                "max-md:text-small"
            );

            itemsContainer.classList.add(
                "flex",
                "flex-col",
                "gap-2",
                "w-full",
                "mt-4"
            );

            card.items.map((item) => {
                const listItem = document.createElement("li");
                const check = document.createElement("span");
                const text = document.createElement("span");

                check.textContent = "✓";
                check.classList.add(
                    "text-green-600",
                    "font-bold",
                    "mr-2",
                    "shrink-0"
                );

                text.textContent = item;
                text.classList.add(
                    "text-body",
                    "text-text-primary",
                    "tracking-[0.03em]",
                    "max-md:text-small"
                );

                listItem.classList.add(
                    "flex",
                    "items-start"
                );

                listItem.append(check, text);
                itemsContainer.append(listItem);
            });

            cardContainer.append(
                img,
                heading,
                body,
                itemsContainer
            );

            if (card.optional) {
                const optional = document.createElement("p");

                optional.classList.add(
                    "text-body",
                    "text-text-primary",
                    "text-center",
                    "mt-4",
                    "max-md:text-small"
                );

                optional.textContent = card.optional;

                cardContainer.append(optional);
            }

            container.append(cardContainer);
        });

        return container;
    },

}

export default ServicesPage;
