import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import RegistroProduto from "../negocio/registrarProduto";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true



while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Registrar um Produto`);
    console.log('5 - Estatísticas');
    
    // console.log(`2 - Remover cliente`);
    // console.log(`3 - Atualizar cliente`);
    // console.log(`6 - Remover um Produto`);
    // console.log(`7 - Atualizar um Produto`);
    // console.log(`8 - Listar todos os Produtos`);
    // console.log(`9 - Atribuir um produto a um cliente.`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let registro = new RegistroProduto(empresa.getClientes)
            registro.registrar()
            break
        case 5:
            console.log('1-Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade:')
            console.log('2-Listagem de clientes por gênero:')

            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch (opcao) {
                
                case 1:
                    let listagem2 = new ListagemClientes(empresa.getClientes)
                    listagem2.clientes_consumiram_mais_produtos()
                    break
                case 2:
                    let listagem = new ListagemClientes(empresa.getClientes)
                    listagem.clientes_genero()
                    break
            }   
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}