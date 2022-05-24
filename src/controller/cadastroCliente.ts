import wb from "../db/data";
import Entrada from "../io/entrada";
import Cadastro from "../model/cadastro";
import Cliente from "../model/cliente";
import Cpf from "../model/cpf";


export default class CadastroCliente extends Cadastro {
    private entrada: Entrada
    constructor() {
        super()
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let id = this.entrada.receberTexto(`Digite o id: `)
        let name = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let gender_letter = this.entrada.receberTexto(`Informe o gênero (M/F): `).toUpperCase()
        let cpf_num = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let CPF = new Cpf (cpf_num)
        let telefone = this.entrada.receberTexto(`Digite o telefone: `)
        let cliente = new Cliente(id, name, gender_letter, CPF, telefone);
        wb.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
    public update(): void {
        
    }
    public delete(): void {

    }
    public read(): void {

    }

}