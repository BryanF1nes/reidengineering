import Banner from "../banner/Banner";
import CallToAction from "../cta/CallToAction";
import Footer from "../footer/Footer";

const aboutUs = {
    title: "About Reid Engineering",
    body: "We are a leading Environmental and Civil Engineering consulting firm with over forty years of experience and expertise in providing cost effective and compliant engineering solutions across the nation and abroad."
}

const About = {
    div: document.createElement("div"),

    render(container) {
        container.append(
            Banner.render(this.div, aboutUs.title, aboutUs.body),
            CallToAction.render(this.div),
            Footer.render(this.div)
        );
    },
};

export default About;
