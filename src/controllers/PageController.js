import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Services from "../components/pages/Services";
import Contact from "../components/pages/Contact";
import NotFound from "../components/pages/NotFound";
import LeaderShip from "../components/pages/Leadership";
import Projects from "../components/pages/Projects";

const PageController = {
    pages: {
        home: Home,
        about: About,
        services: Services,
        contact: Contact,
        notFound: NotFound,
        leadership: LeaderShip,
        projects: Projects

    },

    render(page, slug = null) {
        const container = document.querySelector("#content");

        if (!container) {
            throw new Error("Content container not found.");
        }

        container.replaceChildren();

        const component = this.pages[page];

        if (!component) {
            throw new Error(`Page "${page}" not found.`);
        }

        component.render(container, slug);
    },
};

export default PageController;
