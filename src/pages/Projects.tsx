import ProjectCard from "../components/ProjectCard"
import {motion} from "framer-motion"

const projects = [
    {
        name: "This Website",
        description: "A personal portfolio that shares a bit about me and showcases my projects, skills, and experience.",
        github: "",
        demo: ""
    },
    {
        name: "Berkeley Mobile Download Page",
        description: "A landing page for Berkeley Mobile that I helped develop as part of my internship at OCTO.",
        github: "https://github.com/thesageak/berkeley_mobile_page",
        demo: ""
    },
    {
        name: "Matchwork",
        description: "A prototype food marketplace web application that leverages ChatGPT-4o to estimate fair prices and flag items based on user preferences.",
        github: "https://github.com/oski-bear/cs160-matchwork",
        demo: ""
    },
    {
        name: "Nekollect",
        description: "A 2.5D maze game where you play as an anthropomorphic wolfman named Wolftoshi, collecting cats along the way.",
        github: "",
        demo: "https://www.youtube.com/watch?v=pmYtSgj2ZWo"
    },
    {
        name: "Wavefunction Collapse Algorithm",
        description: "An implementation of Maxim Gumin's wave function collapse algorithm in python. REMINDER: Set up and store this in a github repository.",
        github: "",
        demo: ""
    },
    {
        name: "Textured Raycaster",
        description: "A raycaster built with Python and Pygame featuring textured walls, floors, and ceilings. REMINDER: Set up and store this in a github repository.",
        github: "",
        demo: ""
    },
    {
        name: "Project Name",
        description: "Description",
        github: "",
        demo: ""
    },
    {
        name: "Project Name",
        description: "Description",
        github: "",
        demo: ""
    },
    {
        name: "Project Name",
        description: "Description",
        github: "",
        demo: ""
    },
    
]

export default function Projects() {
    return (
    <div className="flex justify-center p-6">
        <motion.div 
            className="grid grid-cols-3 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
                visible:{
                    transition:{
                        staggerChildren: 0.2
                    }
                }
            }}
        >  
            {
                projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        description={project.description}
                        github={project.github}
                        demo={project.demo}
                    />
                ))
            }
        </motion.div>

    </div>
    )
}