import { app } from './Firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
const db = getFirestore(app);

export default {

  Login: async (auth, email, password) => {



    return await signInWithEmailAndPassword(auth, email, password);



  }
  , Update: async (collection, aluno) => {

    let alunos = aluno;

    console.log('aluno', alunos.cpf)
    // Add a new document in collection "cities"
    return await setDoc(doc(db, collection, alunos.cpf), {
      nome: alunos.nome,
      email: alunos.email,
      telefone: alunos.telefone,
      endereco: alunos.Endereco,
      cpf: alunos.cpf,
      dia: alunos.horario.dia,
      horario: alunos.horario.horario,
      periodo: alunos.periodoContrato
    });

  }
  , Read: async (collectionRef) => {

    let listaAlunos = await getDocs(collection(db, collectionRef));
    return listaAlunos;

  }

}