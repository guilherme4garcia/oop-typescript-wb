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
        let id = this.entrada.receberTexto(`Digite o id do usuário que você deseja atualizar: `)
        
        try {
            
            wb.clientes.forEach((element) => {
                if(element.id == id) {
                    element.name = this.entrada.receberTexto('Nome: ')
                    element.gender = this.entrada.receberTexto('Gênero (M/F): ').toUpperCase()
                    let cpf = this.entrada.receberTexto('CPF: ')
                    element.cpf = new Cpf (cpf)
                    element.telefone = this.entrada.receberTexto('Telefone: ')
                }
            })
        } catch (error) {
            console.log(error);
            
        }
        
    }
    
    public delete(): void {
        let id = this.entrada.receberTexto(`Digite o id do usuário que você deseja remover: `)
        try {
            wb.clientes.forEach((element, index) => {
                if(element.id ==id) {
                    wb.clientes.splice(index)
                }
            })    

            console.log(`Usuário ID:${id} deletado com sucesso!`);
        } catch (error) {
            console.log(error)
        }       

    }

    public read(): void {
        wb.clientes.forEach(element => {
            console.log(element)
        });       
    }

}