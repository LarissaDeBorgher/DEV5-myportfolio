export default class App {
    constructor(api_key) {
        this.apiKey = api_key;
        this.getLocation();
        this.getMovies();
    }

    getLocation() {
        //console.log("Getting the location");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    getWeather(position) {
        //console.log(position);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        //console.log(lat, lon);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
               
            })
    }

    displayWeather(data) {
        const temp = data.current.temp_c;
        //console.log(temp);
        document.querySelector("h1").innerHTML = "Het is " + temp + " °C buiten";

        if(temp < 0) {
            this.movieid = "https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3"; 
            document.querySelector("p").innerHTML = "the perfect weather to get cozy and watch a romance anime";
        }
      
    }

    getMovies() {
       
        //console.log(lat, lon);
        const url = `https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe`; // is deze wel juist ? (link van een bepaalde film)

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
               
            })
    }}