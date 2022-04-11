import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`id: ` + cliente.id);
            
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Gênero: ${cliente.genero}`);
            
            cliente.getTelefones.forEach(telefone => {
                console.log(telefone)
            })
            console.log(`Produtos consumidos: `)
            cliente.getProdutosConsumidos.forEach(produto => {
                console.log(produto);
                
            })
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}