
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

// searchButttonEl.addEventListener("click", searchFormSubmit);
// vacButton.addEventListener('click', approvedVacs);
// treButton.addEventListener('click', approvedTreats);
var mainMenu = document.getElementById('firstmenu');
var newDiv2 = document.getElementById("myDiv2");
var myDiv = document.getElementById('myDiv');
var newText = document.createElement('TEXTAREA');
var stateButton = document.createElement('button');
var calender = document.querySelector('.container');
var newText2 = document.createElement('textarea');
var cityButton2 = document.createElement('button');

function displayDynamic() {

    myDiv.innerHTML = '';
    myDiv2.innerHTML = '';
    if (mainMenu.value == "stats") {
        myDiv.appendChild(newText);
        myDiv.appendChild(stateButton);
        stateButton.textContent = 'Enter';
        newText.setAttribute('placeholder', 'Enter a state');
        stateButton.setAttribute("style", "background-color: red;", "color: white;");
        stateButton.addEventListener("click", function createCity(event) {
            event.preventDefault();
            stateButton.remove();
            console.log('add city input');

            cityButton2.textContent = 'Enter';
            newText2.setAttribute('placeholder', 'Enter a city');
            newDiv2.appendChild(newText2);
            newDiv2.appendChild(cityButton2);
            cityButton2.setAttribute("style", "background-color: red;", "color: white;");
            cityButton2.addEventListener("click", function unhideDate(event) {
                event.preventDefault();
                cityButton2.remove();
                console.log('unhide date widget');
                calender.removeAttribute('id');
                $("#datetimepicker1").on("click", function (event) {
                    event.preventDefault();
                    console.log('confirm date')
                    var searchAPIbutton = document.createElement('button');
                    var widgetdiv = document.getElementById('myDiv3');
                    widgetdiv.appendChild(searchAPIbutton);
                    searchAPIbutton.textContent = "Search Stats";
                    searchAPIbutton.addEventListener('click', searchFormSubmit);
                })
            })
        })
    }
    else if (mainMenu.value == "vaccine") {
        document.querySelector('.container').id = 'hidden';
        var searchVaccineButton = document.createElement('button');
        searchVaccineButton.textContent = 'Search';
        searchVaccineButton.addEventListener('click', approvedVacs)
        myDiv.appendChild(searchVaccineButton);
    }
    else if (mainMenu.value == "--") {
        return;
    }
}


// function displayDynamic() {
//     var mainMenu= document.getElementById('firstmenu');
//     var newDiv2= document.getElementById("myDiv2");
//     var myDiv= document.getElementById('myDiv');
//     var newText= document.createElement('TEXTAREA');
//     var newButton= document.createElement('button');
//     var calender= document.querySelector('.container');
//     myDiv.innerHTML='';
//     myDiv2.innerHTML='';

//     if (mainMenu.value == "stats") {
//         myDiv.appendChild(newText);
//         myDiv.appendChild(newButton);
//         newButton.textContent= 'Enter';
//         newText.textContent ="Enter State";
//         newButton.setAttribute("style", "background-color: red;", "color: white;");
//           newButton.addEventListener("click", function createCity(event) {    
//             event.preventDefault();
//               newButton.remove();
//                 console.log('add city input');
//             var newText2= document.createElement('textarea');
//             var newButton2= document.createElement('button');
//                 newButton2.textContent= 'Enter';
//                 newText2.textContent ="Enter City";
//                 newDiv2.appendChild(newText2);
//                 newDiv2.appendChild(newButton2);
//                 newButton2.setAttribute("style", "background-color: red;", "color: white;");
//                   newButton2.addEventListener("click", function unhideDate(event) {
//                       event.preventDefault();
//                       newButton2.remove();
//                       console.log('unhide date widget');
//                       calender.removeAttribute('id');
//                   })
//         })

//     }
//     else if (mainMenu.value == "vaccine") {
//         //document.querySelector('.container').id= 'hidden';
//         newButton.textContent= 'Search';
//         myDiv.appendChild(newButton);
//     }
//     else if (mainMenu.value == "--") {
//         return;
//     }
// }



function displayDynamic() {
    var mainMenu= document.getElementById('firstmenu');
    var newDiv2= document.getElementById("myDiv2");
    var myDiv= document.getElementById('myDiv');
    var newText= document.createElement('TEXTAREA');
    var newButton= document.createElement('button');
    var calender= document.querySelector('.container');
    myDiv.innerHTML='';
    myDiv2.innerHTML='';

    if (mainMenu.value == "stats") {
        myDiv.appendChild(newText);
        myDiv.appendChild(newButton);
        newButton.textContent= 'Enter';
        newText.textContent ="Enter State";
        newButton.setAttribute("style", "background-color: red;", "color: white;");
          newButton.addEventListener("click", function createCity(event) {    
            event.preventDefault();
              newButton.remove();
                console.log('add city input');
            var newText2= document.createElement('textarea');
            var newButton2= document.createElement('button');
                newButton2.textContent= 'Enter';
                newText2.textContent ="Enter City";
                newDiv2.appendChild(newText2);
                newDiv2.appendChild(newButton2);
                newButton2.setAttribute("style", "background-color: red;", "color: white;");
                  newButton2.addEventListener("click", function unhideDate(event) {
                      event.preventDefault();
                      newButton2.remove();
                      console.log('unhide date widget');
                      calender.removeAttribute('id');
                  })
        })
        
    }
    else if (mainMenu.value == "vaccine") {
        //document.querySelector('.container').id= 'hidden';
        newButton.textContent= 'Search';
        myDiv.appendChild(newButton);
    }
    else if (mainMenu.value == "--") {
        return;
    }
}


function searchFormSubmit(event) {
    event.preventDefault();

    //if (formatInputVal === "covidStats") {

    console.log("Today's date: " + datePick.value);
    console.log(newText.value);
    console.log(newText2.value);
    fetch("https://covid-19-statistics.p.rapidapi.com/reports?" + new URLSearchParams({
        //  date:  moment().format('YYYY-MM-DD'),
        //2021-06-10
        date: datePick.value,
        city_name: newText2.value,
        region_province: newText.value

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
            console.log(response);
            if (response.data.length == 0)
                cityAndDateEl.textContent = "No data available for " + newText2.value + ', ' + newText.value;
            else {
                cityAndDateEl.textContent = response.data[0].region.cities[0].name + ', ' + response.data[0].region.province + ': ' + response.data[0].date;
                confirmedEl.textContent = 'Confirmed cases: ' + response.data[0].region.cities[0].confirmed;
                deathsEl.textContent = 'Deaths: ' + response.data[0].region.cities[0].deaths;
                recoveredEl.textContent = 'Recovered: ' + response.data[0].recovered;
                activeEl.textContent = 'Active cases: ' + response.data[0].active;
                fatalityEl.textContent = 'Fatality rate: ' + (response.data[0].fatality_rate * 100);
                fatalityEl.textContent = fatalityEl.textContent + '%';
            }
        })
        .catch(err => {
            console.error(err);
        });

}

function approvedVacs(event) {
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
            for (var i = 0; i < response.length; i++) {
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

function approvedTreats(event) {
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
            for (var i = 0; i < response.length; i++) {
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

