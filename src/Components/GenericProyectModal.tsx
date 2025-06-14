interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  content: string
}

interface Props {
  project: Project
  onClose: () => void
}

const ProjectModal = ({ project, onClose }: Props) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} />
        <p>{project.content}</p>
      </div>
    </div>
  )
}

export default ProjectModal
