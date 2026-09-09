import logo from "../../../assets/main/rec_logo.png";
import Footer from "../footer/Footer";
//import careers from "../../data/careers";

const Careers = {
    render(container, slug) {
        const div = document.createElement("div");

        container.append(
            this.createMessage(
                "We don't appear to have any jobs at this time, we do however appreciate your interest."
            ),
            Footer.render(div),
        );
    },

    createMessage(text) {
        const div = document.createElement("div");
        const notice = document.createElement("h2");
        const message = document.createElement("p");
        const image = document.createElement("img");

        image.src = logo;
        image.classList.add("h-[96px]", "w-[96px]");

        div.classList.add("py-[96px]", "bg-bg", "flex", "flex-col", "items-center", "justify-center", "gap-4");

        notice.classList.add("text-h2", "font-semibold", "text-text-primary", "p-4");
        notice.textContent = "We're sorry.";

        message.classList.add("text-body", "text-text-primary");
        message.textContent = text;

        div.append(image, notice, message);

        return div;
    }
};

export default Careers;
