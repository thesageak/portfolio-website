import { motion } from "framer-motion"

export default function Voicebar() {

    const bars = 9;
    const maxWidth = 550;
    const widths = Array.from({ length: bars }).map((_, i) => {
        const w = maxWidth / (i + 1);
        const nextW = maxWidth / (i + 2);
        const width = w - (w - nextW);
        return width;
    })
    const notActiveBars = 2;

    return (
        <div
            className="absolute flex flex-col gap-1 w-[300px] translate-x-95 translate-y-20"
        >
            {widths.map((width, i) => {
                const delay = (bars - 1 - i) * 0.05;
                return (
                    <div
                        key={i}
                        className="h-4 bg-codecOff"
                        style={{ width: `${width}px` }}
                    >

                        <motion.div
                            className="h-4 bg-codecOff"
                            animate={{ backgroundColor: i < notActiveBars ? '#2a413b' : '#74ce9c' }}
                            transition={{
                                duration: 0.1,
                                delay: delay,
                            }}
                        >
                        </motion.div>


                    </div>
                )
            })

            }


        </div>
    )
}