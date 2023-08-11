const phones = [
    {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'},
    {name: 'iphone', camera: 10, storage: '32gb', price: 60000, color: 'silver'},
    {name: 'Xamol', camera: 12, storage: '32gb', price: 14000, color: 'silver'},
    {name: 'Oppo', camera: 10, storage: '32gb', price: 24000, color: 'silver'},
    {name: 'Nokia', camera: 10, storage: '32gb', price: 62000, color: 'silver'},
    {name: 'HTC', camera: 12, storage: '32gb', price: 20000, color: 'silver'},
];
function cheapestPhone(phones){
    let chepest = phones[0];
for(i = 0; i< phones.length; i++){
    const phone = phones[i];
    //console.log(phone);
    if(phone.price < chepest.price){
        chepest = phone;
    }
}
return chepest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);