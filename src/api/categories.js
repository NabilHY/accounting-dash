import axios from 'axios';

const BASE_URL = "https://iker.wiicode.tech/api/";

const fetchCategories = async () => {
    const response = await fetch(`${BASE_URL}categories`);
    const data = await response.json();
    return data;
}

const fetchProductsByCategoryId = async (categoryId) => {
    const response = await fetch(`${BASE_URL}categories/${categoryId}/get`)
    const data = await response.json();
    return data;
}

export { fetchCategories, fetchProductsByCategoryId };