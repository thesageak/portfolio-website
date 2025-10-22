import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header className="flex items-center justify-between p-5">
            {/* Left side - Name */}
            <h1 className="text-[1.2rem] text-codec font-pressstart">
                {'<' } sage aguina-kang {'>'}
            </h1>

            {/* Right side - Navigation */}
            <nav className="flex gap-8 text-codecOff font-pressstart text-[1.2rem]">
                <Link to="/" className="hover:text-codec">Home</Link>
                <Link to="/projects" className="hover:text-codec">Projects</Link>
                <Link to="/profile" className="hover:text-codec">Profile</Link>
                <Link to="/contact" className="hover:text-codec">Contact</Link>
            </nav>
        </header>
    )
}