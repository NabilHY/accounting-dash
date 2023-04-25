import React from 'react';
import './info-bar.scss';

const InfoBar = ({ data }) => {
  
  return (
    <div className="info-bar-container">
      {
        data.map(obj => {
          return (
            <div className="info-bar-container-box" key={obj.id}>
              <p className="number">{obj.number}</p>
                <div className='left'>
                  <p>{obj.title}</p>
                  {obj.total && <p>{obj.total} MAD</p>}
                </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default InfoBar