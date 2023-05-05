const BASE_URL = "https://iker.wiicode.tech/api/";

const fetchBonsCommand = async () => {
    const response = await fetch(`${BASE_URL}boncommande`);
    const data = await response.json();
    return data;
}

const fetchBonsCommandByMonth = async (id) => {
    const response = await fetch(`${BASE_URL}boncommande/month/${id}`);
    const data = await response.json();
    return data;
}



export { fetchBonsCommand, fetchBonsCommandByMonth};