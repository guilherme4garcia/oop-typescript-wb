export default class Cliente {
  public id: string
  public name: string
  public gender: string   
  private cpf: string
  private telefone: string
  private data_cadastro: string
  //public produtos_consumidos: Array<Produto>

  constructor(id: string, name: string, gender: string, cpf: string, telefone: string) {
    this.id = id
    this.name = name
    this.gender = gender
    this.cpf = cpf
    this.telefone = telefone
    this.data_cadastro = new Date().toLocaleDateString('pt-BR')
  }
      
}