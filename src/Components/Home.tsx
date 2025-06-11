import { projects } from "../data/projects"
import GenericProjectCard from "./GenericProjectCard"
import "./Home.css"

const Home = () => {
  return (
    <main className="main">
      {projects.map((proj, idx) => (
        <GenericProjectCard key={idx} {...proj} />
      ))}
    </main>
  )
}

export default Home
