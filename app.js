// 1
let myArray = [1, "two", false, true, 5]; 

// 2
myArray[1]= "z";

// 3
arr.push(7, "VIII", 9);
arr.unshift("I",2,"three");

// 4
let popped = arr.pop();
let shifted = arr.shift();

// 5
const newArr = arr.splice(1,4);

// 6
arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond")

// 7
return arr.slice(2,4);

// 8
newArr.push([...arr]);

// 9
let sentence = ['learning',...fragment,'is','fun'];

// 10
return arr.indexOf(elem) != -1;

// 11
for (let i = 0; i < arr.length; i++){
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }

// 12
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    [['loop', 'shift', 6, 7, 1000, 'method', 'deep'], 3],
    [['concat', [false, true,'deeper', 'spread'], 'array'],4],
    [[[['mutate','deepest'], 1327.98], 'splice'], 'slice', 'push', 5],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  ];

// 13
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

// 14
userActivity.data.online = 45;

// 15
return foods[scannedItem];

// 16
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

// 17
if (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;

// 18
let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;

// 19
return Object.keys(obj);

// 20
userObj.data.friends.push(friend);
  return userObj.data.friends;

