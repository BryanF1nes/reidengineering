class Card {
    constructor(icon, title, content) {
        this.icon = icon;
        this.title = title;
        this.content = content;
    }

    build() {
        const cardContainer = document.createElement("div");
        const contentContainer = document.createElement("div");
        const icon = document.createElement("img");
        const title = document.createElement("h6");
        const content = document.createElement("p");
        const button = document.createElement("button");

        icon.src = this.icon;
        title.textContent = this.title;
        content.textContent = this.content;
        button.textContent = "Learn More";

        button.classList.add("button-2");

        contentContainer.append(title, content);
        cardContainer.append(icon, contentContainer, button);

        return cardContainer;
    }
}

export default Card;
