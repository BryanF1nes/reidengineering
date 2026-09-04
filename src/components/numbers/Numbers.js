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
            "bg-linear-to-bl",
            "from-primary-500",
            "to-primary-700",
            "flex",
            "flex-col",
            "justify-between",
            "bg-card",
            "p-[96px]",
            "gap-[42px]",
            "text-white"
        );

        section.append(
            this.createTagLine(),
            this.createNumbers(this.numbers),
        );

        container.appendChild(section);

        const observer = new IntersectionObserver(
            (entries, observer) => {
                const entry = entries[0];

                if (entry.isIntersecting) {
                    this.animateNumbers(section);

                    // Only animate once
                    observer.unobserve(section);
                }
            },
            {
                threshold: 0.3
            }
        );

        observer.observe(section);

        return section;
    },

    animateNumbers(section) {
        const values = section.querySelectorAll("[data-value]");

        values.forEach((element, index) => {
            const { value: target, suffix } = this.numbers[index];

            const duration = 2500;
            const startTime = performance.now();

            const update = (currentTime) => {
                const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1
                );

                // Ease-out animation
                const easedProgress = 1 - Math.pow(1 - progress, 3);

                const currentValue = Math.floor(
                    target * easedProgress
                );

                element.textContent = `${currentValue}${suffix}`;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    // Make sure we end exactly on the target
                    element.textContent = `${target}${suffix}`;
                }
            };

            requestAnimationFrame(update);
        });
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
            "mx-auto",
        );

        identifier.classList.add(
            "text-small",
            "font-light"
        );

        header.classList.add(
            "text-h2",
            "font-semibold",
            "max-md:text-h4"
        );

        body.classList.add(
            "text-body",
            "tracking-[0.03em]",
            "max-md:text-small"
        );

        identifier.textContent = "numbers";
        header.textContent = "The Numbers That Matter";
        body.textContent =
            "We want to stay humble but we do have some numbers we feel are worth sharing!";

        container.append(
            identifier,
            header,
            body
        );

        return container;
    },

    createNumbers(numbers) {
        const container = document.createElement("div");

        container.classList.add(
            "grid",
            "grid-cols-1",
            "sm:grid-cols-3",
            "w-full",
            "max-w-4xl",
            "mx-auto",
            "gap-8"
        );

        numbers.forEach(({ label, value, suffix }) => {
            const numberContainer = document.createElement("div");
            const valueElement = document.createElement("h3");
            const labelElement = document.createElement("p");

            // Start the counter at zero
            valueElement.textContent = `0${suffix}`;

            // Store the target value
            valueElement.dataset.value = value;

            labelElement.textContent = label;

            numberContainer.classList.add(
                "flex",
                "flex-col",
                "items-center",
                "text-center",
                "gap-1"
            );

            valueElement.classList.add(
                "text-[76px]",
                "font-[1000]",
            );

            labelElement.classList.add(
                "text-body",
                "font-light",
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
