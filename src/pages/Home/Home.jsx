import './Home.css'
import logo from '../../assets/logo-removebg-preview.png'
import photo from '../../assets/photopg1-removebg-preview.png'
import photox from '../../assets/foto1.PNG'
import photobc from '../../assets/pag2.jpg'



const Home = () => {
    return (
        <div className='pg1'>
            <div className='hmp'>
            

                <div className='lgtp'>
                    <img className='imglg imagem' src={logo} />
                    <spam className="txt">Estavamos esperando por você</spam>
                </div>
                <div className='imagem'>
                    <img src={photo} />
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
                <div>
                    <img  className='photopg2' src={photox} />
                </div>


            </div>

        </div >


    );
}
export default Home;