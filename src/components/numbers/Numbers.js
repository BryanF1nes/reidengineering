const Numbers = {
    numbers: [
        {
            label: "States",
            value: 40,
            suffix: "+"
        },
        {
            label: "Satisfaction",
            value: 99,
            suffix: "%"
        },
        {
            label: "Projects",
            value: 400,
            suffix: "+"
        },
    ],

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
            this.createTagLine(),
            this.createNumbers(this.numbers),
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
            "w-full",
            "max-w-[1200px]",
            "mx-auto"
        );

        identifier.classList.add("text-small", "font-light", "text-text-primary");
        header.classList.add("text-h2", "font-semibold", "text-text-primary", "max-md:text-h4");
        body.classList.add("text-body", "tracking-[0.03em]", "text-text-primary", "max-md:text-small");

        identifier.textContent = "numbers";
        header.textContent = "The Numbers That Matter";
        body.textContent = "We want to stay humble but we do have some numbers we feel are worth sharing!";

        container.append(identifier, header, body);

        return container;
    },
    createNumbers(numbers) {
        const container = document.createElement("div");

        container.classList.add(
            "grid",
            "grid-cols-1",
            "sm:grid-cols-3",
            "w-full",
            "max-w-7xl",
            "mx-auto",
            "gap-8"
        );

        numbers.forEach(({ label, value, suffix }) => {
            const numberContainer = document.createElement("div");
            const valueElement = document.createElement("h3");
            const labelElement = document.createElement("p");

            valueElement.textContent = `${value}${suffix}`;
            labelElement.textContent = label;

            numberContainer.classList.add(
                "flex",
                "flex-col",
                "items-center",
                "text-center",
                "gap-1"
            );

            valueElement.classList.add(
                "text-h1",
                "font-semibold",
                "text-text-primary"
            );

            labelElement.classList.add(
                "text-body",
                "font-light",
                "text-text-primary"
            );

            numberContainer.append(
                labelElement,
                valueElement
            );

            container.appendChild(numberContainer);
        });

        return container;
    }
};

export default Numbers;
