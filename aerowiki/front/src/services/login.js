import { api } from '../api/config';
import imputvazioLogin from '../testes/imputvazioLogin';

export async function loginUser(email, password) {
    if(imputvazioLogin(email, password) === 'passou'){
      const resposta = await api.post('/login', {email, password})
        return resposta  
    }else{
        return "vazio"
    }
    
}