// https://covid-19-statistics.p.rapidapi.com/reports?date=2020-04-16&q=US%20Alabama&region_name=US&iso=USA&region_province=Alabama&city_name=Autauga", {

var dateEl = $('#txtDate');

fetch("https://covid-19-statistics.p.rapidapi.com/reports?" + new URLSearchParams({
    date: '2021-01-04',  // If the parameter holding the date value is called something other than 'date',
                         // the API will ignore the bogus name and return todays date
    q: 'US Texas',
    city_name: 'Austin'
}), {

    "method": "GET",
    "headers": {
        "x-rapidapi-key": "6cf81dc662msh786cba6e1120986p115a51jsndae74161c1cf",
        "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com"
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log(response.data[0])
        console.log("Active cases: " + response.data[0].active);
        console.log("Deaths: " + response.data[0].deaths);
        console.log("Fatality rate: " + response.data[0].fatality_rate * 100);
        console.log("Country: " + response.data[0].region.name);
        console.log("State: " + response.data[0].region.province);
    })
    .catch(err => {
        console.error(err);
    });