const places = ["Goa", "Rajasthan", "Kashmir", "Kerala"];

const tripPlans = places.map((place) => `visit ${place}`);
console.log("\nTravel places:", tripPlans);

const longDestinations = places.filter((place) => place.length > 6);
console.log("\nLong Destinations:", longDestinations);

const traveler = {
    name: "Varshitha",
    seatno: "A9",
    transport: "flight",
};
console.log("Name: " + traveler.name  + " Parupally!");

const {seatno, transport} = traveler;
console.log(`${traveler.name} is traveling by ${transport} and her seat number is ${seatno}.`);

