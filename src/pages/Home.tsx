import ProjectCard from "../components/GenericProjectCard"
import { projects } from "../data/projects"

const Home = () => {
  return (
    <main className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </main>
  )
}

export default Home
