import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import projects from "../../data/projects";

const Map = {
    defaultCenter: {
        lat: 39.8283,
        lng: -98.5795
    },

    defaultZoom: 4,

    defaultMapTypeId: "roadmap",

    render(container) {
        const section = document.createElement("section");

        section.classList.add(
            "bg-card",
            "max-w-[1200px]",
            "py-[96px]",
            "text-white",
            "mx-auto",
            "max-md:p-[24px]"
        );

        const content = document.createElement("div");

        content.classList.add(
            "flex",
            "gap-6",
            "h-[600px]",
            "max-lg:flex-col"
        );

        const mapContainer = this.createMap();
        const projectList = this.createProjectList();
        const resetButton = this.createResetButton();

        content.append(
            mapContainer,
            projectList
        );

        section.append(this.createTagLine(), content, resetButton);
        container.appendChild(section);

        this.initializeMap(
            mapContainer,
            projectList
        );

        return section;
    },

    createTagLine() {
        const container = document.createElement("div");
        const identifier = document.createElement("p");
        const header = document.createElement("h2");
        const body = document.createElement("p");

        container.classList.add(
            "flex",
            "flex-col",
            "gap-2",
            "max-w-[1200px]",
            "mx-auto",
            "mb-[48px]"
        );
        identifier.classList.add("text-small", "font-light", "text-text-primary");
        header.classList.add("text-h2", "font-semibold", "text-text-primary", "max-md:text-h4");
        body.classList.add("text-body", "tracking-[0.03em]", "text-text-primary", "max-md:text-small");

        identifier.textContent = "projects";
        header.textContent = "Our Projects";
        body.textContent = "We provide wastewater treatment solutions in the Municipal, Industrial and Federal markets. For over 40 years REC has focused on the design of new, upgraded or expanded wastewater treatment systems for direct discharge, groundwater recharge, spray irrigation/land application, reuse and pretreatment systems that discharge to POTWs.";

        container.append(identifier, header, body);

        return container;
    },

    createMap() {
        const map = document.createElement("div");

        map.classList.add(
            "flex-1",
            "min-w-0",
            "h-full"
        );

        return map;
    },

    createProjectList() {
        const container = document.createElement("div");

        container.classList.add(
            "w-[320px]",
            "h-full",
            "overflow-y-auto",
            "flex",
            "flex-col",
            "gap-2",
            "pr-2",
            "max-lg:w-full",
            "max-lg:h-[300px]"
        );

        Object.values(projects).forEach(project => {
            const card = this.createProjectCard(project);

            container.appendChild(card);
        });

        return container;
    },

    createProjectCard(project) {
        const card = document.createElement("div");

        card.classList.add(
            "w-full",
            "shrink-0",
            "p-3",
            "bg-primary-700",
            "hover:bg-primary-600",
            "transition",
            "cursor-pointer"
        );

        const name = document.createElement("h3");

        name.textContent = project.name;

        name.classList.add(
            "font-semibold",
            "text-base"
        );

        const footer = document.createElement("div");

        footer.classList.add(
            "flex",
            "items-center",
            "justify-between",
            "gap-4"
        );

        const location = document.createElement("p");

        location.textContent = project.location;

        location.classList.add(
            "text-sm",
            "font-light",
            "text-light"
        );

        const viewProject = document.createElement("button");

        viewProject.textContent = "See project";

        viewProject.classList.add(
            "shrink-0",
            "font-body",
            "font-light",
            "text-light",
            "hover:underline",
            "cursor-pointer"
        );

        footer.append(
            location,
            viewProject
        );

        card.append(
            name,
            footer
        );

        card.addEventListener("click", () => {
            if (!this.map) return;

            this.selectProject(project);
        });

        viewProject.addEventListener("click", event => {
            event.stopPropagation();

            this.navigateToProject(project);
        });

        return card;
    },

    resetMap() {
        if (!this.map) return;

        this.map.panTo(this.defaultCenter);
        this.map.setZoom(this.defaultZoom);
        this.map.setMapTypeId(this.defaultMapTypeId);
    },

    async initializeMap(mapContainer) {
        setOptions({
            key: process.env.GOOGLE_MAPS_API_KEY,
            v: "weekly",
        });

        const { Map: GoogleMap } = await importLibrary("maps");
        const { AdvancedMarkerElement } = await importLibrary("marker");

        this.map = new GoogleMap(mapContainer, {
            center: this.defaultCenter,
            zoom: this.defaultZoom,
            mapId: "DEMO_MAP_ID",
            mapTypeId: this.defaultMapTypeId,
        });

        this.createMarkers(
            this.map,
            AdvancedMarkerElement
        );
    },

    createResetButton() {
        const button = document.createElement("button");

        button.textContent = "Reset map";

        button.classList.add(
            "self-start",
            "font-body",
            "font-light",
            "text-text-primary",
            "hover:underline",
            "cursor-pointer"
        );

        button.addEventListener("click", () => {
            this.resetMap();
        });

        return button;
    },

    createMarkers(map, AdvancedMarkerElement) {
        Object.values(projects).forEach(project => {
            const marker = new AdvancedMarkerElement({
                map,
                position: project.coordinates,
                title: project.name,
            });

            marker.addListener("click", () => {
                this.selectProject(project);
            });
        });
    },

    selectProject(project) {
        this.map.panTo(project.coordinates);
        this.map.setZoom(17);
        this.map.setMapTypeId("satellite");
    },

    navigateToProject(project) {
        window.history.pushState(
            {},
            "",
            `/projects/${project.route}`
        );

        window.dispatchEvent(
            new PopStateEvent("popstate")
        );
    },
};

export default Map;
