import './styles.css';
import LinkedInIcon from '../../assets/linkedin-icon.png';
import GithubIcon from '../../assets/github-icon.png';
import Button from '../../components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../config/http'

const Contact = () => {
    const [form, setForm] = useState(
        {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    );

    const [responseMessage, setResponseMessage] = useState('');

    function handleSetForm(e) {
        e.preventDefault();
        e.stopPropagation();
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('/contact', {
                name: form.name,
                email: form.email,
                phone: form.phone,
                message: form.message,
            });
            setResponseMessage(response.message)

        } catch (error) {
            setResponseMessage('Mensagem não enviada. Por favor, tente novamente mais tarde.')
        }
    }

    return (
        <div className='container-contact'>
            <div className='social-media'>
                <span className='contact-text'>Você pode me encontrar no Linkedin</span>
                <Link to='https://www.linkedin.com/in/ana-cz-fonseca/' target='_blank'>
                    <img src={LinkedInIcon}
                        alt='linkedin icon'></img>
                </Link>
                <span>No Github</span>
                <Link to='https://github.com/githubdaAna' target='_blank'>
                    <img src={GithubIcon}
                        alt='github icon'></img>
                </Link>
            </div>

            <span className='or' >ou</span>

            <div className='form-container'>
                <span>Enviar uma mensagem aqui:</span>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Nome
                        <input
                            name='name'
                            type='text'
                            value={form.name}
                            onChange={(e) => handleSetForm(e)}
                        ></input>
                    </label>

                    <label>E-mail
                        <input
                            name='email'
                            type='email'
                            value={form.email}
                            onChange={(e) => handleSetForm(e)}
                        ></input>
                    </label>

                    <label>Telefone
                        <input
                            name='phone'
                            type='text'
                            value={form.phone}
                            onChange={(e) => handleSetForm(e)}
                        ></input>
                    </label>

                    <label className='message-area'>Mensagem
                        <input
                            name='message'
                            type='text'
                            value={form.message}
                            onChange={(e) => handleSetForm(e)}
                        ></input>
                    </label>
                    <span>{responseMessage}</span>
                    <Button>Enviar mensagem</Button>
                </form>
            </div>
        </div>
    )
}

export default Contact