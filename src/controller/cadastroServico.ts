import wb from "../db/data";
import Entrada from "../io/entrada";
import Cadastro from "../model/cadastro";
import Servico from "../model/servico";
import CadastroProduto from "./cadastroProduto";

export default class CadastroServico extends Cadastro{
    private entrada: Entrada
    constructor() {
        super()
        this.entrada = new Entrada()
    }  

    public cadastrar(): void {
        console.log(`\nInício do cadastro do Produto`);
        let id = this.entrada.receberTexto(`Digite o id: `)
        let name = this.entrada.receberTexto(`Nome do produto: `)
        let price = this.entrada.receberNumero('Preço: ')
        let servico = new Servico(id, name, price)
        wb.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`);
    }

    public update(): void {
        let id = this.entrada.receberTexto(`Digite o id do serviço que você deseja atualizar: `)

        try {
            
            wb.servicos.forEach((element) => {
                if(element.id == id) {
                    element.name = this.entrada.receberTexto('Nome: ')
                    element.price = this.entrada.receberNumero('Preço: ')
                }
            })

            console.log(`Serviço ID:${id} atualizado com sucesso!`);

        } catch (error) {
            console.log(error);
            
        }
        
    }

    public remove(): void {
        let id = this.entrada.receberTexto(`Digite o id do serviço que você deseja remover: `)

        try {
            
            wb.servicos.forEach((element, index) => {
                if(element.id == id) {
                    wb.servicos.slice(index)
                }
            })

            console.log(`Serviço ID:${id} removido com sucesso!`);

        } catch (error) {
            console.log(error);
            
        }
    }

    public read(): void {
        wb.servicos.forEach(element => {
            console.log(element)
        });       
    }


}