import Hero from "../hero/Hero";
import Leadership from "../leadership/Leadership";
import Services from "../services/Services";

const Home = {
    div: document.createElement("div"),

    render(container) {
        container.append(
            Hero.render(this.div),
            Services.render(this.div),
            Leadership.render(this.div)
        );
    },
};

export default Home;
