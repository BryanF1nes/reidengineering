import Footer from "../footer/Footer";

const Contact = {
    div: document.createElement("div"),

    render(container) {
        container.append(
            Footer.render(this.div)
        );
    },
};

export default Contact;
