import Caroline from "../../../assets/main/projects/caroline_000_6742.jpg";

const Mission = {
    render(container) {
        const section = document.createElement("section");

        section.classList.add(
            "bg-card",
            "flex",
            "flex-col",
            "justify-between",
            "bg-card",
            "p-[96px]",
            "gap-[42px]",
            "text-white",
            "max-md:p-[24px]"
        );

        section.append(
            this.createContent()
        );

        container.appendChild(section);

        return section;
    },

    createContent() {
        const container = document.createElement("div");

        container.classList.add(
            "text-text-primary",
            "flex",
            "flex-col",
            "gap-16",
            "w-full",
            "max-w-[1200px]",
            "mx-auto"
        );

        container.append(this.createProject());

        return container;
    },

    createProject() {
        const article = document.createElement("article");

        const imageContainer = document.createElement("div");
        const image = document.createElement("img");

        const content = document.createElement("div");
        const title = document.createElement("h3");
        const description = document.createElement("p");

        image.src = Caroline;
        image.alt = "Caroline County, Virginia";

        image.classList.add(
            "w-full",
            "h-full",
            "object-cover",
        );

        imageContainer.classList.add(
            "w-full",
            "h-[400px]",
            "overflow-hidden",
            "rounded-lg"
        );

        imageContainer.appendChild(image);

        title.textContent = "Our Mission";
        description.textContent = "We have built our core business around serving clients across the nation and around the world from one central strategic office located in close proximity to four airports just outside of Washington D.C. allowing our staff to be responsive to our client’s needs at a moments notice. Our engineering staff are licensed in over forty states which allows clients to rely on our expertise to guide them through the entire project life-cycle regardless of project location. This strategic business model allows us to stay laser focused on our core services and markets while eliminating the headache, bureaucracy and high overhead costs of operating multiple offices ultimately adding tremendous value to our clients. You can count us. We have your back!";

        content.classList.add("max-w-1/2");

        title.classList.add(
            "text-h3",
            "font-semibold"
        );

        description.classList.add(
            "text-body",
            "text-text-primary",
        );

        content.append(
            title,
            description,
        );

        article.classList.add(
            "flex",
            "gap-8",
            "lg:gap-16",
            "items-center",
            "py-[32px]"
        );

        article.append(
            content,
            imageContainer
        );

        return article;
    },

};

export default Mission;
