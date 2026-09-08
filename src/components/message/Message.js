const Message = {
    render(container) {
        const section = document.createElement("section");

        section.classList.add(
            "bg-bg",
            "flex",
            "flex-col",
            "justify-between",
            "bg-card",
            "p-[96px]",
            "gap-[42px]",
            "text-white",
            "max-md:p-[24px]"
        );

        section.append(
            this.createContent()
        );

        container.appendChild(section);

        return section;
    },

    createContent() {
        const container = document.createElement("div");
        const title = document.createElement("h1");
        const message = document.createElement("p");

        container.classList.add("flex", "flex-col", "items-center", "justify-center", "gap-2", "mx-auto", "max-w-[1200px]", "p-8");
        title.classList.add("text-h1", "font-bold", "text-text-primary", "max-md:text-h3");
        message.classList.add("text-body", "font-regular", "text-text-primary", "text-center", "tracking-[0.03em]");

        title.textContent = "From The President";
        message.textContent = "At Reid Engineering we truly understand and care about the capital investment you make in your water, wastewater, renewable energy or beneficial reuse projects. Furthermore, we are passionate about the cost, compliance, operation, longevity and reliability of your capital projects and are committed to providing the best engineering solutions while maintaining a cost-conscious mindset. We exist to serve and guide each client at every turn from project and financial planning, through preliminary and final design, permitting, bidding, construction administration, design build delivery and start-up and operation.";

        container.append(title, message);

        return container;
    },
};

export default Message;
