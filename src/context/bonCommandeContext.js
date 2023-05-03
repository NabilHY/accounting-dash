import React, { useState, useEffect } from 'react';
import { fetchBonsCommand, fetchBonsCommandByMonth } from '../api/bons'

export const BonsCommandContext = React.createContext();

export const BonsCommandContextProvider = (props) => {
    const [bonsCommand, setBonsCommand] = useState([]);
    const [fetchAll, setFetchAll] = useState(false)
    const [bonsCommandByMonth, setBonsCommandByMonth] = useState()

    useEffect(() => {
        const getBons = async () => {
            const data = await fetchBonsCommand();
            const referencesArray = data.map((obj) => ({ id: obj.id, numero: obj.Numero_bonCommande}))
            setBonsCommand(data);
        }
        getBons();
    }, [])

    useEffect(() => {
        if (fetchAll) {
            const getBons = async () => {
                const data = await fetchBonsCommand();
                setBonsCommand(data);
            }
            getBons(); 
        }
    }, [fetchAll])

    useEffect(() => {
        const getBonsByMonth = async () => {
            const data = await fetchBonsCommandByMonth(bonsCommandByMonth);
            setBonsCommand(data);
        }
        getBonsByMonth(bonsCommandByMonth);
    }, [bonsCommandByMonth])

    useEffect(() => {
        console.log(bonsCommand);
    }, [bonsCommand])

    return (
        <BonsCommandContext.Provider value={{ bonsCommand, setBonsCommandByMonth, setFetchAll }} >
            {props.children}
        </BonsCommandContext.Provider >
    )

}

