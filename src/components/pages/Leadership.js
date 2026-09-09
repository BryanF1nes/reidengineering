import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import Team from "../team/Team";
import team from "../../data/team";

const LeaderShip = {
    render(container, slug) {
        const member = team[slug];

        if (!member) {
            console.error(`Team member "${slug}" not found.`);
            return;
        }

        const div = document.createElement("div");

        container.append(
            Banner.render(
                div,
                member.name,
                `${member.name} is the ${member.position} of Reid Engineering Co.`
            ),
            Team.render(div, member),
            Footer.render(div),
        );
    }
};

export default LeaderShip;
