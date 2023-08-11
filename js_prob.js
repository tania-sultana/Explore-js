const country = 'BD';
const age = 23;
const isIndependent = true;
const student = {id: 121, class: 12, name: 'Tania'};
const friends = [13, 23, 15, 17, 44, 45, 65];
function add(n1, n2){
    return n1 + n2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);
console.log(friends.includes(19));
console.log(friends.includes(17));
const newFriends = [12, 13, 14, 15];

const allFriends = newFriends.concat(friends);
console.log(allFriends);
