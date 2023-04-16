import './styles.css';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="main-content">
            <h1>Oi, <br></br>eu sou a Ana, <br></br>desenvolvedora web fullstack.</h1>
            <Button >
                <Link to='https://docs.google.com/document/d/19ZaHIacS9u5JUcqhtDdGfn7cfstzjk1cC0F2ZGHdh6U/edit?usp=sharing' target='_blank'>
                    Download do Currículo
                </Link>
            </Button>
        </div >
    )
}

export default Main