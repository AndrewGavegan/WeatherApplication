
    const apiKey = "232ce0ece863b7a104e0cace8f3b4568";
    const searchbar = document.getElementById("searchbar");
    const infoSection = document.querySelector(".info");


                            searchbar.addEventListener('keyup', (e) => {
                            var cityName = e.target.value
                            apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
                           
                            response = fetch(apiURL)
                            .then (response => {
                                return response.json();
                            })
                            .then (data => {
                                generateHTML(data);
                            })

                            const generateHTML = (data) => {
                                console.log(data)
                                const html =`
                                <div id="conditions">Conditions: ${data.weather[0].main}</div>
                                <div id="temp">Temperature: ${Math.round(data.main.temp - 273)}c</div>
                                `
                                infoSection.innerHTML = html
                            }
                        })
                      
    








