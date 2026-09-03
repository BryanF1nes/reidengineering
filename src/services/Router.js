import PageController from "../controllers/PageController";

const Router = {
    routes: {
        "/": "home",
        "/about": "about",
        "/services": "services",
        "/contact": "contact",
    },

    init() {
        window.addEventListener("popstate", () => {
            this.load(window.location.pathname);
        });

        this.load(window.location.pathname);
    },

    navigate(path) {
        window.history.pushState({}, "", path);

        this.load(path);
    },

    load(path) {
        const page = this.routes[path] ?? "home";

        PageController.render(page);
    },
};

export default Router;
