
// Package Tracker

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let packages = [];

function addPackage(trackingNumber, item, destination) {
  packages.push({
    trackingNumber: trackingNumber,
    item: item,
    destination: destination,
    status: "Processing",
  });

  console.log("\nPackage added successfully!");
}

function updateStatus(trackingNumber, newStatus) {
  const packageItem = packages.find(
    (pkg) => pkg.trackingNumber === trackingNumber
  );

  if (packageItem) {
    packageItem.status = newStatus;
    console.log("\nPackage status updated successfully!");
  } else {
    console.log("\nPackage not found.");
  }
}

function displayPackages() {
  console.log("\n===== PACKAGE TRACKER =====");

  if (packages.length === 0) {
    console.log("No packages recorded.");
    return;
  }

  packages.forEach((pkg, index) => {
    console.log(`\nPackage #${index + 1}`);
    console.log(`Tracking Number: ${pkg.trackingNumber}`);
    console.log(`Item: ${pkg.item}`);
    console.log(`Destination: ${pkg.destination}`);
    console.log(`Status: ${pkg.status}`);
  });

  console.log("\n===========================");
}

function askForPackage() {
  console.log("\n===== ADD PACKAGE =====");

  rl.question("Tracking number: ", (trackingNumber) => {
    rl.question("Item: ", (item) => {
      rl.question("Destination: ", (destination) => {
        addPackage(trackingNumber, item, destination);

        rl.question(
          "\nAdd another package? (yes/no): ",
          (answer) => {
            if (answer.toLowerCase() === "yes") {
              askForPackage();
            } else {
              askForUpdate();
            }
          }
        );
      });
    });
  });
}

function askForUpdate() {
  displayPackages();

  rl.question(
    "\nDo you want to update a package status? (yes/no): ",
    (answer) => {
      if (answer.toLowerCase() === "yes") {
        rl.question("Enter tracking number: ", (trackingNumber) => {
          rl.question(
            "New status (Processing/Shipped/Out for Delivery/Delivered): ",
            (newStatus) => {
              updateStatus(trackingNumber, newStatus);

              displayPackages();
              rl.close();
            }
          );
        });
      } else {
        displayPackages();
        rl.close();
      }
    }
  );
}

console.log("Welcome to the Package Tracker!");

askForPackage();