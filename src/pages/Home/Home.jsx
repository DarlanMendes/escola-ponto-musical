import './Home.css'
import logo from '../../assets/logo-removebg-preview.png'
import photo from '../../assets/photopg1-removebg-preview.png'
import photox from '../../assets/foto1.PNG'
import photobc from '../../assets/pag2.jpg'
import photo1 from '../../assets/photoinstagram/ft0-donos.PNG'
import photo2 from '../../assets/photoinstagram/ft1-violao.PNG'
import photo3 from '../../assets/photoinstagram/ft2-violoes.PNG'
import photo4 from '../../assets/photoinstagram/ft4-microfone.PNG'
import photo5 from '../../assets/photoinstagram/ft5-crianca.PNG'
import iconwhats from '../../assets/icon/whatsapp.png'
import iconinsta from '../../assets/icon/instagram.png'
import iconface from '../../assets/icon/facebook.png'
import maps from '../../assets/Capturar.PNG'
import { useState, useEffect } from 'react'



const Home = () => {
    const [position, setPosition] = useState(0)
    const [slideShow, setSlideShow] = useState(true);
    const slideShowPosition = () => {
        if (slideShow) {
            if (position > -300) {
                setPosition(position - 100);
                console.log(position)
            } else {
                setPosition(0);
            }

        }
    }
    // const slideShowSet = () => {





    // }

    const handleLogin = () => {
        window.location.pathname = "/login";
    }
    const handleHome = () => {


    }
    useEffect(() => {
        console.log("entrou")
        setTimeout(function () {
            if (slideShow) {
                slideShowPosition();
            }
        }, 5000)
    }, [position, slideShow]);


    return (
        <div className='home-container'>
            <button className="btn-slide-turnon" style={{ slideShow } ? { backgroundColor: "green" } : { backgroundColor: "red" }} onClick={() => { setSlideShow(true); console.log(slideShow) }}> Slide </button>
            <nav className='navbar-home'>
                <button onClick={() => { setPosition(0); setSlideShow(false) }}>Home</button>
                <button onClick={() => { setSlideShow(false); setPosition(-100) }}>História</button>
                <button onClick={() => { setSlideShow(false); setPosition(-200) }}>Visão</button>
                <button onClick={() => { setSlideShow(false); setPosition(-300) }}>Contato</button>
                <button onClick={()=>{window.location.pathname='/Login'}}>Login</button>
            </nav>
            <div className='home' style={{ transform: `translateX(${position}vw)` }}>

                <div className='bg-1-home'>
                    <div className='transparency-bg-1-home'>
                        <div className='container-logotipo'>
                            <img className='logo-school-home' src={logo} />
                            <span className="txt-pg1-home">Estavamos esperando por você</span>
                        </div>
                    </div>
                </div>
                <div className='pg2 barra-rolagem-div'>
                    <div className='txt2'>
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
                    <div className='photopg2'><img id='fototurma' className='crescendo' src={photox} /></div>
                </div>
                <div className='group_section barra-rolagem-div'>
                    <div className='testecentral'>
                        <div className='history '>


                            <div className='txt-section crescendo'>
                                <h1>O que nós queremos?</h1>
                                <ul>
                                    <li>Realizar sonhos!</li>
                                    <li>Plantar a semente da música.</li>
                                    <li>Promover qualidade de vida.</li>
                                </ul>

                            </div>
                            

                            <div className='txt-section crescendo'>
                                <h1>Missão</h1>
                                <p>Contribuir para difusão da educação musical, formação de público, na excelência do ensino livre de música e visando a valorização da arte e da cultura e de toda cadeia produtiva.
                                </p>
                            </div>
                            <div>
                                <img className='img-section crescendo' src={photo1}></img>
                            </div>
                            <div className='txt-section crescendo'>
                                <h1>Visão</h1>
                                <p>Estar entre as melhores escolas de música do Brasil.
                                </p>
                            </div>

                            <div className='txt-section crescendo'>
                                <h1>Valores</h1>
                                <p>Focamos no sucesso do aluno, na qualidade da sua aprendizagem de forma individualizada e personalizada e o seu encantamento em relação à sua experiência na nossa escola.
                                </p>
                            </div>
                           
                            <div className='txt-section crescendo'>
                                <h1>Ética</h1>
                                <p>Agimos e comunicamos de acordo com os valores que norteiam uma conduta íntegra, respeitando as normas públicas e os regulamentos internos, de forma clara,  principalmente nas questões financeiras adotamos uma conduta justa e transparente diante de todos.
                                </p>
                            </div>

                            <div className='txt-section crescendo'>
                                <h1>Confiança Mútua</h1>
                                <p>Propiciamos um ambiente de confiança mútua e encorajamos a participação, sobretudo visando a evolução individual e objetivamos a melhoria contínua em tudo o que fazemos.
                                </p>
                            </div>
                            <div className='txt-section crescendo'>
                                <h1>Respeito</h1>
                                <p>Agimos de forma respeitosa, sobretudo em relação à vida, à ciência e ao ser humano, na sua diversidade, vedando-se qualquer ato ou prática discriminatória. Somos responsáveis por todos em nossa volta, e agimos de forma a desenvolver e ampliar o senso de pertencimento e comunidade.

                                </p>
                            </div>
                            
                           



                           
                            <div className='txt-section crescendo'>
                                <h1>Compromisso com o resultado</h1>
                                <p>Atuamos de forma engajada e comprometida e priorizamos a solução dos problemas enfrentados pelo aluno, através da nossa atuação.
                                </p>
                            </div>

                           
                            <div className='txt-section crescendo'>
                                <h1>Simplicidade e Foco</h1>
                                <p>Procedemos de forma simples e objetiva, buscando desburocratizar e descomplicar, e colocamos os processos e projetos a serviço das pessoas, sempre de forma clara e transparente.
                                </p>
                            </div>
                            <img className='img-section crescendo' src={photo5}></img>
                            <img className='img-section crescendo' src={photo4}></img>
                            <img className='img-section crescendo' src={photo3}></img>
                            <img className='img-section crescendo' src={photo2}></img>


                        </div>
                    </div>
                </div>
                <div className='contacts'>
                    <div className='box-contacts'>
                        <div className='contatos-lado-esquerdo'>
                            <div className='icon-e-telefone'>
                                <a href='https://api.whatsapp.com/send?l=pt-BR&utm_source=email&utm_campaign=mc-fe-cw-em1%E2%98%8E=5585989269112&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20curso%20de'><img className='box-contacts-img' src={iconwhats}></img></a>
                                
                                <a href='https://www.instagram.com/escolademusicaponto/'><img className='box-contacts-img' src={iconinsta}></img></a>
                                <a href='https://www.facebook.com/escolademusicapontomusical'><img className='box-contacts-img' src={iconface}></img></a>
                            </div>
                            <div className='cnt-ld-esqrdo-txt' ><span >R. Rio Grande do Sul, 860 - Panamericano, Fortaleza - CE, 60441-380</span></div>
                            <div className='cnt-ld-esqrdo-txt'><span >(85)9 8926 9112</span></div>
                        </div>
                        <div className='contatos-lado-direito'>
                        <a href='https://g.page/escolademusicapontomusical?share'><img className='contatos-lado-direito-img' src={maps} /></a>
                        </div>



                    </div>

                </div>

            </div>




        </div>






    );
}
export default Home;