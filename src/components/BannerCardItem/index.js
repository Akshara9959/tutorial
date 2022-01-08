// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCard} = props
  const {description, headerText, className} = bannerCard

  return (
    <div className="banner-container">
      <li>
        <div className={className}>
          <h1 className="heading">{headerText}</h1>
          <p className="description">{description}</p>
        </div>
      </li>
    </div>
  )
}

export default BannerCardItem
