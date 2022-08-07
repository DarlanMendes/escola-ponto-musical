
import { useState } from 'react';
import Api from '../../Api'
import { getAuth} from "firebase/auth";
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const auth = getAuth();


    function handleLogin(){
        if(password===confirmPassword){
            Api.Login(auth,email,password).then((userCredential) => {
                // Signed in
                const user = userCredential.user;
               console.log(userCredential)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        }
    }

    return (


        

        <div className="login--page">
            <input type="text" placeholder='Digite seu e-mail' onChange={(e) => {
                setEmail(e.target.value);
            }
            } />


            <input type="password" placeholder='Digite sua senha' onChange={(e) => {
                setPassword(e.target.value)
            }}></input>

            <input type="password" placeholder='Digite sua senha' onChange={(e) => {
                setConfirmPassword(e.target.value)
            }}></input>



            <button onClick={handleLogin}>Fazer Login</button>
        </div>
    )
}
export default Login;