import PageController from "../controllers/PageController";

const Router = {
    routes: {
        "/": "home",
        "/about": "about",
        "/services": "services",
        "/contact": "contact",
        "/careers": "careers",
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
            this.load(this.getRoute());
        });

        this.load(this.getRoute());
    },

    getRoute() {
        let path = window.location.pathname;

        if (BASE_PATH !== "/" && path.startsWith(BASE_PATH)) {
            path = path.slice(BASE_PATH.length - 1);
        }

        return path || "/";
    },

    navigate(path) {
        const url =
            BASE_PATH === "/"
                ? path
                : `${BASE_PATH}${path.replace(/^\//, "")}`;

        window.history.pushState({}, "", url);

        this.load(path);
    },

    load(path) {
        if (path.startsWith("/leadership/")) {
            const slug = path.split("/")[2];

            PageController.render("leadership", slug);
        } else if (path.startsWith("/projects/")) {
            const slug = path.split("/")[2];

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
