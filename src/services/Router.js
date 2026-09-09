import PageController from "../controllers/PageController";

const Router = {
    routes: {
        "/": "home",
        "/about": "about",
        "/services": "services",
        "/contact": "contact",
    },

    init() {
        document.addEventListener("click", (event) => {
            const link = event.target.closest("[data-route]");

            if (!link) {
                return;
            }

            event.preventDefault();

            this.navigate(link.dataset.route);
        });

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
        if (path.startsWith("/leadership/")) {
            const slug = path.split("/")[2];
            console.log(slug);

            PageController.render("leadership", slug);
        } else if (path.startsWith("/projects/")) {
            const slug = path.split("/")[2];
            console.log(slug);

            PageController.render("projects", slug);
        } else {
            const page = this.routes[path] ?? "notFound";

            PageController.render(page);
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },
};

export default Router;
