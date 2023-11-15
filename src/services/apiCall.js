
import axios from 'axios';

export const traePersonajes = async () => {

    return await axios.get('https://rickandmortyapi.com/api/character/?page=2')

}