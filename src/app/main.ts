import Cliente from '../model/cliente'
import Cpf from '../model/cpf'
import Produto from '../model/produto'
import Servico from '../model/servico'
import Empresa from '../model/empresa'

let c1 = new Cliente('1', 'Guilherme', 'M', new Cpf('234'), '31231')
let p1 = new Produto('1', 'Shampoo', 20)
let s1 = new Servico('1', 'Barba', 30)
let p2 = new Produto('2', 'Creme', 40)

let e = new Empresa()
e.clientes.push(c1)
c1.produtos_consumidos.push(p1)


console.log(c1.name);


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