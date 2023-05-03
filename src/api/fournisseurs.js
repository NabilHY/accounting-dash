const BASE_URL = "https://iker.wiicode.tech/api/";

const fetchFournisseur = async () => {
    const response = await fetch(`${BASE_URL}fournisseurs`);
    const data = await response.json();
    return data;
}

export { fetchFournisseur };