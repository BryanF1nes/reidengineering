const NotFound = {
    render(container) {
        const section = document.createElement("section");

        section.classList.add(
            "flex",
            "flex-col",
            "items-center",
            "justify-center",
            "min-h-[60vh]",
            "text-center"
        );

        const title = document.createElement("h1");
        title.textContent = "404";

        title.classList.add(
            "text-6xl",
            "font-bold"
        );

        const message = document.createElement("p");
        message.textContent = "The page you're looking for either no longer exists or never existed.";

        message.classList.add(
            "text-body",
            "font-light",
            "mt-4"
        );

        section.append(
            title,
            message
        );

        container.appendChild(section);
    }
};

export default NotFound;
