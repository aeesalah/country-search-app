document.addEventListener("DOMContentLoaded", function(){

    var countryInp = document.getElementById("country-inp");
    var searchBtn = document.getElementById("btnSearch");

    //endpoint

    //add a click event to the search button

    searchBtn.addEventListener("click", function() {

        let countryName = countryInp.value;

        let endpoint = `https://restcountries.com/v3.1/name/${countryName}`

         //fetch from the API

    fetch(endpoint).then((response) => response.json())
    .then((data) => {console.log(data)
    
    result.innerHTML = `<img src="${data[0].flags.svg}" alt="flag" class="flag-img"/>
    
    <h2>${data[0].name.common}</h2>

    <div class="wrapper">

    <div="data-wrapper">

    <h3>population: ${data[0].population}</h3>

    </div>

    <h3>capital: ${data[0].capital[0]}</h3>
    </div>

    <h3>continent: ${data[0].region}</h3>
    
    `;
});

    })

   
})


//https://restcountries.com/v3.1/name/{name}

//<h3>${data[0].capital[0]}</h3>