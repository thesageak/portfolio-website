export default function Footer() {
    return (
        <footer className="flex justify-start items-end p-4 gap-8">
            <a 
                href="https://www.linkedin.com/in/sage-aguina-kang/" 
                className="hover:scale-110 transition-transform duration-300"
            >
                <i className='devicon-linkedin-plain text-5xl text-codecOff hover:text-codec'/>
            </a>
            <a 
                href="https://github.com/thesageak" 
                className="hover:scale-110 transition-transform duration-300"
            >
                <i className='devicon-github-plain text-5xl text-codecOff hover:text-codec'/>
            </a>
        </footer>
    )
}