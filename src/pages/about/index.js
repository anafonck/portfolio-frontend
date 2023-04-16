import booksIcon from '../../assets/personal/books-icon.png';
import coffeeIcon from '../../assets/personal/coffee-icon.png';
import dogIcon from '../../assets/personal/dog-icon.png';
import familyIcon from '../../assets/personal/family-icon.png';
import cssIcon from '../../assets/tech/css-icon.png';
import htmlIcon from '../../assets/tech/html-icon.png';
import javaIcon from '../../assets/tech/java-icon.png';
import jsIcon from '../../assets/tech/js-icon.png';
import mongodbIcon from '../../assets/tech/mongodb-icon.png';
import nodeIcon from '../../assets/tech/node-icon.png';
import postgresqlIcon from '../../assets/tech/postgres-icon.png';
import reactIcon from '../../assets/tech/react-icon.png';
import './styles.css';

const About = () => {

    return (
        <div className='container-about'>
            <div className='about-content'>
                <div className='softskill'>
                    <span className='section-title'>Eu amo</span>
                    <div className='about-section'>
                        <span><img src={familyIcon}></img>Família</span>
                        <span><img src={dogIcon}></img>Animais</span>
                        <span><img src={coffeeIcon}></img>Café</span>
                        <span><img src={booksIcon}></img>Livros</span>
                    </div>
                </div>
                <div className='hardskill'>
                    <div className='container-section'>
                        <span className='section-title'>Tecnologias</span>
                        <div className='container-icon'>
                            <span>HTML<img src={htmlIcon}></img></span>
                            <span>CSS<img src={cssIcon}></img></span>
                            <span>Javascript<img src={jsIcon}></img></span>
                        </div>
                        <div className='container-icon'>
                            <span>Node.js<img src={nodeIcon}></img></span>
                            <span>PostgreSQL<img src={postgresqlIcon}></img></span>
                            <span>React<img src={reactIcon}></img></span>
                        </div>
                    </div>
                    <div className='container-section'>
                        <span className='section-title'>Estou aprendendo</span>
                        <div className='container-icon'>
                            <span>Java<img src={javaIcon}></img></span>
                            <span>MongoDB<img src={mongodbIcon}></img></span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About