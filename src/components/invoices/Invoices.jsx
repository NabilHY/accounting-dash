import React, { useState, useEffect, useContext } from 'react';
import SideWindowOptions from '../sideWindow/SideWindowOptions';
import { BonsCommandContext } from '../../context/bonCommandeContext';
import './invoices.scss';

const Invoices = ({ type }) => {
    const { bonsCommand, setBonsCommandByMonth, setFetchAll } = useContext(BonsCommandContext);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [tableData, setTableData] = useState('');
    const [month, setMonth] = useState('');

    useEffect(() => {
        if (selectedMonth) {
            setBonsCommandByMonth(selectedMonth)
            setTableData(bonsCommand)
            setFetchAll(false)
            console.log('fetchedByMont')
        } else {
            setFetchAll(true)
            setTableData(bonsCommand);
            console.log('fetch All')
        }
    }, [selectedMonth])

    useEffect(() => {
        console.log(selectedMonth)
    }, [selectedMonth])

    useEffect(() => {
        console.log(bonsCommand);
    }, [bonsCommand])

    const handleSelectedMonth = (id) => {
        setSelectedMonth(id)
    }

    return (  
        <div className='componentsContainer'>
            <SideWindowOptions type={type} handleSelectedMonth={handleSelectedMonth} />   
        </div>
  )
}

export default Invoices