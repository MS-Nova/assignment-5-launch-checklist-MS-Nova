// Write your JavaScript code here!

window.addEventListener("load", function() {
    let document = window.document
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems"); 
        // console.log(pilot.value);
        // console.log(copilot.value);
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) ==="Empty") {
            alert("All fields are required!");
             event.preventDefault();
             document.getElementById("faultyItems").style.visibility = "hidden";        
        }
        if (validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number"){
            alert ("Make sure to enter valid information for each field!");
            event.preventDefault();
            document.getElementById("faultyItems").style.visibility = "hidden"; 
        }
        if (validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number") {
            alert ("Make sure to enter valid information for each field!");
            event.preventDefault();
            document.getElementById("faultyItems").style.visibility = "hidden";         
        }
        event.preventDefault();
    });
   
    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   let pickedPlanet = pickPlanet(listedPlanets);

   addDestinationInfo(window.document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image)
    })
   
});