function fetchcountryData(){
    let countryName=country_name.value

    fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`).then(res=>res.json()).then(data=>populateValues(data))
}

function populateValues(country){
console.log(country[0]);
let countryName=country[0].name;
let countryFlag=country[0].flag;
let countryPopulation=country[0].population;
let countryCurrency=country[0].currencies[0].name;
let countryCurrencySymbol=country[0].currencies[0].symbol;
let countryCapital=country[0].capital;
// console.log(countryName,countryFlag,countryPopulation,countryCurrency,countryCurrencySymbol,countryCapital);
let html_data=``
html_data+=`<div class="card" style="width: 18rem;">
<img src="${countryFlag}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">countryName:${countryName}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${countryPopulation}</li>
  <li class="list-group-item">${countryCurrency}</li>
  <li class="list-group-item">${countryCurrencySymbol}</li>
  <li class="list-group-item">${countryCapital}</li>
</ul>

</div>`
document.querySelector("#result").innerHTML=html_data
}