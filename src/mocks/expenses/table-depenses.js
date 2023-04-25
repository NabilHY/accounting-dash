export const data = [
    {
        rowName: "Gasoil",
        2021: 4483.59,
        2022: 5691.46,
        2023: 5679.37,
    },
    {
        rowName: "Eaux/Electricite",
        2021: 7718.65,
        2022: 3907.39,
        2023: 2314.26,
    },
    {
        rowName: "Administration",
        2021: 1040.05,
        2022: 3750.49,
        2023: 8740.71,
    },
    {
        rowName: "Frais bnacaires",
        2021: 9866.04,
        2022: 9671.84,
        2023: 8212.54,
    },
    {
        rowName: "Salaires",
        2021: 1728.66,
        2022: 9886.09,
        2023: 113.52,
    },
    {
        rowName: "Transport",
        2021: 8656.40,
        2022: 7958.16,
        2023: 4087.40,
    },
    {
        rowName: "Loyer",
        2021: 4871.42,
        2022: 2915.05,
        2023: 2367.17,
    },
    {
        rowName: "Reparation Vehicule",
        2021: 7746.97,
        2022: 229.82,
        2023: 1833.57,
    },
    {
        rowName: "CNSS",
        2021: 8009.56,
        2022: 2574.83,
        2023: 6874.66,
    },
    {
        rowName: "La perception",
        2021: 8895.21,
        2022: 3154.18,
        2023: 3239.52,
    },
    {
        rowName: "Gasoil Cuelma",
        2021: 2109.39,
        2022: 1991.23,
        2023: 57.86,        
  },
    {
        rowName: "Parking",
        2021: 6488.37,
        2022: 4476.94,
        2023: 1537.90,
    },
    {
        rowName: "Gasoil exterieur",
        2021: 690.25,
        2022: 4108.62,
        2023: 4952.74,
    },
    {
        rowName: "Reception",
        2021: 8018.03,
        2022: 2101.32,
        2023: 2826.81,
    },
    {
        rowName: "Infraction",
        2021: 2009.31,
        2022: 4642.31,
        2023: 5290.53,
    },
    {
        rowName: "Lavage",
        2021: 6792.21,
        2022: 2448.05,
        2023: 3634.63,
    },
    {
        rowName: "Frais Autoroute",
        2021: 8451.13,
        2022: 3575.56,
        2023: 4236.97,
    },
    {
        rowName: "Hotel Laarach Et Loyer",
        2021: 7495.34,
        2022: 3712.58,
        2023: 2104.52,
    },
    {
        rowName: "Gasoil Laarache",
        2021: 1772.54,
        2022: 3950.81,
        2023: 6259.72,
    },
    {
        rowName: "Reparation Laarach",
        2021: 6925.23,
        2022: 8660.61,
        2023: 3531.34,
    },
    {
        rowName: "Fourniture",
        2021: 9718.73,
        2022: 7766.09,
        2023: 4295.44,
    }
]

export const headers = [ 
    new Date().getFullYear() - 2,
    new Date().getFullYear() - 1,
    new Date().getFullYear(),
]

export const years = Object.keys({
    '2021': 0,
    '2022': 0,
    '2023': 0,
})

export const latestNumbers = () => {
    const year = new Date().getFullYear();
    const dataArray =  data.map((obj) => {
        return obj[year];
    })
    return dataArray;
}

export const labels = () => {
    const dataArray =  data.map((obj) => {
        return obj['rowName'];
    })
    return dataArray;
}