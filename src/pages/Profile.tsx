import { useState } from "react"
import { motion } from "framer-motion"
import Education from "../components/Education"
import Skills from "../components/Skills"

export default function Profile() {
  const [activeSection, setActiveSection] = useState('education');

  return (
    <motion.div
      className="w-[100vw] h-[80vh] border-2 border-codec flex"
      initial={{ opacity: 0, clipPath: 'inset(50% 0 50% 0)' }}
      animate={{ opacity: [0, 0.5, 1], clipPath: 'inset(0% 0 0% 0)' }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/*Left - Navigation*/}
      <div className="flex flex-col justify-start border-r-2 border-codec w-80 h-full px-4">
        <p className={`font-pressstart text-[2rem] mt-10 mb-15 cursor-pointer ${activeSection === 'education' ? 'text-codec' : 'text-codecOff'
          }`}
          onClick={() => setActiveSection('education')}
        >
          Education
        </p>
        {/* <p 
          className="text-white text-[3rem] mb-15"
          onClick={() => setActiveSection('experience')}
        >
          Experience
        </p> */}
        <p
          className={`font-pressstart text-[2rem] cursor-pointer ${activeSection === 'skills' ? 'text-codec' : 'text-codecOff'
            }`}
          onClick={() => setActiveSection('skills')}
        >
          Skills
        </p>
      </div>

      {/*Right - Main Content*/}
      <div className="flex-1">
        {activeSection === 'education' && <Education />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'education'}
      </div>
    </motion.div>
  )
}