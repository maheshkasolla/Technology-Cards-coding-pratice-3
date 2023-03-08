// Write your code here.
import './index.css'
const CardItems = props => {
  const {cardDetails} = props
  const {title, description, className, imgUrl} = cardDetails
  return (
    <li className="bg-card-container">
      <div className={`card-container ${className}`}>
        <h1 className="heading">{title}</h1>
        <p className="paragraph">{description}</p>
        <img src={imgUrl} className="image-sizing" alt={title} />
      </div>
    </li>
  )
}
export default CardItems
