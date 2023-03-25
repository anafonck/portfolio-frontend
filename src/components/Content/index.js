import './styles.css';
import About from '../../pages/about'
import Contact from '../../pages/contact'
import Main from '../../pages/main'
import News from '../../pages/news'
import Portfolio from '../../pages/portfolio'

const Content = () => {
    return (
        <div className='container-content'>
            <About></About>
            <Contact></Contact>
            <Main></Main>
            <News></News>
            <Portfolio></Portfolio>
        </div>
    )
}

export default Content