var searchFormEl = document.querySelector('#Search-form');
var cityInputVal = document.querySelector('#cityname');
var stateInputVal = document.querySelector('#statename');
var datePick = document.querySelector('#datetimepicker1')
var searchButttonEl = document.querySelector("#btnSearch");
var cityAndDateEl = document.querySelector("#cityAndDate");
var confirmedEl = document.querySelector("#confirmedCases");
var deathsEl = document.querySelector("#deaths");
var recoveredEl = document.querySelector("#recovered");
var activeEl = document.querySelector("#activeCases");
var fatalityEl = document.querySelector('#fatalityRate');
var vacButton = document.querySelector('#btnVac');
var treButton = document.querySelector('#btnTreat');

var treResearcherEl = document.querySelector('#treResearcher');
var treCategoryEl = document.querySelector('#treCategory');
var trePhaseEl = document.querySelector('#trePhase');
var treNextStepsEl = document.querySelector('#treNextSteps');
var treDescriptionEl = document.querySelector('#treDescription');
var treFDAApprovedEl = document.querySelector('#treFDAApproved');

var vacResearcherEl = document.querySelector('#vacResearcher');
var vacCategoryEl = document.querySelector('#vacCategory');
var vacPhaseEl = document.querySelector('#vacPhase');
var vacNextStepsEl = document.querySelector('#vacNextSteps');
var vacDescriptionEl = document.querySelector('#vacDescription');
var vacFDAApprovedEl = document.querySelector('#vacFDAApproved');

searchButttonEl.addEventListener("click", searchFormSubmit, function() {
    var key = statename.value;
    console.log(key);
    if (key && value){
        localStorage.setItem(key);
    }
});
vacButton.addEventListener('click', approvedVacs);
treButton.addEventListener('click', approvedTreats);

    // console.log(localStorage)

function searchFormSubmit(event) {
    event.preventDefault();

    //if (formatInputVal === "covidStats") {
        
    console.log("Today's date: " + datePick.value);
    localStorage.setItem("datePick", datePick.value);
    console.log(stateInputVal.value);
    localStorage.setItem("stateInputVal", stateInputVal.value);
    console.log(cityInputVal.value);
    localStorage.setItem("cityInputVal", cityInputVal.value);
    fetch("https://covid-19-statistics.p.rapidapi.com/reports?" + new URLSearchParams({
        //  date:  moment().format('YYYY-MM-DD'),
        //2021-06-10
        date: datePick.value,        
        city_name: cityInputVal.value,
        region_province: stateInputVal.value

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
            cityAndDateEl.textContent = response.data[0].region.cities[0].name + ', ' + response.data[0].region.province + ': '+  response.data[0].date;
            confirmedEl.textContent = 'Confirmed cases: ' + response.data[0].region.cities[0].confirmed;
            deathsEl.textContent = 'Deaths: ' + response.data[0].region.cities[0].deaths;
            recoveredEl.textContent = 'Recovered: ' + response.data[0].recovered;
            activeEl.textContent = 'Active cases: ' + response.data[0].active;
            fatalityEl.textContent = 'Fatality rate: ' +  (response.data[0].fatality_rate * 100);
            fatalityEl.textContent = fatalityEl.textContent + '%';

        })
        .catch(err => {
            console.error(err);
        });

}

function approvedVacs(event){
    event.preventDefault();
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
        for(var i = 0; i < response.length; i++){
            vacResearcherEl.textContent = 'Researcher: ' + response[i].developerResearcher;
            vacCategoryEl.textContent = 'Cateegory: ' + response[i].category;
            vacPhaseEl.textContent = 'Phase: ' + response[i].phase;
            vacNextStepsEl.textContent = 'Next steps: ' + response[i].nextSteps;
            vacDescriptionEl.textContent = 'Description: ' + response[i].description;
            vacFDAApprovedEl.textContent = 'FDA Approved: ' + response[i].FDAApproved;
        }

    })
    .catch(err => {
        console.error(err);
    })
}

function approvedTreats(event){
    event.preventDefault();    
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
        for(var i = 0; i < response.length; i++){
            treResearcherEl.textContent = 'Researcher: ' + response[i].developerResearcher;
            treCategoryEl.textContent = 'Cateegory: ' + response[i].category;
            trePhaseEl.textContent = 'Phase: ' + response[i].phase;
            treNextStepsEl.textContent = 'Next steps: ' + response[i].nextSteps;
            treDescriptionEl.textContent = 'Description: ' + response[i].description;
            treFDAApprovedEl.textContent = 'FDA Approved: ' + response[i].FDAApproved;
        }
    })
    .catch(err => {
        console.error(err);
    });
}

console.log(localStorage)