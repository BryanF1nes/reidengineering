import Caroline from "../../../assets/main/projects/caroline_000_6742.jpg";
import KochFoods from "../../../assets/main/projects/kochfoods-20180315_115554.jpg";
import FosterFarms from "../../../assets/main/projects/fosterfarms-img_9854.jpg";
import Paris from "../../../assets/main/projects/paris-dscf0064.jpg";
import Jbs from "../../../assets/main/projects/jbsusa-100_0049.jpg";

const Hero = {
    images: [
        Caroline,
        KochFoods,
        FosterFarms,
        Paris,
        Jbs
    ],

    currentImage: 0,
    indicators: [],
    carouselInterval: null,

    render(container) {
        const section = document.createElement("section");

        section.classList.add(
            "relative",
            "min-h-[900px]",
            "flex",
            "items-center",
            "overflow-hidden"
        );

        const backgroundOne = this.createBackground(
            this.images[0]
        );

        const backgroundTwo = this.createBackground(
            this.images[1]
        );

        backgroundTwo.classList.add("opacity-0");

        section.append(
            backgroundOne,
            backgroundTwo,
            this.createOverlay(),
            this.createHero(),
            this.createIndicators()
        );

        container.appendChild(section);

        this.startCarousel(
            backgroundOne,
            backgroundTwo
        );

        return section;
    },

    createBackground(image) {
        const background = document.createElement("div");

        background.style.backgroundImage = `url(${image})`;

        background.classList.add(
            "absolute",
            "inset-0",
            "bg-cover",
            "bg-center",
            "transition-opacity",
            "duration-[2000ms]",
            "ease-in-out"
        );

        return background;
    },

    createOverlay() {
        const overlay = document.createElement("div");

        overlay.classList.add(
            "absolute",
            "inset-0",
            "z-[1]",
            "bg-linear-to-r",
            "from-primary-900",
            "via-primary-900/70",
            "to-transparent"
        );

        return overlay;
    },

    createHero() {
        const container = document.createElement("div");
        const header = document.createElement("h1");
        const subHeader = document.createElement("p");
        const cta = document.createElement("a");

        container.classList.add(
            "relative",
            "z-10",
            "flex",
            "flex-col",
            "items-start",
            "gap-2",
            "w-full",
            "max-w-[1200px]",
            "mx-auto",
            "px-8"
        );

        header.textContent =
            "Cost Effective & Compliant";

        subHeader.textContent =
            "For over 40 years, we have been selected by many clients to be their trusted engineering partner.";

        header.classList.add(
            "text-6xl",
            "font-bold",
            "text-white",
            "max-w-[400px]"
        );

        subHeader.classList.add(
            "text-md",
            "text-white",
            "max-w-[400px]"
        );

        cta.href = "/contact";
        cta.dataset.route = "/contact";
        cta.textContent = "Schedule A Consultation";

        cta.classList.add(
            "font-semibold",
            "bg-primary-500",
            "text-white",
            "px-4",
            "py-2",
            "rounded-md",
            "shadow-lg",
            "shadow-primary-500/50",
            "hover:bg-primary-600",
            "hover:text-white"
        );

        container.append(
            header,
            subHeader,
            cta
        );

        return container;
    },

    createIndicators() {
        const container = document.createElement("div");

        container.classList.add(
            "absolute",
            "bottom-8",
            "left-1/2",
            "-translate-x-1/2",
            "z-10",
            "flex",
            "items-center",
            "gap-2"
        );

        this.indicators = [];

        this.images.forEach((_, index) => {
            const button = document.createElement("button");

            button.type = "button";

            button.setAttribute(
                "aria-label",
                `Go to slide ${index + 1}`
            );

            button.classList.add(
                "h-2",
                "w-2",
                "rounded-full",
                "bg-white/50",
                "transition-all",
                "duration-300",
                "hover:bg-white"
            );

            button.addEventListener("click", () => {
                this.changeImage(
                    index,
                    this.backgroundOne,
                    this.backgroundTwo
                );

                this.restartCarousel();
            });

            this.indicators.push(button);

            container.appendChild(button);
        });

        this.updateIndicators();

        return container;
    },

    updateIndicators() {
        this.indicators.forEach((button, index) => {
            const active =
                index === this.currentImage;

            button.classList.toggle(
                "w-6",
                active
            );

            button.classList.toggle(
                "w-2",
                !active
            );

            button.classList.toggle(
                "bg-white",
                active
            );

            button.classList.toggle(
                "bg-white/50",
                !active
            );
        });
    },

    changeImage(
        index,
        backgroundOne,
        backgroundTwo
    ) {
        if (index === this.currentImage) {
            return;
        }

        const activeBackground =
            this.currentImage % 2 === 0
                ? backgroundOne
                : backgroundTwo;

        const inactiveBackground =
            this.currentImage % 2 === 0
                ? backgroundTwo
                : backgroundOne;

        this.currentImage = index;

        inactiveBackground.style.backgroundImage =
            `url(${this.images[index]})`;

        inactiveBackground.classList.remove(
            "opacity-0"
        );

        inactiveBackground.classList.add(
            "opacity-100"
        );

        activeBackground.classList.remove(
            "opacity-100"
        );

        activeBackground.classList.add(
            "opacity-0"
        );

        this.updateIndicators();
    },

    startCarousel(
        backgroundOne,
        backgroundTwo
    ) {
        this.backgroundOne = backgroundOne;
        this.backgroundTwo = backgroundTwo;

        this.carouselInterval = setInterval(() => {
            const nextImage =
                (this.currentImage + 1) %
                this.images.length;

            this.changeImage(
                nextImage,
                backgroundOne,
                backgroundTwo
            );
        }, 6000);
    },

    restartCarousel() {
        clearInterval(
            this.carouselInterval
        );

        this.carouselInterval = setInterval(() => {
            const nextImage =
                (this.currentImage + 1) %
                this.images.length;

            this.changeImage(
                nextImage,
                this.backgroundOne,
                this.backgroundTwo
            );
        }, 7000);
    },
};

export default Hero;
