import Footer from "../footer/Footer";
import Banner from "../banner/Banner";

const Services = {
    div: document.createElement("div"),

    services: {
        title: "Our Services",
        info: "Our goal is to provide you with cost effective and compliant engineering solutions. Rest assured. We have you covered!"
    },

    render(container) {
        container.append(
            Banner.render(this.div, this.services.title, this.services.info),
            Footer.render(this.div)
        );
    },
};

export default Services;
