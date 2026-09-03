import Hero from "../hero/Hero";
import Services from "../services/Services";

const Home = {
    render(container) {
        container.append(
            Hero.render(document.createElement("div")),
            Services.render(document.createElement("div")),
        );
    },
};

export default Home;
