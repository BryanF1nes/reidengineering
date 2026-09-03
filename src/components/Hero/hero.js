import caroline from "../../../assets/main/projects/caroline_000_6742.jpg";

class Hero {
    init(body) {
        body.append(this.structure());
    }

    structure() {
        const header = document.createElement("header");
        const heroContent = document.createElement("div");

        header.style.backgroundImage = `url('${caroline}')`
        header.classList.add("bg-cover", "bg-center", "h-[950px]", "w-full");
        heroContent.classList.add("");

        heroContent.appendChild(this.content());
        header.append(heroContent, this.curve());

        return header;
    }

    content() {
        const container = document.createElement("div");
        const headline = document.createElement("h1");
        const subHeadline = document.createElement("p");
        const button = document.createElement("button");

        headline.textContent = "Cost Effective & Compliant";
        subHeadline.textContent = "For over 40 years, we have been selected by many clients to be their trusted engineering partner.";
        button.textContent = "Schedule A Consultation";

        container.classList.add("flex", "align-start", "justify-center", "column", "s-2", "max-w-4")
        container.append(headline, subHeadline, button);

        return container;
    }

    curve() {
        const namespace = "http://www.w3.org/2000/svg";

        const svg = document.createElementNS(namespace, "svg");
        const path = document.createElementNS(namespace, "path");

        svg.setAttribute("class", "curve");
        svg.setAttribute("viewBox", "0 0 1440 200");
        svg.setAttribute("preserveAspectRatio", "none");

        path.setAttribute("fill", "#F2F2F2");
        path.setAttribute(
            "d",
            "M0 100 Q720 0 1440 100 L1440 200 L0 200 Z"
        );

        svg.appendChild(path);

        return svg;
    }
}

export default new Hero();
