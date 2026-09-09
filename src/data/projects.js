import Caroline from "../../assets/main/projects/caroline_000_6742.jpg";
import Jbs from "../../assets/main/projects/jbsusa-100_0049.jpg";
import Foster from "../../assets/main/projects/fosterfarms-img_9854.jpg";

const projects = {
    caroline: {
        location: "Caroline County, Virginia",
        name: "Caroline County",
        text: "We were the Prime Engineer for the Design Build Wastewater Treatment Upgrade and Expansion Project for Caroline County Polecat Creek Regional WWTP through the Unsolicited PPEA (Public Private Partnership) process. The existing wastewater treatment plant was expanded form 0.5 MGD to 1.5 MGD and upgraded to provide Enhanced Nutrient Removal effluent limits of Total Nitrogen = 3.0 gm/l and Total Phosphorus = 0.3 mg/l. We utilize design practices that significantly reduced cost for the rural Virginia community. The new 5 Stage (Enhanced Nutrient Removal) Bardenpho Parkson EquaReact system integrated equalization and first stage treatment which eliminated the need for a costly standalone equalization tank and pumping system that would only be used during peak flow events. This unique and cost effective system not only saved the County millions of dollars it also allowed equalization to be an integral part of the treatment system reducing downstream reactor sizing, ability to treat higher flows, reduce chemical costs and streamline operations on a daily basis.",
        image: Caroline,
        accomplishment: "We, along with the Design Build Team, saved the County over 10+ million dollars based on a previous design and estimate by others. The County could not afford the project and after it was denied stimulus funds decided to entertain our Value Engineered Design through the Public Private Design Build approach.",
        components: [
            "New 8,000 sqft Operations Building including SCADA Control Room and Lab",
            "New Septage Receiving Station",
            "Upgraded Influent Pumping Station",
            "New Headworks Screening and Grit Removal",
            "Integrated Equalization",
            "5 Stage Bardenpho Reactor System",
            "Upflow Tertiary Filter System with Future Denitrification capabilities",
            "Final Clarification",
            "UV System Expansion",
            "Sludge Handling, Dewatering and Digestion",
            "Electrical and Genset",
            "Automation and Controls/SCADA",
            "Benefical Reuse"
        ]
    },
    jbs: {
        location: "Marshalltown, Indiana",
        name: "JBS USA",
        text: "We were the Prime Engineer that was selected to design a new Single Stage Activated Sludge Pretreatment System that reduced BOD, TSS and Total Nitrogen prior to discharge to the City POTW.",
        image: Jbs,
        accomplishment: "",
        components: [
            "New Anaerobic Lagoon effluent flow meter",
            "Influent Pump Station",
            "Aerobic Reactor No.1 with jet aeration and mixing equipment",
            "Final Clarifier and Return Activated Sludge (RAS) Pump Station",
            "Chemical Feed Systems",
            "New Wastewater Equipment Building for the enclosure of the Jet Pumps, Air Supply Blowers, RAS and WAS Pump Stations, Chemical Storage and Feed Equipment, electrical room and new lab/office",
            "Belt Filter Press Sludge Dewatering System"
        ]
    },
    "foster-farms": {
        location: "Livingston, California",
        name: "Foster Farms",
        text: "Foster Farms owns and operates the world’s largest chicken processing plant in Livingston, California. After several years of negotiations with the City of Livingston regarding sewer rates, Foster Farms elected to design and build their own Wastewater Treatment System. We were selected as the Prime Engineer and designed a Four-Stage Bardenpho Biological Nutrient Removal System to reduce Total Nitrogen to less than 10 mg/l.",
        image: Foster,
        accomplishment: "Our design saved Foster Farms over 14+ million dollars based on a previous design and estimate by others.",
        components: [
            "Raw Wastewater Pump Station",
            "First Stage Anoxic Reactor #1 with jet aeration and mixing",
            "Second Stage Aerobic/Nitrification Reactor #2 with jet aeration and mixing",
            "Third Stage Anoxic Reactor #3 with floating mixers",
            "Fourth Stage Aerobic Reactor #4 with surface aeration for cooling.",
            "Two Final Clarifiers",
            "Equipment Building with offices, breakroom, laboratory, chemical feed equipment, and mechanical equipment.",
            "Final Effluent Storage Pond for ground water recharge",
            "Double Lined Waste Sludge Storage Lagoon",
            "Automation and Controls",
        ]
    },
};

export default projects;
