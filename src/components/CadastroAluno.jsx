import { useState } from "react";
import Api from '../Api'
import './CadastroAluno.css';
import { getAuth } from "firebase/auth";
const CadastroAluno = () => {
    const [aluno, setAluno] = useState({ nome: '', email: '', senha: '', telefone: '', Endereco: '', cpf: '', dia: '', horario: '', periodoContrato: '', idEmail: '' });
    const auth = getAuth();
    const handleCadastro = () => {

        let collection = 'Aluno';
            Api.Update(collection, aluno).then(() => {
                alert("Credências salvas com sucesso")
            })
            Api.SignUp(auth,aluno.email,aluno.senha).then((userCredential) => {
                console.log(aluno.email,"emaqil")
                const user = userCredential.user;
                aluno.idEmail = user.uid;
               
               
            })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('errorCode', errorCode, 'errorMessage', errorMessage)
                });


                // .catch((error) => {
                //     console.log("Ocorreu um erro.Fale com o suporte ", error);
                // });

    }
    return (
        <div className="cadastro--aluno--container">
            <section >

                <label>
                    Nome:
                    <input type='text' onChange={(e) => { aluno.nome = e.target.value }}></input>
                </label>
                <label>
                    E-mail:
                    <input type='text' onChange={(e) => { aluno.email = e.target.value }}></input>
                </label>
                <label>
                    Senha:
                    <input type='text' onChange={(e) => { aluno.senha = e.target.value }}></input>
                </label>
                <label>
                    Telefone:
                    <input type='text' onChange={(e) => { aluno.telefone = e.target.value }}></input>
                </label>
                <label>
                    Endereço:
                    <input type='text' onChange={(e) => { aluno.Endereco = e.target.value }}></input>
                </label>
                <label>
                    CPF:
                    <input type='text' onChange={(e) => { aluno.cpf = e.target.value }}></input>
                </label>
                <label>
                    Dia de aula:
                    <input type='text' onChange={(e) => { aluno.dia = e.target.value }}></input>
                </label>
                <label>
                    Horário da aula:
                    <input type='text' onChange={(e) => { aluno.horario = e.target.value }}></input>
                </label>
                <label>
                    Período de contrato:
                    <input type='text' onChange={(e) => { aluno.periodoContrato = e.target.value }}></input>
                </label>







            </section>
            <button onClick={handleCadastro}>Cadastrar</button>
        </div>
    )
}
export default CadastroAluno;