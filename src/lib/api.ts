import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.3.5:3333',
})

// Necessário instalar o pacote do Axios
