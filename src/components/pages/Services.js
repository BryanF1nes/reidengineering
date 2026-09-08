import Footer from "../footer/Footer";
import Banner from "../banner/Banner";
import { CallToActionV2 } from "../cta/CallToAction";
import ServicesPage from "../services/ServicesPage";

const Services = {
    div: document.createElement("div"),

    services: {
        title: "Our Services",
        info: "Our goal is to provide you with cost effective and compliant engineering solutions. Rest assured. We have you covered!"
    },

    render(container) {
        container.append(
            Banner.render(this.div, this.services.title, this.services.info),
            ServicesPage.render(this.div),
            CallToActionV2.render(this.div),
            Footer.render(this.div)
        );
    },
};

export default Services;
