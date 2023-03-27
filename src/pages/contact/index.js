import './styles.css';
import LinkedInIcon from '../../assets/linkedin-icon.png';
import GithubIcon from '../../assets/github-icon.png';
import Button from '../../components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Contact = () => {
    const [form, setForm] = useState(
        {
            nome: '',
            email: '',
            telefone: '',
            mensagem: ''
        }
    );

    function handleSetForm(e) {
        e.preventDefault();
        e.stopPropagation();
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {

    }

    return (
        <div className='container-contact'>
            <div className='social-media'>
                <span>Você pode me encontrar no Linkedin,</span>
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

            <span>Ou</span>

            <div className='form-container'>
                <span>Enviar uma mensagem aqui:</span>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Nome
                        <input
                            name='nome'
                            type='text'
                            value={form.nome}
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

                    <label className='message-area'>Mensagem
                        <input
                            name='mensagem'
                            type='text'
                            value={form.mensagem}
                            onChange={(e) => handleSetForm(e)}
                        ></input>
                    </label>
                    <Button>Enviar mensagem</Button>
                </form>
            </div>
        </div>
    )
}

export default Contact