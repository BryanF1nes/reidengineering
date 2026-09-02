import Hero from "../components/Hero/hero";
import Navbar from "../components/Navbar/nav";
import Services from "../components/Services/services";

class Main {
    init() {
        const body = document.querySelector("body");
        Navbar.init(body);
        Hero.init(body);
        Services.init(body);
    }
}

export default new Main();
