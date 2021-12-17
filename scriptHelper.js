// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById("missionTarget");
   div.innerHTML =`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">
                
                `;
 }
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    } else {
        return "Not a Number";
    }
           
}
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {    
    if ( fuelLevel < 10000){
        list.style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;             
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").style.color = "red"; 
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";    
    }else if (cargoLevel > 10000){
        list.style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;             
        document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
        document.getElementById("launchStatus").style.color = "red"; 
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";           
    }else{
        list.style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;            
        document.getElementById("launchStatus").style.color = "green"; 
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
    }
    
}

async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    const data = await planetsReturned.json();
    // console.log(data);
    return data;
}

function pickPlanet(planets) {
    let index = Math.round(Math.random() * planets.length);
    let selectedPlanet = planets[index];
    return selectedPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;