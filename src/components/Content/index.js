import { useContext } from 'react';
import BurguerMenu from '../../assets/hamburger-menu.png';
import PageContext from '../../config/contexts';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Main from '../../pages/Main';
import News from '../../pages/News';
import Portfolio from '../../pages/Portfolio';
import './styles.css';

const Content = () => {
    const { pageContent, setModalState } = useContext(PageContext);

    return (
        <div className='container-content'>
            <img
                className='burguer-menu'
                src={BurguerMenu}
                onClick={() => setModalState(true)}
                alt='menu'></img>
            {pageContent === 'main' &&
                <Main></Main>
            }
            {pageContent === 'about' &&
                <About></About>
            }
            {pageContent === 'contact' &&
                <Contact></Contact>
            }
            {pageContent === 'portfolio' &&
                <Portfolio></Portfolio>
            }
            {pageContent === 'news' &&
                <News></News>
            }
        </div>
    )
}

export default Content