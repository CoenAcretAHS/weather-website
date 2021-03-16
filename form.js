function get_vars() {
		let lat = document.getElementsByName("latitude")[0].value
		let lon = document.getElementsByName("longitude")[0].value
		let weatherData;
fetch("https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=" + lon + "&lat=" + lat, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "771be1521amshc504b5ff9fd310ap116d26jsn235e05170252",
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
	}
})
		
		.then(response => response.json())
		.then(data => {
			document.getElementById("name").innerHTML=data.data[0].city_name;
			document.getElementById("app_temp").innerHTML=data.data[0].app_temp;
			document.getElementById("temp").innerHTML=data.data[0].temp;
			   
});
			
alert("Weather data fetched!")
		;}