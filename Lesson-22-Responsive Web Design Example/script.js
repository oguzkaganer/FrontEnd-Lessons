var btnMenu = document.getElementById("btn-menu");
var nav = document.getElementsByTagName("nav").item(0);
btnMenu.addEventListener("click", function () {
  if (nav.style.display != "none") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});

var cities =
  '{"cities":[' +
  '{"countryCode":"TR","cityName":"İstanbul","cityImage":"tr-istanbul.jpg"},' +
  '{"countryCode":"TR","cityName":"Ankara","cityImage":"tr-ankara.jpg"},' +
  '{"countryCode":"TR","cityName":"İzmir","cityImage":"tr-izmir.png"}]}';

var jsonCities = JSON.parse(cities);

//section oluşturma işlemi
var main = document.getElementsByTagName("main").item(0);
main.innerHTML = "";

for (i = 0; i < jsonCities.cities.length; i++) {
  main.innerHTML +=
    '<section class="col-s-4 col-4">' +
    '<img class="img-city" src="img/' +
    jsonCities.cities[i].cityImage +
    '" alt="' +
    jsonCities.cities[i].cityName +
    '">' +
    '<div class="img-city-name">' +
    jsonCities.cities[i].cityName +
    "</div>" +
    "</section>";
}

function selectedCountry(country) {
  var main = document.getElementsByTagName("main").item(0);
  main.innerHTML = "";

  if (country.childNodes[0].nodeValue == "Türkiye") {
    cities =
      '{"cities":[' +
      '{"countryCode":"TR","cityName":"İstanbul","cityImage":"tr-istanbul.jpg"},' +
      '{"countryCode":"TR","cityName":"Ankara","cityImage":"tr-ankara.jpg"},' +
      '{"countryCode":"TR","cityName":"İzmir","cityImage":"tr-izmir.png"}]}';
  } else if (country.childNodes[0].nodeValue == "İtalya") {
    cities =
      '{"cities":[' +
      '{"countryCode":"IT","cityName":"Roma","cityImage":"it-roma.jpeg"},' +
      '{"countryCode":"IT","cityName":"Milano","cityImage":"it-milano.jpeg"},' +
      '{"countryCode":"IT","cityName":"Floransa","cityImage":"it-floransa.jpeg"}]}';
  } else if (country.childNodes[0].nodeValue == "Fransa") {
    cities =
      '{"cities":[' +
      '{"countryCode":"FR","cityName":"Paris","cityImage":"fr-paris.jpeg"},' +
      '{"countryCode":"FR","cityName":"Marsilya","cityImage":"fr-marsilya.jpeg"},' +
      '{"countryCode":"FR","cityName":"Nice","cityImage":"fr-nice.jpeg"}]}';
  }

  var jsonCities = JSON.parse(cities);

  //section oluşturma işlemi
  var i;
  for (i = 0; i < jsonCities.cities.length; i++) {
    main.innerHTML +=
      '<section class="col-s-4 col-4">' +
      '<img class="img-city" src="img/' +
      jsonCities.cities[i].cityImage +
      '" alt="' +
      jsonCities.cities[i].cityName +
      '">' +
      '<div class="img-city-name">' +
      jsonCities.cities[i].cityName +
      "</div>" +
      "</section>";
  }
}
