// Run with: node arrays-objects.js

const places = ["Goa", "Manali", "Kashmir", "Kerala"];

// Loop
console.log("Places to Visit:");
for (const place of places) {
    console.log("-", place);
}

// map — transform each item
const tripPlans = places.map((place) => `Trip to ${place}`);
console.log("\nTrip Plans:", tripPlans);

// filter — keep items that match a condition
const longDestinations = places.filter((place) => place.length > 5);
console.log("\nLong Destinations:", longDestinations);

// find — get first match
const foundPlace = places.find((place) => place.startsWith("K"));
console.log("\nStarts with K:", foundPlace);

// Object
const traveler = {
    name: "Varshitha",
    favoritePlace: "Kerala",
    visitPlaces: ["Goa", "Manali", "Kashmir"]
};

console.log("\nTraveler Name:", traveler.name);
console.log("Places Visited:", traveler.visitPlaces.join(", "));

// Destructuring
const { name, favoritePlace, visitPlaces } = traveler;

console.log(`\n${name}'s favorite place is ${favoritePlace}.`);
console.log("Places to Visit:", visitPlaces.join(", "));