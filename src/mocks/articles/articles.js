export const articles = [
    {
        'valencia': [
            {
                'id': 1,
                'reference': 101,
                'libelle': 'Jus Valencia Juper 1L',
                'unite': 12,
                'dernier': 3.33,
                'pv-pub': 5.00,
                
            },
            {
                'id': 10,
                'reference': 111,
                'libelle': 'Jus Valencia Nectar Abtal',
                'unite': 27,
                'dernier': 30.83,
                'pv-pub': 40.00,
                'pv-fidele': 38.00,
                'demi': 39.00
            }
        ]
    }, {
        'ifrane': [
            {
                'id': 1,
                'reference': 101,
                'libelle': 'Ain Ifrane 1L',
                'unite': 2,
                'dernier': 4.33,
                'pv-pub': 5.00,
                
            },
            {
                'id': 10,
                'reference': 111,
                'libelle': 'Ain Ifrane 0.33CL',
                'unite': 17,
                'dernier': 20.83,
                'pv-pub': 40.00,
                'pv-fidele': 38.00,
                'demi': 39.00
            }
        ]
    }
]

export const headers = [
    'id',
    'reference',
    'libelle',
    'unite',
    'dernier',
    'pv-pub',
    'pv-fidele',
    'demi',
]

export const articlesArray = articles.map((category) => Object.keys(category)[0]);
console.log(articlesArray);