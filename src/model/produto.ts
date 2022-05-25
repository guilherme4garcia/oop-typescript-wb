export default class Produto {
    public id: string
    private _name: string
    public quantidade: Number
    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value
    }
    
    private _price: Number
    public get price(): Number {
        return this._price
    }
    public set price(value: Number) {
        this._price = value
    }

    
    constructor(id: string, name: string, price: Number, quantidade: Number) {
        this.id = id
        this._name = name
        this._price = price
        this.quantidade = quantidade
    }

}