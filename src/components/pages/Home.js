import Hero from "../hero/Hero";

const Home = {
    render(container) {
        container.appendChild(
            Hero.render(document.createElement("div"))
        );
    },
};

export default Home;
