import reidLogo from "../../../assets/main/rec_logo.png";

class Navbar {
    init(body) {
        body.append(this.structure());
    }

    structure() {
        const nav = document.createElement("nav");
        nav.append(this.leftNav(), this.rightNav());
        nav.classList.add("flex", "items-center", "w-[1200px]", "justify-between", "py-4");

        return nav;
    }

    leftNav() {
        const logo = document.createElement("img");
        const container = document.createElement("div");
        const headerContainer = document.createElement("div");
        const headerText = document.createElement("p");
        const headerSubText = document.createElement("p");

        logo.src = reidLogo;
        logo.classList.add("w-[60px]", "h-[60px]");

        headerText.textContent = "Reid Engineering Company"
        headerSubText.textContent = "The Earth is the Lord's..."

        headerText.classList.add("font-semibold", "text-text-primary");
        headerSubText.classList.add("font-light", "text-text-primary");

        container.classList.add("flex", "items-center", "gap-2")
        headerContainer.append(headerText, headerSubText);

        container.append(logo, headerContainer);

        return container;
    }

    rightNav() {
        const linkContainer = document.createElement("div");
        const links = ["About Us", "Services", "Contact Us"];

        linkContainer.classList.add("flex", "items-center", "justify-between", "gap-10");

        links.forEach((link) => {
            const a = document.createElement("a");
            a.href = "/";
            a.textContent = link;
            a.classList.add("font-light");

            if (link.startsWith("C")) {
                a.classList.add("font-semibold", "bg-primary-500", "text-white", "px-4", "py-2", "rounded-md");
            }

            linkContainer.appendChild(a);
        });

        return linkContainer;
    }
}

export default new Navbar();
