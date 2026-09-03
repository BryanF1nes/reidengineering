import Card from "../card/Card";

const Services = {
    cards: [
        {
            icon: '',
            title: 'General services',
            body: 'While wastewater treatment is our core niche and focus other business areas such as land development, water and sewer pumping are just some of our services supported by our firm.',
            button: true,
            route: '/services'
        },
        {
            icon: '',
            title: 'Wastewater Treatment',
            body: 'We will guide you through the regulatory process and assist you in determining the most feasible design and project approach that will meet all stakeholders expectations and requirements.',
            button: true,
            route: '/services'
        },
        {
            icon: '',
            title: 'Design Build',
            body: 'Design build has offered many clients the opportunity to stream line the overall project lifecycle saving valuable time due to the compressed design and construction schedules.',
            button: true,
            route: '/services'
        }
    ],

    render(container) {
        const section = document.createElement("section");

        section.classList.add(
            "flex",
            "flex-col",
            "justify-between",
            "bg-bg",
            "p-[96px]"
        );

        section.append(
            this.createTagLine(),
            this.createCards(this.cards),
            this.createButton()
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
        header.classList.add("text-h2", "font-semibold", "text-text-primary");
        body.classList.add("text-body", "tracking-[0.03em]", "text-text-primary");

        identifier.textContent = "services";
        header.textContent = "Our Services";
        body.textContent = "We provide wastewater treatment solutions in the Municipal, Industrial and Federal markets. For over 40 years REC has focused on the design of new, upgraded or expanded wastewater treatment systems for direct discharge, groundwater recharge, spray irrigation/land application, reuse and pretreatment systems that discharge to POTWs.";

        container.append(identifier, header, body);

        return container;
    },

    createCards(cards) {
    },

    createButton() {
        const container = document.createElement("div");
        const cta = document.createElement("a");

        container.classList.add(
            "flex",
            "flex-col",
            "gap-2",
            "max-w-[1200px]",
            "mx-auto"
        );

        cta.href = "/contact";
        cta.dataset.route = "/contact";
        cta.textContent = "Schedule A Consultation";

        cta.classList.add(
            "font-semibold",
            "bg-primary-600",
            "text-white",
            "px-8",
            "py-4",
            "rounded-md",
            "shadow-lg",
            "shadow-primary-500/50",
            "hover:bg-primary-600",
            "hover:text-white",
        );

        container.append(cta);

        return container;
    }
};

export default Services;
