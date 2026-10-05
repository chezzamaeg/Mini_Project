
// Gift Planner

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let gifts = [];

function addGift(recipient, occasion, gift, budget) {
  gifts.push({
    recipient: recipient,
    occasion: occasion,
    gift: gift,
    budget: budget,
  });

  console.log("\nGift plan added successfully!");
}

function displayGifts() {
  console.log("\n===== GIFT PLANNER =====");

  if (gifts.length === 0) {
    console.log("No gift plans recorded.");
    return;
  }

  gifts.forEach((giftPlan, index) => {
    console.log(`\nGift Plan #${index + 1}`);
    console.log(`Recipient: ${giftPlan.recipient}`);
    console.log(`Occasion: ${giftPlan.occasion}`);
    console.log(`Gift Idea: ${giftPlan.gift}`);
    console.log(`Budget: ₱${giftPlan.budget}`);
  });

  console.log("\n========================");
}

function calculateTotalBudget() {
  let total = 0;

  gifts.forEach((giftPlan) => {
    total += giftPlan.budget;
  });

  return total;
}

function askForGift() {
  console.log("\n===== ADD GIFT PLAN =====");

  rl.question("Recipient name: ", (recipient) => {
    rl.question("Occasion: ", (occasion) => {
      rl.question("Gift idea: ", (gift) => {
        rl.question("Budget: ", (budgetInput) => {
          const budget = Number(budgetInput);

          if (budget < 0 || isNaN(budget)) {
            console.log("\nPlease enter a valid budget.");
            rl.close();
            return;
          }

          addGift(recipient, occasion, gift, budget);

          rl.question(
            "\nAdd another gift plan? (yes/no): ",
            (answer) => {
              if (answer.toLowerCase() === "yes") {
                askForGift();
              } else {
                displayGifts();

                console.log(
                  `\nTotal Planned Budget: ₱${calculateTotalBudget()}
                `);

                rl.close();
              }
            }
          );
        });
      });
    });
  });
}

console.log("Welcome to the Gift Planner!");

askForGift();