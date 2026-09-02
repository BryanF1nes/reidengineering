import reidLogo from "../../../assets/main/rec_logo.png";

class Navbar {
    init(body) {
        body.append(this.structure());
    }

    structure() {
        const nav = document.createElement("nav");
        nav.append(this.leftNav(), this.rightNav());
        nav.classList.add("nav");

        return nav;
    }

    leftNav() {
        const logo = document.createElement("img");
        const container = document.createElement("div");
        const headerContainer = document.createElement("div");
        const headerText = document.createElement("p");
        const headerSubText = document.createElement("p");

        logo.src = reidLogo;
        logo.classList.add("logo");

        headerText.textContent = "Reid Engineering Company"
        headerSubText.textContent = "The Earth is the Lord's..."

        headerText.classList.add("semi");
        headerSubText.classList.add("light");

        container.classList.add("container", "s-3")
        headerContainer.append(headerText, headerSubText);

        container.append(logo, headerContainer);

        return container;
    }

    rightNav() {
        const linkContainer = document.createElement("div");
        const links = ["About Us", "Services", "Contact Us"];

        linkContainer.classList.add("container", "s-6");

        links.forEach((link) => {
            const a = document.createElement("a");
            a.href = "/";
            a.textContent = link;
            a.classList.add("links");

            if (link.startsWith("C")) {
                a.classList.add("button");
            }

            linkContainer.appendChild(a);
        });

        return linkContainer;
    }
}

export default new Navbar();
