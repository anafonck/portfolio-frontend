import './styles.css';
import LinkedInIcon from '../../assets/linkedin-icon.png';
import GithubIcon from '../../assets/github-icon.png'
import ProfileImage from '../../assets/profile-img.jpeg';
import Menu from '../Menu';
import BurguerMenu from '../../assets/hamburger-menu.png';
import { useContext } from 'react';
import PageContext from '../../config/contexts';


const Navbar = () => {
    const { setPageContent } = useContext(PageContext);
    return (
        <div className='container-navbar'>
            <div className='personal-info'>
                <h1>Ana Fonseca</h1>
                <h2>Desenvolvedora Web</h2>
                <img
                    src={ProfileImage}
                    alt='profile'
                    onClick={() => setPageContent('main')}
                ></img>
            </div>
            <Menu className='menu'></Menu>
            <img className='burguer-menu' src={BurguerMenu} alt='menu'></img>
            <div className='social-icon'>
                <img src={LinkedInIcon} alt='linkedin icon'></img>
                <img src={GithubIcon} alt='github-icon'></img>
            </div>
        </div>
    )
}

export default Navbar