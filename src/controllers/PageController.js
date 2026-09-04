import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Services from "../components/pages/Services";
import Contact from "../components/pages/Contact";
import NotFound from "../components/pages/NotFound";

const PageController = {
    pages: {
        home: Home,
        about: About,
        services: Services,
        contact: Contact,
        notFound: NotFound
    },

    render(page) {
        const container = document.querySelector("#content");

        if (!container) {
            throw new Error("Content container not found.");
        }

        container.replaceChildren();

        const component = this.pages[page];

        if (!component) {
            throw new Error(`Page "${page}" not found.`);
        }

        component.render(container);
    },
};

export default PageController;
