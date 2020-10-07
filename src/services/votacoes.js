import { api } from './config';

export default {
  listar: () => api.get('/votacoes'),
};
