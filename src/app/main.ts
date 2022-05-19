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
