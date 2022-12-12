// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails, key} = props
  console.log(key)
  const {title, description, imgUrl, className} = cardDetails
  return (
    <div className={className}>
      <li>
        <h1 className="heading">{title}</h1>
        <p className="para">{description}</p>
        <img className="img" src={imgUrl} alt={title} />
      </li>
    </div>
  )
}

export default CardItem
