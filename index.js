// Code your solution here
const drivers = ["Albert", "Michael", "Joseph", "William", "Henry"]

// findMatching function
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
console.log(findMatching(drivers, 'Albert'));



// fuzzyMatch function
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}
console.log(fuzzyMatch(drivers, 'Mi'));
console.log(fuzzyMatch(drivers, 'Jo'));
console.log(fuzzyMatch(drivers, 'Wi'));




const matchDrivers = [ 
    {
        name: "William",
        age: 32,
        address: "Nairobi"
    },
    {
        name: "Joseph",
        age: 28,
        address: "Mombasa"
    },
    {
        name: "Albert",
        age: 36,
        address: "Kisumu"
    },
    {
        name: "Michael",
        age: 39,
        address: "Nakuru"
    }
];
// matchName function
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}
// console.log(matchName(drivers, 'Michael'));

