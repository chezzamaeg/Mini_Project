
// Pet Care Schedule

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let pets = [];

function addPet(name, type, care, schedule) {
  pets.push({
    name: name,
    type: type,
    care: care,
    schedule: schedule,
  });

  console.log("\nPet care schedule added successfully!");
}

function displaySchedule() {
  console.log("\n===== PET CARE SCHEDULE =====");

  if (pets.length === 0) {
    console.log("No pet schedules available.");
    return;
  }

  pets.forEach((pet, index) => {
    console.log(`\nPet #${index + 1}`);
    console.log(`Name: ${pet.name}`);
    console.log(`Type: ${pet.type}`);
    console.log(`Care Activity: ${pet.care}`);
    console.log(`Schedule: ${pet.schedule}`);
  });

  console.log("\n=============================");
}

function askForPet() {
  console.log("\n===== ADD PET CARE =====");

  rl.question("Pet name: ", (name) => {
    rl.question("Pet type: ", (type) => {
      rl.question("Care activity: ", (care) => {
        rl.question("Schedule: ", (schedule) => {
          addPet(name, type, care, schedule);

          rl.question(
            "\nAdd another pet? (yes/no): ",
            (answer) => {
              if (answer.toLowerCase() === "yes") {
                askForPet();
              } else {
                displaySchedule();
                rl.close();
              }
            }
          );
        });
      });
    });
  });
}

console.log("Welcome to the Pet Care Scheduler!");

askForPet();