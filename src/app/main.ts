import Cliente from '../model/cliente'
import Cpf from '../model/cpf'
import Produto from '../model/produto'
import Servico from '../model/servico'
import Empresa from '../model/empresa'
import Entrada from '../io/entrada'
import CadastroCliente from '../controller/cadastroCliente'
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
    console.log(`2 - Gerenciador Cadastro de Produto`);
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

    let cadastro = new CadastroCliente()
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
            cadastro.update()
            break;
        case 3:
            cadastro.read()
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