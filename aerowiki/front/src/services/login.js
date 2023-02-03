import { api } from '../api/config';
// import imputvazioLogin from '../testes/imputvazioLogin';

export async function loginUser(email, password) {
    const response = await api.post('/login', { email, password })
    return response
}