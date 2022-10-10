class Termek{
    id;
    name;
    amount;
    price;
    unitAmount;
    unitName;
    category;
    fullprice;
    constructor(data, id){
        this.id = id;
        this.name = data.name;
        this.unitAmount = Number(data.unit.split(' ')[0]);
        this.unitName = data.unit.split(' ')[1];
        this.amount = Number(data.amount);
        this.price = Number(data.price);
        this.category = data.category;
        this.fullprice = this.price*this.amount;
    }
}