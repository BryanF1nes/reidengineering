import John from "../../../assets/main/team/john.jpg";
import Shane from "../../../assets/main/team/shane.jpg";
import Wade from "../../../assets/main/team/wade.jpg";
import Adam from "../../../assets/main/team/adam.jpg";

const Leadership = {
    cards: [
        {
            img: John,
            name: "John H. Reid, P.E",
            title: "President",
            bio: "Mr. John Reid, P.E. is the Founder and President of Reid Engineering Co. with over 45 years of wastewater engineering experience.",
            button: true,
            route: '/'
        },
        {
            img: Shane,
            name: "Shane Reid, P.E",
            title: "Vice President",
            bio: "Mr. Shane Reid, P.E. is the Vice President of Operations and is responsible for the day to day business operations and leadership of the firm.",
            button: true,
            route: '/'
        },
        {
            img: Wade,
            name: "Wade H. Tanner, P.E",
            title: "Engineering Director",
            bio: "Mr. Tanner, P.E. is the Director of Engineering and provides leadership and oversight on all projects at the firm with over 20 years of experience.",
            button: true,
            route: '/'
        },
        {
            img: Adam,
            name: "Adam E. Zimmerman, P.E",
            title: "Senior Project Manager",
            bio: "Mr. Zimmerman, P.E. is a Sr. Project Manager on many of the firms most challenging and complicated projects. Adam has over 12 years of experience.",
            button: true,
            route: '/'
        },
    ],

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
            this.createCards(this.cards),
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

        identifier.textContent = "leadership";
        header.textContent = "Our Leadership";
        body.textContent = "REC has a core leadership team that is focused on strategic innovation in engineering design and project delivery. The priority of the  leadership team is to lead and drive REC to operate as a high-performance firm that is always responsive to clients needs, committed to excellence in every deliverable and goes the extra mile for every client every time.";

        container.append(identifier, header, body);

        return container;
    },

    createCards(cards) {
        const container = document.createElement("div");
        container.classList.add(
            "grid",
            "grid-cols-2",
            "auto-rows-[230px]",
            "max-w-[1200px]",
            "mx-auto",
            "gap-8",
            "my-0",
            "max-xl:grid-cols-1"
        );

        cards.map((card) => {
            const cardContainer = document.createElement("div");
            const div = document.createElement("div");
            const img = document.createElement("img");
            const heading = document.createElement("h6");
            const title = document.createElement("p");
            const body = document.createElement("p");
            const a = document.createElement("a");

            cardContainer.classList.add(
                "bg-white",
                "flex",
                "items-center",
                "gap-6",
                "rounded-2xl",
                "shadow-md",
                "px-8",
                "min-w-0",
                "h-full"
            );

            div.classList.add(
                "flex",
                "min-w-0",
                "flex-1",
                "flex-col",
                "gap-1",
                "p-2"
            );

            img.src = card.img;
            img.classList.add(
                "w-[120px]",
                "h-[120px]",
                "shrink-0",
                "rounded-full",
                "shadow-md/40"
            );

            heading.textContent = card.name;
            heading.classList.add(
                "text-h6",
                "font-semibold",
                "text-text-primary"
            );

            title.textContent = card.title;
            title.classList.add(
                "font-small",
                "font-light",
                "text-text-primary"
            );

            body.textContent = card.bio;
            body.classList.add(
                "text-text-primary",
                "text-body",
                "leading-relaxed",
                "mb-2"
            );

            if (card.button) {
                a.textContent = "Read More...";
                a.href = card.route;
                a.dataset.route = card.route;

                a.classList.add(
                    "mt-auto",
                    "text-small",
                    "text-primary-300",
                    "text-right"
                );
            }

            div.append(heading, title, body, a);
            cardContainer.append(img, div);
            container.append(cardContainer);
        });

        return container;
    },
};

export default Leadership;
