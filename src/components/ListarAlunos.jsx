import './ListarAlunos.css'
import { useEffect,useState } from "react";
import Api from '../Api';
import { doc } from 'firebase/firestore';

const ListarAlunos = ({alunosListados,setAlunosListados}) => {
    
    let lista = [];
   
    const mostrar = async() => {
        setAlunosListados([]);
        let collectionRef = 'Aluno';
        let alunos = await Api.Read(collectionRef);
        alunos.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            
          lista.push(doc.data())
          
        })
        setAlunosListados(lista)
    }


    useEffect(() => {
  
        
      
      
    }, [])

    return (
        <div className="listar--alunos--container">

            {alunosListados&&alunosListados.map((item,key)=>(
                <div key={key} className="alunos--container"> 
                
                <label>Nome:{item.alunos.nome}</label>
                <label>CPF::{item.alunos.cpf}</label>
                <label>Endereço:{item.alunos.Endereco}</label>
                <label>E-mail::{item.alunos.email}</label>
                <label>Telefone:{item.alunos.telefone}</label>
                <label>Horário  Dias:{item.alunos.dia}  Horário:{item.horario}</label>
                <label>Período de contrato:{item.alunos.periodoContrato}</label>
               
                </div>
            ))}
             <button onClick={mostrar} > Listar alunos</button>
        </div>
       
    );
}
export default ListarAlunos;