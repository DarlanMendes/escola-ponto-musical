import './Manager.css';

import CadastroAluno from '../../components/CadastroAluno';
import ListarAlunos from '../../components/ListarAlunos';
import { useState } from 'react';

const Manager = () => {
    const [alunosListados,setAlunosListados]=useState([]);
    const [cadastrar,setCadastrar]=useState(false);
    const toggleCadastrar=()=>{
        setCadastrar(!cadastrar)
    }
    return (


        <div className='manager--container'>
            <h1></h1>
            
            {cadastrar&&<CadastroAluno/> }
            {!cadastrar&&<ListarAlunos alunosListados={alunosListados} setAlunosListados={setAlunosListados}/>}
            <button onClick={toggleCadastrar}> {cadastrar?'Selecionar listagem de alunos':'Selecionar cadastro de alunos'}</button>
        </div>
    )
}
export default Manager;