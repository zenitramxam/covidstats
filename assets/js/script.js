
var searchFormEl = document.querySelector('#Search-form');
var searchInputVal = document.querySelector('#cityname').value;
var formatInputVal = document.querySelector('#format-input').value;
var datePick = document.querySelector('#datetimepicker1')
var searchButttonEl = document.querySelector("#btnSearch");

searchButttonEl.addEventListener("click", searchFormSubmit);

function searchFormSubmit(event) 
{
    event.preventDefault();

    //if (formatInputVal === "covidStats") {
    
    console.log("Today's date: " + datePick.value);
    fetch("https://covid-19-statistics.p.rapidapi.com/reports?" + new URLSearchParams({
      //  date:  moment().format('YYYY-MM-DD'),
      //2021-06-10
        date: datePick.value,  
        city_name: 'Austin',
        region_province: "Texas",

        /*  PARAMETERS:
            "date": "2020-04-16",            
            city_name": "Autauga",
            "region_province": "Alabama"
        */

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

    // }
    // else {

    // }


    fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-fda-approved-vaccines", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "1eed7d45a6msh68ac90440e53584p1e89eejsnf0b5f25e3f56",
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        })
    fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-fda-approved-treatment", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "1eed7d45a6msh68ac90440e53584p1e89eejsnf0b5f25e3f56",
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
}