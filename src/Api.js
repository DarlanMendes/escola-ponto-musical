import { app } from './Firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  
  Login: async (auth, email, password)=>{
       

   
  return  await signInWithEmailAndPassword(auth, email, password);
        
  }
}