import { motion } from "framer-motion"

type ProjectProps = {
    name: string
    description: string
    github: string
    demo: string
    titleSize?: number
}

export default function ProjectCard(props: ProjectProps) {
    return (
        <motion.div
            className="relative w-[350px] h-[220px] p-[15px] border-4 border-solid border-codec"
            variants={{
                hidden: {
                    opacity: 0,
                    clipPath: 'inset(50% 0 50% 0)'
                },
                visible: {
                    opacity: [0, 0.5, 1],
                    clipPath: 'inset(0% 0 0% 0)'
                }
            }}
            transition={{
                duration: 0.2,
                ease: [0.43, 0.13, 0.23, 0.96]
            }}
        >
            <div className="-translate-y-2">
                <h1 className="text-white"
                    style={{ fontSize: props.titleSize ? `${props.titleSize}px` : "30px" }}
                >
                    {props.name}
                </h1>
                <p className="text-white text-[15px] mt-1">{props.description}</p>
            </div>

            <div className="absolute bottom-3 flex gap-3">
                {props.github?.trim() &&
                    <a href={props.github} className="text-white text-[18px]">
                        <div className="flex justify-center w-20 border-1 border-solid border-codecDark hover:border-codec">
                            GitHub
                        </div>
                    </a>}
                {props.demo?.trim() &&
                    <a href={props.demo} className="text-white text-[18px]">
                        <div className="flex justify-center w-20 border-1 border-solid border-codecDark hover:border-codec">
                            Demo
                        </div>
                    </a>}
            </div>
        </motion.div>
    )
}