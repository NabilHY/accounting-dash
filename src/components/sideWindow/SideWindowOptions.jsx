import React from 'react'

const SideWindowOptions = ({type}) => {
  let data;
  switch (type) {
    case "article":
      data = 'Articles'
      break;
      case "vendeur":
      data = 'Vendeur'
      break;
    case "secteurs":
      data = 'Secteurs'
      break;
    case "distribution":
      data = 'Distribution'
      break;
    default :
      break;
  }
  
  console.log(data);

  return (
    <div>{data}</div>
  )
}

export default SideWindowOptions;