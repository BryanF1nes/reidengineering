import Hero from "../hero/Hero";
import Leadership from "../leadership/Leadership";
import Services from "../services/Services";
import Numbers from "../numbers/Numbers";
import Projects from "../projects/Projects";
import { CallToAction } from "../cta/CallToAction";
import Map from "../map/Map";
import Footer from "../footer/Footer";

const Home = {
    div: document.createElement("div"),

    render(container) {
        container.append(
            Hero.render(this.div),
            Services.render(this.div),
            Leadership.render(this.div),
            Numbers.render(this.div),
            Projects.render(this.div),
            CallToAction.render(this.div),
            Map.render(this.div),
            Footer.render(this.div)
        );
    },
};

export default Home;
