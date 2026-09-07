import Footer from "../footer/Footer";

const Services = {
    div: document.createElement("div"),

    render(container) {
        container.append(
            Footer.render(this.div)
        );
    },
};

export default Services;
