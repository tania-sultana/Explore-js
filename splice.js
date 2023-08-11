const friends = [13, 99, 23, 15, 17, 44, 45, 65];
const partial = friends.splice(1, 3, 66, 78);
partial = friends.splice(1, 3);
console.log(friends);
console.log(partial); 