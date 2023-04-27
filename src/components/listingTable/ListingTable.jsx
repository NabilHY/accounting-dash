import React from 'react'

const ListingTable = ({ array }) => {
  
    const NestedObjectList = ({ array }) => {
        const articlesArray = array.map((category) => Object.keys(category)[0]);
        console.log(articlesArray);
      
        const nestedArticles = array.map((item) => {
          return array[articlesArray.indexOf(item)][item].map((article) => {
            return Object.values(article);
          });
        });
    }

    return (
    <div>
            {array.map((category, index) => {
                return (
                <div key={index}>
                    <h4>{array[index]}</h4>3
                    <ul>
                    {category.map((article, index) => {
                        return (
                        <li key={index}>
                            <ul>
                            {article.map((detail, index) => {
                                return <li key={index}>{detail}</li>;
                            })}
                            </ul>
                        </li>
                        );
                    })}
                    </ul>
                </div>
                );
            })}
    </div>
  )
}

export default ListingTable;