import placeHolder from "/meloncat-codec.png"
import sageCodec from "/sage-codec.png"
import Voicebar from "./Voicebar"
import { motion } from "framer-motion"

export default function Codec() {
    return (
        <div>
            <div>
                <div className="absolute text-codecOff text-[4.5rem] translate-x-117 translate-y-40" style={{ fontFamily: 'DS-Digital',  fontVariantNumeric: 'tabular-nums' }}>
                    88<span className="text-[5rem]">8.88</span>
                </div>
            </div>
            <Voicebar />
            <div className="absolute font-pressstart text-codecOff text-[2rem] translate-x-120 -translate-y-0.5">{'PTT'}</div>
            <div className="absolute font-pressstart text-codecOff text-[2rem] translate-x-107 translate-y-76">{'MEMORY'}</div>
            {/*left portrait*/}
            <div className="absolute translate-x-6.5 -translate-y-2.5">
                <motion.div
                    className="absolute inset-0 w-[211px] h-[364px] bg-white"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: [0, 0.2, 0, 0.1, 0, 1], opacity: [1, 1, 1, 0] }}
                    transition={{ duration: 0.5 }}
                />
                <motion.img
                    className="portrait-glow"
                    src={placeHolder}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.3, duration: 0.2 }}
                />
            </div>

            {/*right portrait*/}
            <div className="absolute translate-x-202.5 -translate-y-2.5">
                <motion.div
                    className="absolute inset-0 w-[211px] h-[364px] bg-white"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: [0, 0.2, 0, 0.1, 0, 1], opacity: [1, 1, 1, 0] }}
                    transition={{ duration: 0.5 }}
                />
                <motion.img
                    className="portrait-glow"
                    src={sageCodec}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.3, duration: 0.2 }}
                />
            </div>

            <svg width="1048" height="346" viewBox="0 0 1048 346" fill="none" xmlns="http://www.w3.org/2000/svg">

                {/*left side animation*/}
                <motion.g
                    id="left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.2, ease: "easeOut" }}
                    style={{ transformOrigin: 'left' }}
                >
                    <path id="Vector 1_2" d="M0 2L396.129 2" stroke="#121617" stroke-width="3" />
                    <path id="Vector 2_2" d="M1.50427 3V344H396.129" stroke="#121617" stroke-width="3" />
                </motion.g>

                {/*right side animation*/}
                <motion.g
                    id="right"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.2, ease: "easeOut" }}
                    style={{ transformOrigin: 'right' }}
                >
                    <path id="Vector 1" d="M1047.13 2L651 2" stroke="#121617" stroke-width="3" />
                    <path id="Vector 2" d="M1045.62 3V344H651" stroke="#121617" stroke-width="3" />
                </motion.g>

                {/*middle (leave alone for now)*/}
                <g id="main">
                    <rect id="boxwithnumbers" x="370.5" y="75.5" width="309" height="186" fill="#121617" stroke="#121617" />
                    <rect id="ptt" x="404.5" y="0.5" width="238" height="39" fill="#121617" stroke="#121617" />
                    <rect id="memory" x="404.5" y="305.5" width="238" height="39" fill="#121617" stroke="#121617" />
                    <line id="Line 6" x1="258" y1="33.5" x2="396" y2="33.5" stroke="#121617" stroke-width="3" />
                    <line id="Line 8" x1="258" y1="312.5" x2="396" y2="312.5" stroke="#121617" stroke-width="3" />
                    <line id="Line 9" x1="651" y1="312.5" x2="789" y2="312.5" stroke="#121617" stroke-width="3" />
                    <line id="Line 7" x1="651" y1="33.5" x2="789" y2="33.5" stroke="#121617" stroke-width="3" />
                    <g id="weird line thing">
                        <rect id="Rectangle 107" x="352.5" y="64.5" width="19" height="8" fill="#121617" stroke="#121617" />
                        <rect id="Rectangle 108" x="675.5" y="64.5" width="19" height="8" fill="#121617" stroke="#121617" />
                        <line id="Line 10" x1="370" y1="65.5" x2="675" y2="65.5" stroke="#121617" stroke-width="3" />
                    </g>
                    <g id="weird line thing_2">
                        <rect id="Rectangle 107_2" x="0.5" y="-0.5" width="19" height="8" transform="matrix(1 0 0 -1 352 273)" fill="#121617" stroke="#121617" />
                        <rect id="Rectangle 108_2" x="0.5" y="-0.5" width="19" height="8" transform="matrix(1 0 0 -1 675 273)" fill="#121617" stroke="#121617" />
                        <line id="Line 10_2" y1="-1.5" x2="305" y2="-1.5" transform="matrix(1 0 0 -1 370 271)" stroke="#121617" stroke-width="3" />
                    </g>
                    <rect id="Rectangle 109" x="253.5" y="146.5" width="93" height="41" fill="#121617" stroke="#121617" />
                    <rect id="Rectangle 110" x="699.5" y="146.5" width="93" height="41" fill="#121617" stroke="#121617" />
                </g>
            </svg>

        </div>

    )
}
