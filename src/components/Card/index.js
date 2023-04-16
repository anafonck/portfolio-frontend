import './styles.css';
import Button from '../Button'
import { Link } from 'react-router-dom'

const Card = ({ title, text, image, link }) => {
  return (
    <div className='container-card'>
      <img src={image} alt='project cover' className='cover'></img>
      <div className='project-info'>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <Link to={link} target='_blank' className='github-link'>
        Github
      </Link>
    </div>
  )
}

export default Card;