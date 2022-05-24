import Produto from "./produto"
import Cpf from "./cpf"

export default class Cliente {
  public id: string
  private _name: string
  private _gender: string   
  public get gender(): string {
    return this._gender
  }
  public set gender(value: string) {
    this._gender = value
  }
  private _cpf: Cpf
  public get cpf(): Cpf {
    return this._cpf
  }
  public set cpf(value: Cpf) {
    this._cpf = value
  }
  private _telefone: string
  public get telefone(): string {
    return this._telefone
  }
  public set telefone(value: string) {
    this._telefone = value
  }

  private data_cadastro: string
  private _produtos_consumidos: Array<Produto>

  
  constructor(id: string, name: string, gender: string, cpf: Cpf, telefone: string) {
    this.id = id
    this._name = name
    this._gender = gender
    this._cpf = cpf
    this._telefone = telefone
    this.data_cadastro = new Date().toLocaleDateString('pt-BR')
    this._produtos_consumidos = []
  }
  
  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value
  }
  
  public get produtos_consumidos(): Array<Produto> {
    return this._produtos_consumidos
  }
  public set produtos_consumidos(value: Array<Produto>) {
    this._produtos_consumidos = value
  }
  
}