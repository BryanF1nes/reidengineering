import Banner from "../banner/Banner";
import Footer from "../footer/Footer";

const leadership = {
    john: {
        title: "John H. Reid, P.E",
        body: "John H. Reid, P.E. is the Founder and President of Reid Engineering Co."
    },
    shane: {
        title: "Shane Reid, P.E",
        body: "Shane Reid, P.E. is the Vice President of Reid Engineering Co."
    },
    wade: {
        title: "Wade H. Tanner, P.E",
        body: "Wade H. Tanner, P.E. is the direcor of Reid Engineering Co."
    },
    adam: {
        title: "Adam E. Zimmerman, P.E",
        body: "Adam E. Zimmerman, P.E. is the Senior Project Manager of Reid Engineering Co."
    },
}


const John = {
    div: document.createElement("div"),

    render(container) {
        container.append(
            Banner.render(this.div, leadership.john.title, leadership.john.body),
            Footer.render(this.div)
        );
    },
};

const Shane = {
    div: document.createElement("div"),

    render(container) {
        container.append(
            Banner.render(this.div, leadership.shane.title, leadership.shane.body),
            Footer.render(this.div)
        );
    },
};

const Wade = {
    div: document.createElement("div"),

    render(container) {
        container.append(
            Banner.render(this.div, leadership.wade.title, leadership.wade.body),
            Footer.render(this.div)
        );
    },
};

const Adam = {
    div: document.createElement("div"),

    render(container) {
        container.append(
            Banner.render(this.div, leadership.adam.title, leadership.adam.body),
            Footer.render(this.div)
        );
    },
};

export { John, Shane, Wade, Adam };
