const Home = {
    render(container) {
        const heading = document.createElement("h1");

        heading.textContent = "Welcome to Reid Engineering";

        heading.classList.add(
            "text-4xl",
            "font-semibold"
        );

        container.appendChild(heading);
    },
};

export default Home;
