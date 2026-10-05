
// Bike Rental System

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const bikes = {
  MountainBike: 150,
  RoadBike: 180,
  CityBike: 120,
  BMX: 100,
};

let rentals = [];

function showBikes() {
  console.log("\n===== AVAILABLE BIKES =====");

  for (const bike in bikes) {
    console.log(`${bike} - ₱${bikes[bike]} per hour`);
  }
}

function rentBike(name, bike, hours) {
  if (bikes[bike]) {
    const total = bikes[bike] * hours;

    rentals.push({
      name: name,
      bike: bike,
      hours: hours,
      total: total,
    });

    console.log("\nBike rented successfully!");
    console.log(`Rental Cost: ₱${total}`);
  } else {
    console.log("\nSorry, that bike is not available.");
  }
}

function displayRentals() {
  console.log("\n===== RENTAL SUMMARY =====");

  if (rentals.length === 0) {
    console.log("No bike rentals recorded.");
    return;
  }

  rentals.forEach((rental, index) => {
    console.log(`\nRental #${index + 1}`);
    console.log(`Customer: ${rental.name}`);
    console.log(`Bike: ${rental.bike}`);
    console.log(`Hours: ${rental.hours}`);
    console.log(`Total: ₱${rental.total}`);
  });

  console.log("\n==========================");
}

function askForRental() {
  showBikes();

  console.log("\n===== BIKE RENTAL =====");

  rl.question("Customer name: ", (name) => {
    rl.question("Bike type: ", (bike) => {
      rl.question("Number of hours: ", (hoursInput) => {
        const hours = Number(hoursInput);

        if (hours <= 0 || isNaN(hours)) {
          console.log("\nPlease enter a valid number of hours.");
          rl.close();
          return;
        }

        rentBike(name, bike, hours);

        rl.question(
          "\nAdd another rental? (yes/no): ",
          (answer) => {
            if (answer.toLowerCase() === "yes") {
              askForRental();
            } else {
              displayRentals();
              rl.close();
            }
          }
        );
      });
    });
  });
}

console.log("Welcome to the Bike Rental System!");

askForRental();