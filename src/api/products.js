import axios from 'axios';

const BASE_URL = "https://iker.wiicode.tech/api/";

const fetchProducts = async () => {
    const response = await fetch(`${BASE_URL}articles`);
    const data = await response.json();
    return data;
}



export { fetchProducts };