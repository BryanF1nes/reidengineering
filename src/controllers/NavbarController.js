import Navbar from "../components/navbar/Navbar";

const NavbarController = {
    items: [
        { label: "About Us", route: "/about" },
        { label: "Services", route: "/services" },
        { label: "Contact Us", route: "/contact", primary: true },
    ],

    init() {
        const container = document.querySelector("#navbar");

        if (!container) {
            throw new Error("Navbar container not found.");
        }

        Navbar.render(container, this.items);
    },
};

export default NavbarController;
