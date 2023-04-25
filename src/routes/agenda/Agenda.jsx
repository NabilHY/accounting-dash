import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './agenda.scss'

const Agenda = () => {
  return (
    <div className="agenda">
      <Sidebar />
      <div className="agendaContainer">
        <Navbar />
      </div>
    </div>
  )
}

export default Agenda