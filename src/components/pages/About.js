import CallToAction from "../cta/CallToAction";
import Footer from "../footer/Footer";

const About = {
    div: document.createElement("div"),

    render(container) {
        container.append(
            CallToAction.render(this.div),
            Footer.render(this.div)
        );
    },
};

export default About;
