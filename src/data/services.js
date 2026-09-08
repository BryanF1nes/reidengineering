import cog from "../../assets/main/vaadin_cog-o.svg";
import ph from "../../assets/main/material-symbols_water-ph-outline.svg";
import design from "../../assets/main/streamline-ultimate_blueprint-helmet-1.svg";

const services = [
    {
        title: "General Services",
        icon: cog,
        description: "While wastewater treatment is our core niche and focus other business areas",
        items: [
            "Advanced Wastewater Treatment",
            "Biological/Enhanced Nutrient Removal",
            "Pretreatment and Biological Wastewater Pretreatment",
            "Water/Sewer Infrastructure",
            "Land Development"
        ],
        optional: null,
    },
    {
        title: "Wastewater Treatment",
        icon: ph,
        description: "We provide wastewater treatment solutions in the Municipal, Industrial and Federal markets.",
        items: [
            "Process Design",
            "BioWin Modeling",
            "Mechanical Piping and Pumping Design",
            "Process Flow Diagrams",
            "Basis of Design and Analysis and Reports"
        ],
        optional: null,
    },
    {
        title: "Water Reuse Systems",
        icon: ph,
        description: "While wastewater is our core niche and focus on other systems.",
        items: [
            "Process Design",
            "BioWin Modeling",
            "Mechanical Piping and Pumping Design",
            "Process Flow Diagrams",
            "Basis of Design and Analysis and Reports"
        ],
        optional: null,
    },
    {
        title: "Sewer Infrastructure",
        icon: ph,
        description: "We can analyze your current system and identifiy opportunities for upgrades and improvements.",
        items: [
            "Systems wide planning",
            "Engineering Reports",
            "Hydraulic Modeling",
            "Plan and Profile Design of Convenyance",
            "Pumping Stations"
        ],
        optional: null,
    },
    {
        title: "Design Build",
        icon: design,
        description: "REC can offer design build as alternative to the traditional design bid build project delivery method.",
        items: [],
        optional:
            "An approach that can offer clients substantial value in terms of value engineering, guaranteed price, no contractor-intiated change orders, overall reduced risk, reduced cost, streamlined process, and an accelerated design and construction schedule for the project."
    },
];

export default services;
