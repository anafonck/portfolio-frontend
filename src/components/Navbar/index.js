import { useContext } from 'react';
import { Link } from 'react-router-dom';
import GithubIcon from '../../assets/github-icon.png';
import BurguerMenu from '../../assets/hamburger-menu.png';
import LinkedInIcon from '../../assets/linkedin-icon.png';
import ProfileImage from '../../assets/profile-img.jpeg';
import PageContext from '../../config/contexts';
import Menu from '../Menu';
import './styles.css';

const Navbar = () => {
    const { setPageContent, setModalState } = useContext(PageContext);
    return (
        <div className='container-navbar'>
            <div className='personal-info'>
                <h1>Ana Fonseca</h1>
                <img
                    src={ProfileImage}
                    alt='profile'
                    onClick={() => setPageContent('main')}
                ></img>
            </div>
            <Menu className='menu'></Menu>
            <img
                className='burguer-menu'
                src={BurguerMenu}
                alt='menu'
                onClick={() => setModalState(true)}>
            </img>
            <div className='social-icon'>
                <Link to='https://www.linkedin.com/in/ana-cz-fonseca/' target='_blank'>
                    <img src={LinkedInIcon}
                        alt='linkedin icon'
                        className='icon'
                    ></img>
                </Link>
                <Link to='https://github.com/githubdaAna' target='_blank'>
                    <img src={GithubIcon}
                        alt='github icon'
                        className='icon'></img>
                </Link>
            </div>
        </div>
    )
}

export default Navbar