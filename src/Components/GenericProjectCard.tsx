import "./GenericProjectCard.css"

type GenericProjectCardProps = {
  title: string
  description: string
  imageUrl: string
}

const GenericProjectCard = ({
  title,
  description,
  imageUrl,
}: GenericProjectCardProps) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="image" />
      <div className="content">
        <h3 className="title">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default GenericProjectCard
