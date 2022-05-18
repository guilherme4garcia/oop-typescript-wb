export default class Produto {
    public id: string
    public name: string
    public price: Number

    
    constructor(id: string, name: string, price: Number) {
        this.id = id
        this.name = name
        this.price = price
    }
}