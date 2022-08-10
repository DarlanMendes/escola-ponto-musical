
import { useState } from 'react';
import Api from '../../Api'
import { getAuth } from "firebase/auth";
import './Login.css';
import logologin from '../../assets/logo-removebg-preview.png'
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState()
    const auth = getAuth();
    let navigate = useNavigate();

    const handleLogin = async () => {
        if ((password !== '' || password !== null) && email !== '') {
            Api.Login(auth, email, password).then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(userCredential);
                navigate('/Manager');
            })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });


        }
        else {
            setWarning('Por favor, preencha todos os campos')
        }
       
    }

    return (




        <div className="login--page">
            <div className='login--page--container'>
<img className='logo-login' src={logologin}></img>
                <input type="text" placeholder='Digite seu e-mail' className='login--email' onChange={(e) => {
                    setEmail(e.target.value);
                }
                } />

                <input type="password" placeholder='Digite sua senha' className='login--password' onChange={(e) => {
                    setPassword(e.target.value)
                }}></input>

                <span>{warning}</span>
                

                <div><button onClick={handleLogin}>Fazer Login</button></div>
                <div className='corpy'><span>Ponto Musical - Sistema desenvolvido pela DLA</span></div>
            </div>
  
        </div>
    )
}
export default Login;