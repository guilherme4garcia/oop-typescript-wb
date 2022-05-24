import wb from "../db/data";
import Entrada from "../io/entrada";
import Cadastro from "../model/cadastro";
import Produto from "../model/produto";


export default class CadastroProduto extends Cadastro {
    
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
        let produto = new Produto(id, name, price)
        wb.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`);
    }

    public update(): void {
        let id = this.entrada.receberTexto(`Digite o id do produto que você deseja atualizar: `)

        try {
            
            wb.produtos.forEach((element) => {
                if(element.id == id) {
                    element.name = this.entrada.receberTexto('Nome: ')
                    element.price = this.entrada.receberNumero('Preço: ')
                    console.log(element)
                }
            })

            console.log(`Produto ID:${id} atualizado com sucesso!`);

        } catch (error) {
            console.log(error);
            
        }
        
    }

    public remove(): void {
        let id = this.entrada.receberTexto(`Digite o id do produto que você deseja remover: `)

        try {
            
            wb.produtos.forEach((element, index) => {
                if(element.id == id) {
                    wb.produtos.slice(index)
                }
            })

            console.log(`Produto ID:${id} removido com sucesso!`);

        } catch (error) {
            console.log(error);
            
        }
    }

    public read(): void {
        wb.produtos.forEach(element => {
            console.log(element)
        });       
    }

    public add_cart(): void {
        let id_cliente = this.entrada.receberTexto(`Digite o id do CLIENTE que você deseja adcionar um produto: `)
        let id_produto = this.entrada.receberTexto(`Digite o id do produto que você deseja remover: `)


    }

    public remove_cart(id_cliente: string, id_produto: string): void {
        

    }

}