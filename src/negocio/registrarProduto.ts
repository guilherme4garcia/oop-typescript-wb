import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Registro from "./registro"

export default class RegistroProduto extends Registro {

  private clientes: Array<Cliente>
  private entrada: Entrada
  constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
  public registrar(): void {
    let id = this.entrada.receberTexto('Digite o id do cliente para registrar um produto: ')
    this.clientes.forEach(cliente => {
      if (cliente.id == id) {
        let nome = this.entrada.receberTexto('Digite o nome do produto: ')
        let valor = this.entrada.receberNumero('Digite o valor: ')
        let produto = new Produto(nome, valor)
        cliente.produtosConsumidos.push(produto)
      }
    })

  }
}