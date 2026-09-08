import John from "../../../assets/main/team/john_full-removebg.png";
import Shane from "../../../assets/main/team/shane_full-removebg-preview 1.png";
import logo from "../../../assets/main/rec_logo.png";

const Form = {
    render(container) {
        const section = document.createElement("section");
        const content = document.createElement("div");

        section.classList.add(
            "w-full",
            "py-[96px]",
            "max-md:p-2"
        );

        content.classList.add(
            "max-w-[1200px]",
            "mx-auto",
            "flex",
            "justify-between",
            "gap-[64px]",
            "max-md:flex-col"
        );

        content.append(
            this.createForm(),
            this.createContact()
        );

        section.append(content);
        container.appendChild(section);

        return section;
    },

    createForm() {
        const form = document.createElement("form");

        form.classList.add(
            "flex",
            "flex-col",
            "gap-4",
            "w-1/2",
            "bg-card",
            "p-6",
            "rounded-lg",
            "shadow-md/20",
            "max-lg:w-full"
        );

        form.append(
            this.createField(
                "Name",
                "name",
                "Enter your name here"
            ),
            this.createField(
                "Title",
                "title",
                "Enter your title here"
            ),
            this.createField(
                "Company",
                "company",
                "Enter your company name here"
            ),
            this.createField(
                "Location",
                "location",
                "Enter your location here"
            ),
            this.createField(
                "Email",
                "email",
                "Enter your email here"
            ),
            this.createMessageField(),
            this.createSubmitButton()
        );

        return form;
    },

    createContact() {
        const container = document.createElement("div");
        const people = document.createElement("div");
        const john = document.createElement("img");
        const shane = document.createElement("img");
        const card = document.createElement("div");

        john.src = John;
        shane.src = Shane;

        john.alt = "John Reid";
        shane.alt = "Shane Reid";

        people.classList.add(
            "flex",
            "justify-center",
            "items-end",
            "h-[260px]"
        );

        john.classList.add(
            "h-[350px]",
            "w-auto",
            "object-contain",
            "z-10"
        );

        shane.classList.add(
            "h-[320px]",
            "w-auto",
            "object-contain",
            "ml-[-100px]"
        );

        people.append(john, shane);

        card.classList.add(
            "relative",
            "min-h-[175px]",
            "bg-linear-to-b",
            "from-primary-600",
            "to-primary-700",
            "text-white",
            "rounded-lg",
            "p-[28px]",
            "shadow-lg/20"
        );

        card.append(
            this.createContactContent()
        );

        container.classList.add(
            "flex",
            "flex-col",
            "items-center",
            "justify-center",
            "flex-1",
            "max-lg:hidden"
        );

        container.append(people, card);

        return container;
    },

    createContactContent() {
        const content = document.createElement("div");
        const title = document.createElement("h5");
        const body = document.createElement("p");
        const contact = document.createElement("div");
        const email = document.createElement("p");
        const phone = document.createElement("p");
        const logoImage = document.createElement("img");

        title.textContent = "We look forward to speaking with you!";

        body.textContent =
            "Have a general question? Feel free to send us an email or give us a call.";

        email.textContent = "Email: contact@reidengineering.com";
        phone.textContent = "Phone: (540) 371-8500";

        logoImage.src = logo;
        logoImage.alt = "Reid Engineering logo";

        title.classList.add(
            "text-h5",
            "font-semibold"
        );

        body.classList.add(
            "text-small",
        );

        contact.classList.add(
            "mt-[24px]",
            "text-small"
        );

        logoImage.classList.add(
            "absolute",
            "right-[20px]",
            "bottom-[20px]",
            "w-[56px]",
            "h-[56px]",
            "object-contain"
        );

        contact.append(email, phone);

        content.append(
            title,
            body,
            contact,
            logoImage
        );

        return content;
    },

    createField(labelText, name, placeholder) {
        const field = document.createElement("div");
        const label = document.createElement("label");
        const input = document.createElement("input");

        label.textContent = labelText;
        label.htmlFor = name;

        input.id = name;
        input.name = name;
        input.type = name === "email" ? "email" : "text";
        input.placeholder = placeholder;

        field.classList.add(
            "flex",
            "flex-col",
            "gap-1"
        );

        label.classList.add(
            "font-semibold"
        );

        input.classList.add(
            "w-full",
            "p-3",
            "border",
            "border-gray-300",
            "rounded-md",
            "bg-white",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-primary-500"
        );

        field.append(label, input);

        return field;
    },

    createMessageField() {
        const field = document.createElement("div");
        const label = document.createElement("label");
        const textarea = document.createElement("textarea");

        label.textContent =
            "Tell us more about your project or needs";

        label.htmlFor = "message";

        textarea.id = "message";
        textarea.name = "message";
        textarea.placeholder = "Enter your message here";
        textarea.rows = 6;

        field.classList.add(
            "flex",
            "flex-col",
            "gap-1"
        );

        label.classList.add(
            "font-semibold"
        );

        textarea.classList.add(
            "w-full",
            "px-3",
            "py-2",
            "border",
            "border-gray-300",
            "rounded-md",
            "bg-white",
            "resize-none",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-primary-500"
        );

        field.append(label, textarea);

        return field;
    },

    createSubmitButton() {
        const button = document.createElement("button");

        button.type = "submit";
        button.textContent = "Send";

        button.classList.add(
            "w-full",
            "p-3",
            "bg-linear-to-b",
            "from-primary-500",
            "to-primary-600",
            "text-white",
            "font-semibold",
            "rounded-md",
            "cursor-pointer",
            "hover:bg-primary-800",
            "transition-colors",
            "shadow-md/20"
        );

        return button;
    }
};

export default Form;
