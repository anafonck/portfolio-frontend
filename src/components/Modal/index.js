import './styles.css';
import CloseIcon from '../../assets/close-icon.png'
import HomeIcon from '../../assets/home-icon.png'
import { useContext } from 'react';
import PageContext from '../../config/contexts';

const Modal = () => {
    const { setModalState, setPageContent } = useContext(PageContext);

    function handleOptions(page) {
        setModalState(false)
        setPageContent(page)
    }

    return (
        <div className='container-modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <img
                        className='home-icon'
                        src={HomeIcon}
                        onClick={() => handleOptions('main')}
                        alt='home icon'>
                    </img>
                    <img
                        className='close-icon'
                        src={CloseIcon}
                        onClick={() => setModalState(false)}
                        alt='close icon'>
                    </img>
                </div>

                <ul className='modal-options'>
                    <li onClick={() => handleOptions('about')}>Sobre</li>
                    <li onClick={() => handleOptions('portfolio')}>Portfolio</li>
                    <li onClick={() => handleOptions('contact')} >Contatos</li>
                    <li onClick={() => handleOptions('news')} >Conteúdo</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal