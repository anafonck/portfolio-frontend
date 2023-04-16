import './styles.css';
import Card from '../../components/Card'
import dindinLogo from '../../assets/dindin-logo.svg'
import dindinFront from '../../assets/dindin-front.svg'

const Portfolio = () => {
    return (
        <div className='container-portfolio'>
            <span>Aqui estão os meus principais projetos.</span>
            <div className='container-projects'>
                <Card
                    title={'DinDin Backend'}
                    text={'API Restful para controle de despesas pessoais.'}
                    image={dindinLogo}
                    link={'https://github.com/githubdaAna/desafio-backend-03-dindin-t09'}
                ></Card>
                <Card
                    title={'DinDin Frontend'}
                    text={'Frontend do projeto Dindin desenvolvido em React.'}
                    image={dindinFront}
                    link={'https://github.com/Rozefreitas/desafio-frontend-03-dindin-t09'}
                ></Card>
                <Card
                    title={'Billing Control'}
                    text={'(em desenvolvimento) Plataforma para gerenciamento e controle de cobrança.'}
                    image={dindinLogo}
                    link={'https://github.com/githubdaAna/desafio-backend-03-dindin-t09'}
                ></Card>
            </div>
        </div>
    )
}

export default Portfolio;