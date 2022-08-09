import { useState } from "react";
import Api from '../Api'
import './CadastroAluno.css';
const CadastroAluno = () => {
    const [aluno, setAluno] = useState({ nome: '', email: '', telefone: '', Endereco: '', cpf: '', horario: { dia: '', horario: '' }, periodoContrato: '' });

    const handleCadastro = () => {
       
        let collection = 'Aluno';
        
        Api.Update( collection, aluno).then(() => {
            alert("Credências salvas com sucesso")
        })
            .catch((error) => {
                console.log("Ocorreu um erro.Fale com o suporte ", error);
            });
    }
    return (
        <div className="cadastro--aluno--container">
            <section >
                
                    <label>
                        Nome:
                        <input type='text'onChange={(e)=>{aluno.nome=e.target.value}}></input>
                    </label>
                    <label>
                        E-mail:
                        <input type='text' onChange={(e)=>{aluno.email=e.target.value}}></input>
                    </label>
                    <label>
                        Telefone:
                        <input type='text'onChange={(e)=>{aluno.telefone=e.target.value}}></input>
                    </label>
                    <label>
                        Endereço:
                        <input type='text'onChange={(e)=>{aluno.Endereco=e.target.value}}></input>
                    </label>
                    <label>
                        CPF:
                        <input type='text' onChange={(e)=>{aluno.cpf=e.target.value}}></input>
                    </label>
                    <label>
                        Dia de aula:
                        <input type='text' onChange={(e)=>{aluno.horario.dia=e.target.value}}></input>
                    </label>
                    <label>
                        Horário da aula:
                        <input type='text'onChange={(e)=>{aluno.horario.horario=e.target.value}}></input>
                    </label>
                    <label>
                        Período de contrato:
                        <input type='text' onChange={(e)=>{aluno.periodoContrato=e.target.value}}></input>
                    </label>

                    

                



            </section>
            <button onClick={handleCadastro}>Cadastrar</button>
        </div>
    )
}
export default CadastroAluno;