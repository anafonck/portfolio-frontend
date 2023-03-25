import './styles.css';
import LinkedInIcon from '../../assets/linkedin-icon.png';
import GithubIcon from '../../assets/github-icon.png'
import ProfileImage from '../../assets/profile-img.jpeg';

const Navbar = () => {
    return (
        <nav className='container-navbar'>
            <div className='personal-info'>
                <h1>Ana Fonseca</h1>
                <h2>Desenvolvedora Web</h2>
                <img src={ProfileImage} alt='profile'></img>
            </div>
            <div>
                Menu
            </div>
            <div className='social-icon'>
                <img src={LinkedInIcon} alt='linkedin icon'></img>
                <img src={GithubIcon} alt='github-icon'></img>
            </div>
        </nav>
    )
}

export default Navbar