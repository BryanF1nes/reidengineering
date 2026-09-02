class Services {
    init(body) {
        body.appendChild(this.structure());
    }

    structure() {
        const section = document.createElement("section");
        section.append(this.content());

        return section;
    }

    content() {
        const container = document.createElement("div");
        const crumb = document.createElement("p");
        const header = document.createElement("h2");
        const paragraph = document.createElement("p");

        crumb.textContent = "services";
        header.textContent = "Our Services";
        paragraph.textContent = "We provide wastewater treatment solutions in the Municipal, Industrial and Federal markets. For over 40 years REC has focused on the design of new, upgraded or expanded wastewater treatment systesm for direct discharge, groundwater recharge, spray irrigation/land application, reuse and pretreatment systems that discharge to POTWs.";

        container.append(crumb, header, paragraph);

        container.classList.add("container", "align-start", "justify-center", "column", "s-2");
        crumb.classList.add("light")

        return container;
    }
}

export default new Services();
