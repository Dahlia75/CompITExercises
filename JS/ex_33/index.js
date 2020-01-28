let userCount = 100;
userCount += 5;
console.log("Users count: %s", userCount);
userCount -= 3;
console.log("Users count: %s", userCount);
userCount *= 2;
console.log("Users count: %s", userCount);
let menCount = (userCount - (userCount%2))/2;
console.log("Users count: %s, %s & %s", userCount, menCount, menCount);
