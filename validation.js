function add(n1, n2){
    if(typeof n1 !== 'number' || typeof  n2!== 'number'){
        return 'Please enter a number';
    }
    return n1 + n2;
}
const result = add(12, 28);
console.log(result);