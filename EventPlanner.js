
// Event Planner

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let events = [];

function addEvent(name, date, time, location) {
  events.push({
    name: name,
    date: date,
    time: time,
    location: location,
  });

  console.log("\nEvent added successfully!");
}

function displayEvents() {
  console.log("\n===== EVENT SCHEDULE =====");

  if (events.length === 0) {
    console.log("No events scheduled.");
    return;
  }

  events.forEach((event, index) => {
    console.log(`\nEvent #${index + 1}`);
    console.log(`Name: ${event.name}`);
    console.log(`Date: ${event.date}`);
    console.log(`Time: ${event.time}`);
    console.log(`Location: ${event.location}`);
  });

  console.log("\n==========================");
}

function askForEvent() {
  console.log("\n===== ADD NEW EVENT =====");

  rl.question("Event name: ", (name) => {
    rl.question("Event date: ", (date) => {
      rl.question("Event time: ", (time) => {
        rl.question("Event location: ", (location) => {
          addEvent(name, date, time, location);

          rl.question(
            "\nAdd another event? (yes/no): ",
            (answer) => {
              if (answer.toLowerCase() === "yes") {
                askForEvent();
              } else {
                displayEvents();
                rl.close();
              }
            }
          );
        });
      });
    });
  });
}

console.log("Welcome to the Event Planner!");

askForEvent();