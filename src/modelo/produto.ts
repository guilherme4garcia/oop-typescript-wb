export default class Produto {
    public nome!: string
    public price!: Number

    constructor(nome: string, price: Number) {
        this.nome = nome
        this.price = price
    }

    public get getProductName(): string {
        return this.nome

    }

    public get getProductPrice(): Number {
        return this.price
    }

    
}