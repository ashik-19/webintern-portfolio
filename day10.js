async function getCountry() {

    const country = document.getElementById("countryInput").value;
    const resultDiv = document.getElementById("result");
    const loading = document.getElementById("loading");

    loading.textContent = "Loading data.." ;
    resultDiv.innerHTML = "";

 try{
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);

    if(!response.ok) {
        throw new Error("Country not found");
    }

        const data = await response.json();   // ⭐ VERY IMPORTANT
        const countryData = data[0];  

        resultDiv.innerHTML = `<h2>${countryData.name.common}</h2>
            <img src="${countryData.flags.png}" width="150">
            <p><b>Capital:</b> ${countryData.capital}</p>
            <p><b>Region:</b> ${countryData.region}</p>
            <p><b>Population:</b> ${countryData.population}</p>`;
    } catch(error) {
        resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }finally{
        loading.textContent = "";
    }
 }
