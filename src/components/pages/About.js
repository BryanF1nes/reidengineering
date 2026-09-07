import Footer from "../footer/Footer";

const About = {
    div: document.createElement("div"),

    render(container) {
        container.append(
            Footer.render(this.div)
        );
    },
};

export default About;
