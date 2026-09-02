import Hero from "../components/Hero/hero";
import Navbar from "../components/Navbar/nav";

class Main {
    init() {
        const body = document.querySelector("body");
        Navbar.init(body);
        Hero.init(body);
    }
}

export default new Main();
