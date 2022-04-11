import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";
import preCadastrados from "../app/precadastroClientes";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        preCadastrados.forEach(cliente => {
            this.clientes.push(cliente)
        });
        console.log(`\nInício do cadastro do cliente`);
        let id = this.entrada.receberTexto(`Por favor digite um id para o cliente: `)
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let cpf = new CPF(valor, data);
        let tel = this.entrada.receberTexto(`Por favor informe o número do telefone, no padrão DDDTELEFONE:  `)
        let tel_num = tel.slice(2)
        let ddd = tel.slice(0, 2)
        let telefone = new Telefone(ddd, tel_num)
        let genero = this.entrada.receberTexto(`Informe o gênero do cliente, (M/F): `)

        let cliente = new Cliente(id, nome, nomeSocial, cpf, genero, telefone);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}