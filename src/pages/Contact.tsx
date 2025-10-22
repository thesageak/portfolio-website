import { motion } from "framer-motion"

export default function Contact() {
    return (
        <motion.section
            id="contact" className="p-8 border-2 border-codec text-white"
            initial={{ opacity: 0, clipPath: 'inset(50% 0 50% 0)' }}
            animate={{ opacity: [0, 0.5, 1], clipPath: 'inset(0% 0 0% 0)' }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <h2 className="text-3xl font-bold mb-6 text-left">Contact Me</h2>
            <form action="#" method="POST" className="min-w-md mx-auto flex flex-col gap-4">
                <label htmlFor="name" className="font-semibold">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="p-2 rounded text-white border-2 border-codecDark"
                />

                <label htmlFor="email" className="font-semibold">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="p-2 rounded text-white border-2 border-codecDark"
                />

                <label htmlFor="message" className="font-semibold">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="p-2 rounded text-white border-2 border-codecDark"
                ></textarea>

                <button
                    type="submit"
                    className="bg-codecDark text-codecOff py-2 rounded hover:bg-codec transition-colors"
                >
                    Send
                </button>
            </form>
        </motion.section>
    )
}