import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import Form from "../form/Form";

const Contact = {
    div: document.createElement("div"),

    contact: {
        title: "Contact Us",
        info: "Have a project in mind or need engineering support? Contact our team to discuss your goals and learn how we can deliver practical, reliable solutions tailored to your needs."
    },

    render(container) {
        container.append(
            Banner.render(this.div, this.contact.title, this.contact.info),
            Form.render(this.div),
            Footer.render(this.div)
        );
    },
};

export default Contact;
