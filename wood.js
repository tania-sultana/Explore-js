function woodCal(chairQun, tableQun, bedQun){
    const perChrWood = 3;
    const perTblWood = 10;
    const perBedWood = 50;

    const chrWood = chairQun * perChrWood;
    const tblWood = tableQun * perTblWood;
    const bedWood = bedQun * perBedWood;

    const totalWood = chrWood + tblWood + bedWood;
    return totalWood;

    //console.log(chairQun, tableQun, bedQun);

}
const totalWood = woodCal(1, 3, 5);
console.log('total wood required:',totalWood);