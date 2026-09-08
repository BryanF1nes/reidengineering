import ReidLogo from "../../../assets/main/rec_logo.png";

const Footer = {
    render(container) {
        const footer = document.createElement("footer");

        footer.classList.add(
            "flex",
            "flex-col",
            "bg-primary-800",
            "text-white",
            "p-6",
            "sm:p-12",
            "lg:p-[96px]",
            "gap-10",
            "lg:gap-[42px]",
        );

        const panels = document.createElement("div");

        panels.classList.add(
            "flex",
            "flex-col",
            "md:flex-row",
            "md:justify-between",
            "mx-auto",
            "w-full",
            "max-w-[1200px]",
            "gap-12",
            "md:gap-16"
        );

        panels.append(
            this.createLeftPanel(),
            this.createRightPanel()
        );

        footer.append(
            panels,
            this.createCopy()
        );

        container.appendChild(footer);

        return footer;
    },

    createLeftPanel() {
        const logo = document.createElement("img");
        const companyName = document.createElement("h6");
        const subName = document.createElement("p");
        const info = document.createElement("p");

        const div = document.createElement("div");
        const companyDiv = document.createElement("div");
        const container = document.createElement("div");

        logo.src = ReidLogo;
        logo.alt = "Reid Engineering Company logo";

        logo.classList.add(
            "w-[72px]",
            "h-[72px]",
            "shrink-0"
        );

        companyName.classList.add(
            "text-h6",
            "font-semibold"
        );

        subName.classList.add(
            "text-body",
            "font-light"
        );

        companyName.textContent = "Reid Engineering Company";
        subName.textContent = "The Earth is the Lord's...";

        info.textContent =
            "Reid Engineering Co. (REC) is a leading Environmental " +
            "and Civil Engineering Firm providing cost effective and " +
            "compliant engineering solutions in over forty states " +
            "for the past 45 years to the Municipal, Industrial, and " +
            "Federal markets in the core areas of Water, Wastewater, " +
            "Renewable Energy and Beneficial Reuse.";

        div.append(
            companyName,
            subName
        );

        companyDiv.append(
            logo,
            div
        );

        companyDiv.classList.add(
            "flex",
            "items-center",
            "gap-4"
        );

        info.classList.add(
            "w-full",
            "max-w-[480px]"
        );

        container.append(
            companyDiv,
            info
        );

        container.classList.add(
            "flex",
            "flex-col",
            "gap-8",
            "w-full",
            "md:max-w-[480px]",
            "md:pr-8",
            "lg:pr-16",
            "md:border-r",
            "md:border-white/30"
        );

        return container;
    },

    createRightPanel() {
        const container = document.createElement("div");

        const company = this.createCompanyLinks();
        const contacts = this.createContacts();

        container.append(
            company,
            contacts
        );

        container.classList.add(
            "grid",
            "grid-cols-2",
            "gap-8",
            "sm:gap-12",
            "lg:gap-[72px]",
            "w-full",
            "md:w-auto",
            "max-lg:grid-cols-1"
        );

        return container;
    },

    createCompanyLinks() {
        const container = document.createElement("div");
        const title = document.createElement("h6");
        const nav = document.createElement("nav");

        title.textContent = "Company";

        title.classList.add(
            "text-h6",
            "font-semibold",
            "border-b",
            "border-white",
            "w-fit",
            "pb-1",
            "mb-5"
        );

        const links = [
            {
                label: "Home",
                href: "/"
            },
            {
                label: "About Us",
                href: "/about"
            },
            {
                label: "Services",
                href: "/services"
            },
            {
                label: "Contact Us",
                href: "/contact"
            }
        ];

        links.forEach(({ label, href }) => {
            const link = document.createElement("a");

            link.textContent = label;
            link.href = href;

            link.classList.add(
                "text-body",
                "block",
                "hover:text-primary-300",
                "transition-colors"
            );

            nav.appendChild(link);
        });

        nav.classList.add(
            "flex",
            "flex-col",
            "gap-5"
        );

        container.append(
            title,
            nav
        );

        return container;
    },

    createContacts() {
        const container = document.createElement("div");
        const title = document.createElement("h6");
        const details = document.createElement("div");

        title.textContent = "Contacts";

        title.classList.add(
            "text-h6",
            "font-semibold",
            "border-b",
            "border-white",
            "w-fit",
            "pb-1",
            "mb-5"
        );

        const email = document.createElement("p");
        const phone = document.createElement("p");
        const address = document.createElement("p");

        email.textContent =
            "Email:\ncontact@reidengineering.com";

        phone.textContent =
            "Phone:\n(540) 371-8500";

        address.textContent =
            "Address:\n1210 Princess Anne Street\n" +
            "Fredericksburg Virginia, 22401";

        [email, phone, address].forEach((element) => {
            element.classList.add(
                "text-body",
            );
        });

        details.append(
            email,
            phone,
            address
        );

        details.classList.add(
            "flex",
            "flex-col",
            "gap-5"
        );

        container.append(
            title,
            details
        );

        return container;
    },

    createCopy() {
        const copy = document.createElement("p");

        copy.textContent =
            "© Copyright Reid Engineering Co. Inc.";

        copy.classList.add(
            "text-body",
            "font-light",
            "text-center"
        );

        return copy;
    }
};

export default Footer;
