var ourLocation;
var view;
var map;

	// Initalize things here
function init() {
	ourLocation = ol.proj.fromLonLat([1006.100, 40.85]);
	view = new ol.View({
		center: ourLocation,
		zoom: 12
	});

	map = new ol.Map({
		target: 'map',
		layers: [
		  new ol.layer.Tile({
		    source: new ol.source.OSM()
		  })
		],
		loadTilesWhileAnimating: true,
		view: view
	});
}

function panHome() {
	view.animate({
		center: ourLocation, // "Home" Location
		duration: 2000  // Two seconds
	});
}

function panToCountry() {
	var countryName = document.getElementById("country-name").value;

	if(countryName === "") {
	 	alert("You didn't enter a country name!");
	 	return;
	}

	var query = "https://restcountries.eu/rest/v2/name/"+countryName+"?fullText=true"

	query = query.replace(/ /g, "%20")

	var countryRequest = new XMLHttpRequest();
	countryRequest.open('GET', query, false);

	countryRequest.send();

	// only pan if the information was correct:
	if(countryRequest.readyState != 4 || countryRequest.status != 200 || countryRequest.responseText === "") {
	 	window.console.error("Request had an error!");
	 	return;
	}

	//copy this output into a text file and see where the latitude and longitude live
	var countryInformation = JSON.parse(countryRequest.responseText);
	var lat = countryInformation[0].latlng[0];
	var lon = countryInformation[0].latlng[1];

	window.console.log(countryName + ": lon " + lon + " & lat " + lat);
	var location = ol.proj.fromLonLat([lon, lat]);

	view.animate({
		center: location, // Location
		duration: 2000  // Two seconds
	});
}

window.onload = init;
