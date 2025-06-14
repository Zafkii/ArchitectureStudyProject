import { projects } from "../data/projects"
import { useState } from "react"
import GenericProjectCard from "./GenericProjectCard"
import GenericProjectModal from "./GenericProyectModal"
import "./Home.css"

const Home = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  )
  const handleCardClick = (id: string) => {
    setSelectedProjectId(id)
  }
  const closeModal = () => {
    setSelectedProjectId(null)
  }
  const selectedProject = projects.find((p) => p.id === selectedProjectId)

  if (!selectedProject) {
    return (
      <main className="main">
        {projects.map((proj, idx) => (
          <GenericProjectCard key={idx} {...proj} onClick={handleCardClick} />
        ))}
      </main>
    )
  } else {
    return (
      <main className="main">
        {selectedProject.modal ? (
          <selectedProject.modal onClose={closeModal} />
        ) : (
          <GenericProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </main>
    )
  }
  /* return (
    <main className="main">
      {projects.map((proj, idx) => (
        <GenericProjectCard key={idx} {...proj} onClick={handleCardClick} />
      ))}
      {selectedProject && (
        <GenericProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </main>
  ) */
}

export default Home
