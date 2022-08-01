import './Home.css'
import logo from '../../assets/logo-removebg-preview.png'
import photo from '../../assets/photopg1-removebg-preview.png'
import photox from '../../assets/foto1.PNG'
import photobc from '../../assets/pag2.jpg'
import { useState, useEffect } from 'react'


const Home = () => {
    const [position, setPosition] = useState(0)

    const slideShow = () => {
        if (position > -300) {
            setPosition(position - 100);
            console.log(position)
        } else {
            setPosition(0);
        }
    }
    const setSlideShow = () => {
        setTimeout(function () {
            slideShow();
        }, 5000)
    }
    const handleLogin = () => {
        window.location.pathname = "/login";
    }
    useEffect(() => {
        setSlideShow()
    }, [position]);


    return (
        <div className='home-container'>
            <div className='home' style={{ transform: `translateX(${position}vw)` }}>
                <nav className='navbar-home'>
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleLogin}>Nossa história</button>
                    <button onClick={handleLogin}>Contato</button>
                    <button onClick={handleLogin}>Login</button>
                </nav>
                <div className='bg-1-home'>
                    <div className='transparency-bg-1-home'>


                        <div className='container-logotipo'>
                            <img className='logo-school-home' src={logo} />
                            <span className="txt-pg1-home">Estavamos esperando por você</span>
                        </div>
                        <div className='photo-players-bg-1'>
                            <img src={photo} />
                        </div>
                    </div>
                </div>
                <div className='pg2'>
                    <div className='hst txt2 trsprc'>
                        <h1>Um pouco da Escola de Música Ponto Musical.</h1>
                        <ul>
                            <li>Era uma vez um jovem casal de músicos, Welson e Késsya, que durante grande parte de suas carreiras profissionais ensinaram em diversas escolas de música em Fortaleza.
                            </li>
                            <li>Foi ficando difícil pra professora Késsya conciliar dar aula em muitas escolas por conta dos filhos, então ela começou dar aula na sala da sua casa.
                            </li>
                            <li>Assim nascia a escola, atualmente estamos localizados na melhor localização do Pan Americano.
                                O Pátio Pan americano.</li>
                            <li>
                                A escola nasceu no bairro Pan Americano, antes era localizada na rua principal do bairro, em uma casa. Hoje ficamos em endereço comercial, com 3 salas, um espaço de musicalização infantil, ambiente de espera, banheiro, praça de alimentação e outros serviços.
                            </li>
                            <li>
                                Em 2020 com recursos da lei federal Aldir Blanc,
                                conseguimos realizar um grande sonho de dar o primeiro passo no nosso projeto social, ENSAIOS PARA O FUTURO, que levou aulas de música gratuitamente e foi destinado a crianças e adolescentes estudantes de escola pública do bairro e de bairros próximos a escola.</li>
                        </ul>



                    </div>

                    <img id='photopg2' src={photox} />
                </div>

            </div >

        </div>
    );
}
export default Home;