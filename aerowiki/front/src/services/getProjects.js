import { api } from '../api/config';

export function getProjects() {
  return api.get('/getProjects')
}
