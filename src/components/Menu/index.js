import './styles.css';
import { useContext } from 'react';
import PageContext from '../../config/contexts';

const Menu = () => {
    const { setPageContent } = useContext(PageContext);
    return (
        <div className='container-menu'>
            <ul>
                <li onClick={() => setPageContent('about')}>sobre</li>
                <li onClick={() => setPageContent('contact')}>contato</li>
                <li onClick={() => setPageContent('portfolio')}>portfolio</li>
                <li onClick={() => setPageContent('news')}>conteudo</li>
            </ul>
        </div>
    )
}

export default Menu