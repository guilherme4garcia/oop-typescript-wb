import Cliente from '../model/cliente'
import Cpf from '../model/cpf'
import Produto from '../model/produto'
import Servico from '../model/servico'
import Empresa from '../model/empresa'
import Entrada from '../io/entrada'
import CadastroCliente from '../controller/cadastroCliente'
import CadastroProduto from '../controller/cadastroProduto'
import CadastroServico from '../controller/cadastroServico'
import wb from '../db/data'


let c1 = new Cliente('1', 'Guilherme', 'M', new Cpf('234'), '31231')
let p1 = new Produto('1', 'Shampoo', 20)
let s1 = new Servico('1', 'Barba', 30)
let p2 = new Produto('2', 'Creme', 40)


let e = new Empresa()
e.clientes.push(c1)
c1.produtos_consumidos.push(p1)



console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true



while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Gerenciador Cadastro de Cliente`);
    console.log(`2 - Gerenciador Cadastro de Produto e Serviços`);
    console.log(`3 - Atribuir um Produto ou Serviço a um Cliente`);
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

    let cadastro = new CadastroCliente()
    let cadastroProd = new CadastroProduto()
    let cadastroServ = new CadastroServico()
    switch (opcao) {
        case 1:
            console.log('Opções: ')
            console.log('1 - Criar novo usuário');
            console.log('2 - Atualizar um usuário');
            console.log('3 - Remover usuário');
            console.log('4 - Listar todos os usuários');
            console.log('0 - Voltar');
            
            
            let opcao_cad = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch (opcao_cad) {
                
                case 1:
                    cadastro.cadastrar()
                    break
                case 2:
                    cadastro.update()
                    break
                case 3:
                    cadastro.delete()
                    break
                case 4:
                    cadastro.read()
                case 0:
                    break
            }   
            
            break;
            
        case 2:
            console.log('Opções: ')
            console.log('1 - Produto');
            console.log('2 - Serviço');
            
            
            let opcao_serv_prod = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch (opcao_serv_prod) {
                
                case 1:
                    console.log('Opções: ')
                    console.log('1 - Cadastrar novo produto');
                    console.log('2 - Atualizar um produto');
                    console.log('3 - Remover produto');
                    console.log('4 - Listar todos os produtos');
                    console.log('0 - Voltar');

                    let opcao_prod = entrada.receberNumero(`Por favor, escolha uma opção: `)
                    switch (opcao_prod) {

                        case 1:
                            cadastroProd.cadastrar()
                            break
                        case 2:
                            cadastroProd.update()
                            break
                        case 3:
                            cadastroProd.remove()
                            break
                        case 4:
                            cadastroProd.read()
                            break
                        case 0:
                            break
                    }

                break

                case 2:
                    console.log('Opções: ')
                    console.log('1 - Cadastrar novo serviço');
                    console.log('2 - Atualizar um serviço');
                    console.log('3 - Remover serviço');
                    console.log('4 - Listar todos os serviços');
                    console.log('0 - Voltar');

                    let opcao_serv = entrada.receberNumero(`Por favor, escolha uma opção: `)
                    switch (opcao_serv) {

                        case 1:
                            cadastroServ.cadastrar()
                            break
                        case 2:
                            cadastroServ.update()
                            break
                        case 3:
                            cadastroServ.remove()
                            break
                        case 4:
                            cadastroServ.read()
                            break
                        case 0:
                            break
                    }

                break
            }   
            
            break;
        case 3:
            console.log('Atribuição de Produtos e Serviços');
            console.log('1- Atribuir Produto');
            console.log('2- Atribuir Serviço');
            
            let opcao_atr = entrada.receberNumero('Por favor escolha uma opção: ')
            switch(opcao_atr){
                case 1:
                    break
                case 2:
                    break
            }
            break
        case 5:
            console.log('1-Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade:')
            console.log('2-Listagem de clientes por gênero:')

            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch (opcao) {
                
                case 1:
                    
                    break
                case 2:
                    
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

/* Objetivos:

0- Criar Switch Case
1- CRUD cliente
2- CRUD produto/servico

1. Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor. 
2. Listagem de todos os clientes por gênero. 
3. Listagem geral dos serviços ou produtos mais consumidos. 
4. Listagem dos serviços ou produtos mais consumidos por gênero. 
5. Listagem dos 10 clientes que menos consumiram produtos ou serviços. 
6. Listagem dos 5 clientes que mais consumiram em valor, não em quantidade


Cadastrar 30 clientes e 20 produtos

*/