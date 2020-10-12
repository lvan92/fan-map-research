const { MAX_FAN, MIN_FAN, MEDIUM_FAN } = require("./constants");

const FAN_DATA = {
    "zone":{
        NA: 280000,
        SA: 280000,
        EU: 280000,
        AF: 280000,
        RU: 280000,
        CN: 280000,
        ID: 280000,
        OC: 280000,
    } ,
    "sub":[
        {
            "idCountry": "US",
            "idCity": "THF",
            "number": MAX_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "ARA",
            "number": MIN_FAN-1,
        },
        {
            "idCountry": "US",
            "idCity": "BHA",
            "number": MIN_FAN,
        },
        {    
            "idCountry": "US",
            "idCity": "MMA",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "MBA",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "HSA",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "PNA",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "TSA",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "MSA",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "CLA",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "GDA",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "SDA",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "GBA",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "TPA",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "PRA",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "SPA",
            "number": MIN_FAN - 1,
        },
        {
            "idCountry": "US",
            "idCity": "LTA",
            "number": MIN_FAN - 1,
        },
        {
            "idCountry": "US",
            "idCity": "LAC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "SDC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "SJC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "SFC",
            "number": MIN_FAN + 100000,
        },
        {
            "idCountry": "US",
            "idCity": "FNC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "SMC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "LBC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "OLC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "BFC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "AHC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "SAC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "RSC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "STC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "CVC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "FMC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "IVC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "SBC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "MDC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "ONC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "FTC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "MVC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "GDC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "HBC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "SCC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "GGC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "SRC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "OSC",
            "number": MIN_FAN,
        },
        {
            "idCountry": "US",
            "idCity": "RCC",
            "number": MIN_FAN,
        },
    ],
    "total": MAX_FAN
}
export default FAN_DATA;