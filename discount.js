function ticketPrice(number){
const first100Rate = 100;
const second100Rate = 90;
const rest100Rate = 70;
if(ticketQuantity <= 100){
    const price = ticketQuantity * first100Rate;
    return price;
}
else if(ticketQuantity <= 200){
    const first100Rate = 100 * first100Rate;
    const restTicketQuantity = ticket - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    const totalPrice = first100Price + restTicketPrice;
    return totalPrice;
}
else {
    const first100Rate = 100 * first100Rate;
    const second100Rate = 100 * second100Rate;
    const restTicketQuantity = ticket - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const totalCost = first100Price + second100Price + restTicketPrice;
    return totalCost;


}
}
const price = ticketPrice(120);
console.log('price:', price);