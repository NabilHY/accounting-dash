import axios from 'axios';

const BASE_URL = "https://4338-196-77-120-82.ngrok-free.app/api/";

const fetchProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
}

export { fetchProducts };