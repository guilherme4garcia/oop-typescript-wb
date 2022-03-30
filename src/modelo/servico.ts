export default class Servico {
    public nome!: string
    public price!: Number

    constructor(nome: string, price: Number) {
        this.nome = nome
        this.price = price
    }

    public get getSerciveName(): string {
        return this.nome

    }

    public get getServicePrice(): Number {
        return this.price
    }
}