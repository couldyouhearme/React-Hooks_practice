

// const API_KEY = 'N2M5YxSODUjwTEDxUj4lilGe7PiufL5g'
const BASE_URL = "https://api.apilayer.com/exchangerates_data/latest"

var myHeaders = new Headers();
myHeaders.append("apikey", "N2M5YxSODUjwTEDxUj4lilGe7PiufL5g");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

// useEffect(() => {
//     // fetch(BASE_URL, requestOptions)
//     //   .then(res => res.json())
//     //   .then(data => {
//     //     const firstCurrency = Object.keys(data.rates)[0]
//     //     setCurrencyOptions([data.base, ...Object.keys(data.rates)])
//     //     setFrom(data.base)
//     //     setTo(firstCurrency)
//     //   })
//     //   .catch(err => console.log('err', err));
// }, [])
  
// fetch("https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}", requestOptions)