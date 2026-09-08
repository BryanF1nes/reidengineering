import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Services from "../components/pages/Services";
import Contact from "../components/pages/Contact";
import NotFound from "../components/pages/NotFound";
import { John, Shane, Wade, Adam } from "../components/pages/Leadership";

const PageController = {
    pages: {
        home: Home,
        about: About,
        services: Services,
        contact: Contact,
        notFound: NotFound,
        john: John,
        shane: Shane,
        wade: Wade,
        adam: Adam,
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
