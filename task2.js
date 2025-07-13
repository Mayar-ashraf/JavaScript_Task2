var name = prompt("Enter your name:");
var age = prompt("Enter your age:");
var yearsOfExp = prompt("Enter years of experience: ");
var selfRating = prompt("Enter your Self-Rating (from 1 to 10): ");
var category;

while (Number(selfRating) < 1 || Number(selfRating) > 10) {
    selfRating = prompt("Please enter a valid Self-Rating (from 1 to 10): ");
}

if (yearsOfExp < 2) {
    category = "Junior";
} else if (yearsOfExp >= 2 && yearsOfExp < 5) {
    category = "Mid-Level";
} else if (yearsOfExp >= 5 && yearsOfExp < 10) {
    category = "Senior";
} else {
    category = "Expert";
}

var level;
switch (selfRating) {
    case "10":
    case "9":
        level = "Excellent";
        break;
    case "8":
    case "7":
        level = "Good";
        break;
    case "6":
    case "5":
        level = "Average";
        break;
    default:
        level = "Needs Improvement";
        break;
}

let baseSalary = 5000;
var bonus;

if (yearsOfExp <= 2) {
    bonus = 0.1 * baseSalary;
} else if (yearsOfExp <= 3 && yearsOfExp >= 5) {
    bonus = 0.15 * baseSalary;
} else {
    bonus = 0.2 * baseSalary;
}

var finalSalary = baseSalary + bonus

var hour = new Date().getHours();
var shift;

if (hour >= 9 && hour < 18) {
    shift = "Day Shift";
}
if (hour >= 18 || hour < 9) {
    shift = "Night Shift";
}

report = `Welcome ${name}! You are ${age} years old.\n`
report = report + `Your Job Category is ${category}.\nYour Performance level is ${level}.\n`;
report = report + `Your salary = ${finalSalary} L.E. \nYou are in the ${shift}.`;
console.log(report);
window.alert(report);
document.getElementById("paragraph").innerText = report;