const apiKey = "7fbda1c0de54ea9352d77a19da34cdc3";

const displayOnScreen = (data) => {
    console.log(data);
    const { name, main, weather } = data;

    document.querySelector(".location").innerHTML = `<i class="fa-solid fa-location-dot"></i>Tempo em ${name}`;
    document.querySelector(".temperature").innerHTML = `${Math.floor(main.temp)}°C`;
    document.querySelector(".humidity").innerHTML = `<i class="fa-solid fa-droplet"></i>Umidade de ar ${main.humidity}%`;
    document.querySelector(".description").innerHTML = weather[0].description;
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;
};

const searchCity = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`);
        const data = await response.json();
        displayOnScreen(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const clickOnButton = () => {
    const city = document.querySelector(".city-input").value;
    searchCity(city);
};
