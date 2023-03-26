import './styles.css';
import CloseIcon from '../../assets/close-icon.png'
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
                <img
                    className='close-icon'
                    src={CloseIcon}
                    onClick={() => setModalState(false)}
                    alt='close icon'>
                </img>
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