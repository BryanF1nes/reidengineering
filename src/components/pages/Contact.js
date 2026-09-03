const Contact = {
    render(container) {
        const section = document.createElement("section");

        section.classList.add(
            "w-[1200px]",
            "mx-auto",
            "py-16"
        );

        const heading = document.createElement("h1");

        heading.textContent = "Contact Us";

        heading.classList.add(
            "text-4xl",
            "font-semibold",
            "text-text-primary",
            "mb-4"
        );

        const description = document.createElement("p");

        description.textContent =
            "Have a project in mind? Get in touch with our engineering team to discuss how we can help.";

        description.classList.add(
            "font-light",
            "text-text-primary",
            "max-w-2xl",
            "mb-10"
        );

        const form = document.createElement("form");

        form.classList.add(
            "flex",
            "flex-col",
            "gap-6",
            "max-w-2xl"
        );

        const name = this.createInput(
            "Name",
            "name",
            "text"
        );

        const email = this.createInput(
            "Email",
            "email",
            "email"
        );

        const messageLabel = document.createElement("label");

        messageLabel.textContent = "Message";
        messageLabel.classList.add(
            "font-medium",
            "text-text-primary"
        );

        const message = document.createElement("textarea");

        message.name = "message";
        message.rows = 6;

        message.classList.add(
            "border",
            "rounded-md",
            "p-3",
            "resize-none"
        );

        const submit = document.createElement("button");

        submit.type = "submit";
        submit.textContent = "Send Message";

        submit.classList.add(
            "self-start",
            "font-semibold",
            "bg-primary-500",
            "text-white",
            "px-6",
            "py-3",
            "rounded-md"
        );

        form.append(
            name,
            email,
            messageLabel,
            message,
            submit
        );

        section.append(
            heading,
            description,
            form
        );

        container.appendChild(section);
    },

    createInput(labelText, name, type) {
        const container = document.createElement("div");

        container.classList.add(
            "flex",
            "flex-col",
            "gap-2"
        );

        const label = document.createElement("label");

        label.textContent = labelText;
        label.htmlFor = name;

        label.classList.add(
            "font-medium",
            "text-text-primary"
        );

        const input = document.createElement("input");

        input.id = name;
        input.name = name;
        input.type = type;

        input.classList.add(
            "border",
            "rounded-md",
            "px-3",
            "py-2"
        );

        container.append(label, input);

        return container;
    },
};

export default Contact;
