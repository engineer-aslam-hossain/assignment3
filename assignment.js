// feetToMile problem solving function

function feetToMile(feet) {
  let mile = 0;
  if (feet < 0) {
    console.log(
      "feet cannot be a negative number, please provide a positive number and try again"
    );
  } else {
    return (mile = feet / 5280);
  }
}

let mileNumber = feetToMile(10000);
console.log(`converted feet amount is = ${mileNumber} mile `);

// woodCalculator function

function woodCalculator(chair, table, bed) {
  let totalWoodAmount = 0;
  if (chair < 0 || table < 0 || bed < 0) {
    console.log(
      "you cannot make your furniture by put negative value. give positive value and try again"
    );
  } else {
    return (totalWoodAmount = chair * 1 + table * 3 + bed * 5);
  }
}

let woodAmount = woodCalculator(10, 3, 5);
console.log(`Amount of wood require is =  ${woodAmount} cubic feet`);

// brickCalculator function

function brickCalculator(floorNumber) {
  const bricksPerFeet = 1000;
  let floorHeight = 0;

  if (floorNumber < 0) {
    console.log(
      "you cannot enter a negative value for floor number. Try again with positive number"
    );
  } else if (floorNumber <= 10) {
    floorHeight = 15 * floorNumber;
  } else if (floorNumber > 10 && floorNumber <= 20) {
    floorHeight = 12 * (floorNumber - 10) + 15 * 10;
  } else {
    floorHeight = 10 * (floorNumber - 20) + 15 * 10 + 12 * 10;
  }

  return bricksPerFeet * floorHeight;
}

let amountOfBrick = brickCalculator(25);
console.log(`you need =  ${amountOfBrick} brick to bouild your building`);

// finding tiny friend function

function tinyFriends(friendsArray) {
  let friends = friendsArray.split(" ");
  let tinyFriendsName = friends[0];

  for (friend of friends) {
    if (friend.length == 0) {
      console.log(
        "You cannot enter an empty array. To compare atleast you need to enter 2 name. try again after write atleast 2 names"
      );
    }
    if (friend.length < tinyFriendsName.length) {
      tinyFriendsName = friend;
    }
  }

  return tinyFriendsName;
}

let friendsName = tinyFriends("Rakib Sahanaz Homayoun Saidul Mokhlasur");

console.log(`Your most tiny friends name is = ${friendsName}`);

// End of the assignment
