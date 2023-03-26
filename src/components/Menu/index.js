import './styles.css';
import { useContext } from 'react';
import PageContext from '../../config/contexts';

const Menu = () => {
    const { setPageContent } = useContext(PageContext);
    return (
        <div className='container-menu'>
            <ul>
                <li onClick={() => setPageContent('about')}>Sobre</li>
                <li onClick={() => setPageContent('contact')}>Contato</li>
                <li onClick={() => setPageContent('portfolio')}>Portfolio</li>
                <li onClick={() => setPageContent('news')}>Conteúdo</li>
            </ul>
        </div>
    )
}

export default Menu