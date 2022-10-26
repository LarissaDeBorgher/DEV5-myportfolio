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
            //Whisper of the Heart
        }
        else if (temp >= 0 && temp < 5) {
            this.movieid = "https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c"; 
            document.querySelector("p").innerHTML = "Once you see this movie, You will not be able to get enough of it";
            //	Spirited Away
        }
        else if (temp >= 5 && temp < 10) {
            this.movieid = "https://ghibliapi.herokuapp.com/films/cd3d059c-09f4-4ff3-8d63-bc765a5184fa"; 
            document.querySelector("p").innerHTML = "Get warm with this adventure movie";
            // Howl's Moving Castle
        }
        else if (temp >= 10 && temp < 15) {
            this.movieid = "https://ghibliapi.herokuapp.com/films/790e0028-a31c-4626-a694-86b7a8cada40"; 
            document.querySelector("p").innerHTML = "Perfect movie to relax.";
            //Āya to Majo
        }
        else if (temp >= 15 && temp < 20) {
            this.movieid = "https://ghibliapi.herokuapp.com/films/d868e6ec-c44a-405b-8fa6-f7f0f8cfb500"; 
            document.querySelector("p").innerHTML = "Get some drinks and enjoy the movie";
            //"The Red Turtle
        }
        else if (temp >= 20 && temp < 25) {
            this.movieid = "https://ghibliapi.herokuapp.com/films/578ae244-7750-4d9f-867b-f3cd3d6fecf4"; 
            document.querySelector("p").innerHTML = "What about watching this movie with your friends?";
            //The Tale of the Princess Kaguya
        }
        else if (temp >= 25 && temp < 30) {
            this.movieid = "https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6"; 
            document.querySelector("p").innerHTML = "This is the perfect movie for on a hot summer night";
            //Arrietty
        }
        else if (temp >= 30) {
            this.movieid = "https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786";
            document.querySelector("p").innerHTML = "it's too hot outside, so why not watch a movie?";
            //Ponyo
        }
    }

    getMovies() {
       
        //console.log(lat, lon);
        const url = `https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe`; 

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
               
            })
    }}