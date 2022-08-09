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
                
                <label>Nome:{item.nome}</label>
                <label>CPF::{item.cpf}</label>
                <label>Endereço:{item.endereco}</label>
                <label>E-mail::{item.email}</label>
                <label>Telefone:{item.telefone}</label>
                <label>Horário  Dias:{item.dia}  Horário:{item.horario}</label>
                <label>Período de contrato:{item.periodo}</label>
            
                </div>
            ))}
             <button onClick={mostrar} > Listar alunos</button>
        </div>
       
    );
}
export default ListarAlunos;