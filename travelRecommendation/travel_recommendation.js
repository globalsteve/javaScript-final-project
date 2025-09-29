const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');

function searchCountry() {

    const input = document.getElementById('destinationInput').value.toLowerCase();
    const resultDiv = document.getElementById('searchResults');

    console.log(input)

    const inputMap = new Map();
    inputMap.set('countries', 'countries');
    inputMap.set('country', 'countries');
    inputMap.set('beach', 'beaches');
    inputMap.set('beaches', 'beaches');
    inputMap.set('temples', 'temples');
    inputMap.set('temple', 'temples');

    const inputClean = inputMap.get(input)

    resultDiv.innerHTML = '';
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {

            console.log(data)

            if(inputClean == "countries"){

                const level = data.countries
                level.forEach(country => {

                    console.log(country)
                    const cities = country.cities

                    cities.forEach(city => {

                            const name = city.name;
                            const image = city.imageUrl;
                            const description = city.description;

                            console.log(city)
                            console.log(image)
                            console.log(name)
                            console.log(description)
                            resultDiv.innerHTML += `<img src="./${image}" alt="hjh">`;
                            resultDiv.innerHTML += `<h2>${name}</h2>`;
                            resultDiv.innerHTML += `<p>${description}</p> <br>`;
                        });
                    })
                }
                else if (inputClean == "beaches") {
                    const level = data.beaches
                    console.log(level)
                    level.forEach( beach => {

                        const name = beach.name;
                        const image = beach.imageUrl;
                        const description = beach.description;
                        console.log(name)
                        console.log(name)
                        console.log(name)
                        resultDiv.innerHTML += `<img src="./${image}" alt="hjh">`;
                        resultDiv.innerHTML += `<h2>${name}</h2>`;
                        resultDiv.innerHTML += `<p>${description}</p> <br>`;
                    }
   
                    )
                }
                else if (inputClean == "temples") {
                    const level = data.temples
                    console.log(level)
                    level.forEach( temple => {

                        const name = temple.name;
                        const image = temple.imageUrl;
                        const description = temple.description;
                        console.log(name)
                        console.log(name)
                        console.log(name)
                        resultDiv.innerHTML += `<img src="./${image}" alt="hjh">`;
                        resultDiv.innerHTML += `<h2>${name}</h2>`;
                        resultDiv.innerHTML += `<p>${description}</p> <br>`;
                    }
   
                    )
                }

                else {
                    resultDiv.innerHTML = 'Sorry, your search sucks....';
                }
            }
        )
        .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
    }

function clearSearch() {
    const resultDiv = document.getElementById('searchResults');
    resultDiv.innerHTML = '';
    document.getElementById('destinationInput').value = '';
}


btnSearch.addEventListener('click', searchCountry);
btnClear.addEventListener('click', clearSearch);