import Produto from "./produto"
import Cpf from "./cpf"

export default class Cliente {
  public id: string
  private _name: string
  public gender: string   
  private cpf: Cpf
  private telefone: string
  private data_cadastro: string
  private _produtos_consumidos: Array<Produto>

  
  constructor(id: string, name: string, gender: string, cpf: Cpf, telefone: string) {
    this.id = id
    this._name = name
    this.gender = gender
    this.cpf = cpf
    this.telefone = telefone
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