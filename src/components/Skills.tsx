const languages = [
    { name: "C", icon: "devicon-c-plain" },
    { name: "C++", icon: "devicon-cplusplus-plain" },
    { name: "Python", icon: "devicon-python-plain" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "Rust", icon: "devicon-rust-plain" },
    { name: "Go", icon: "devicon-go-plain" },
]

const tech = [
    { name: "React", icon: "devicon-react-original" },
    { name: "Vite", icon: "devicon-vitejs-plain" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "PyTorch", icon: "devicon-pytorch-original" },
    { name: "NumPy", icon: "devicon-numpy-plain" },
    { name: "Pandas", icon: "devicon-pandas-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "GitHub", icon: "devicon-github-original" },
]

export default function Skills() {
     return (
    <section className="text-white p-5">
      <h1 className="text-[2.5rem] font-bold mb-6 text-left">Languages</h1>
      <div className="flex flex-wrap justify-center gap-10 mb-12">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <i
              className={`${lang.icon} text-6xl text-codec`}
            />
            <span className="text-xl">{lang.name}</span>
          </div>
        ))}
      </div>

      <h1 className="text-[2.5rem] font-bold mb-6 text-left">Technologies</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {tech.map((t) => (
          <div
            key={t.name}
            className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <i
              className={`${t.icon} text-6xl text-codec`}
            />
            <span className="text-xl">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}