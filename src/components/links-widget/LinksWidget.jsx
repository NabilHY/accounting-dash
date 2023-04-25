import React from 'react';
import "./links-widgets.scss";

const LinksWidget = ({ type }) => {

    let data;

    const formatNumber = (num) => {
        const prefix = num < 0 ? "-" : "";
        num = Math.abs(num);
        if (num >= 1000000) {
          return prefix + (num / 1000000).toFixed(1) + "M";
        } else if (num >= 1000) {
          return prefix + (num / 1000).toFixed(1) + "K";
        } else {
          return prefix + num.toString();
        }
      }
    
    switch (type) {
        case 'vente':
            data = {
                title1: "Mes Vente",
                title2: "Soldes clients",
                total1: 1924839,
                total2: 77220,
                links: [
                    {
                        title: 'Situation clients'
                    }, {
                        title: 'Journal clients',
                    }, {
                        title: 'Analyse des Marges'
                    }, {
                        title: 'Analyse des commerciaux',
                    }, {
                        title: "Analyse des chiffres d'affaires",
                    }
                ],
            }
            break;
            case 'tresorerie':
            data = {
                title1: "Espèces",
                title2: "Banque",
                title3: "Trésorerie",
                total1: 6330,
                total2: -702015,
                links: [
                    {
                        title: 'Relevé bancaire'
                    }, {
                        title: 'Contrôle bancaire',
                    }, {
                        title: 'Portefeuille'
                    }
                ],
            }
            break;
            case 'achats':
                data = {
                    title1: "Mes Achat",
                    title2: "Solde fournisseur",
                    total1: 1350000,
                    total2: 843380,
                    links: [
                        {
                            title: 'Situation fournisseur',
                        }, {
                            title: 'Journal fournisseurs',
                        }, {
                            title: 'Analyse des PA/Couts'
                        }, {
                            title: 'Analyse des achats/articles'
                        }, {
                            title: 'Analyse des achats/frs'
                        }
                    ],
                }
                break;
        default:
            break;
    }

  return (
    <div className="links-widget">
    <div className="right">
      <span className="title">{data.title1}</span>
      <span className="counter">
        {formatNumber(data.total1)} Dirhams
      </span>
      <span className="title">{data.title2}</span>
      <span className="counter">{formatNumber(data.total2)} Dirhams</span>
    </div>
          <div className="left">
              {
                data.title3 ?? data.title3
              }
              <ul className="links">
                  {
                      data.links.map((link) => {
                          return (
                              <li key={link.title}>
                                  <a href={link.title}>{link.title}</a>
                              </li>
                          )
                      })
                  }
                </ul>
    </div>
  </div>
  )
}

export default LinksWidget