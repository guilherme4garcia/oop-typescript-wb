import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Telefone from "../modelo/telefone";
import Cadastro from "../negocio/cadastro";
import CadastroCliente from "../negocio/cadastroCliente";

let cliente1 = new Cliente("1", "Ana", "", new CPF("411123", "12/04/1992"), "F", new Telefone("12", "39120301"))
let cliente2 = new Cliente("2", "Maria", "", new CPF("411123", "12/04/1992"), "F", new Telefone("12", "39120301"))
let cliente3 = new Cliente("3", "Joana", "", new CPF("411123", "12/04/1992"), "F", new Telefone("12", "39120301"))
let cliente4 = new Cliente("4", "Gisele", "", new CPF("411123", "12/04/1992"), "F", new Telefone("12", "39120301"))
let cliente5 = new Cliente("5", "Aline", "", new CPF("411123", "12/04/1992"), "F", new Telefone("12", "39120301"))
let cliente6 = new Cliente("6", "Paula", "", new CPF("411123", "12/04/1992"), "F", new Telefone("12", "39120301"))
let cliente7 = new Cliente("7", "Natalia", "", new CPF("411123", "12/04/1992"), "F", new Telefone("12", "39120301"))
let cliente8 = new Cliente("8", "Carolina", "", new CPF("411123", "12/04/1992"), "F", new Telefone("12", "39120301"))
let cliente9 = new Cliente("9", "Laura", "", new CPF("411123", "12/04/1992"), "F", new Telefone("12", "39120301"))
let cliente10 = new Cliente("10", "Jessica", "", new CPF("411123", "12/04/1992"), "F", new Telefone("12", "39120301"))
let cliente11 = new Cliente("11", "Eliana", "", new CPF("411123", "12/04/1992"), "F", new Telefone("12", "39120301"))
let cliente12 = new Cliente("12", "Ludmila", "", new CPF("411123", "12/04/1992"), "F", new Telefone("12", "39120301"))
let cliente13 = new Cliente("13", "Cristina", "", new CPF("411123", "12/04/1992"), "F", new Telefone("12", "39120301"))
let cliente14 = new Cliente("14", "Rosa", "", new CPF("411123", "12/04/1992"), "F", new Telefone("12", "39120301"))
let cliente15 = new Cliente("15", "Paola", "", new CPF("411123", "12/04/1992"), "F", new Telefone("12", "39120301"))
let cliente16 = new Cliente("16", "Tiago", "", new CPF("411123", "12/04/1992"), "M", new Telefone("12", "39120301"))
let cliente17 = new Cliente("17", "Joao", "", new CPF("411123", "12/04/1992"), "M", new Telefone("12", "39120301"))
let cliente18 = new Cliente("18", "Pedro", "", new CPF("411123", "12/04/1992"), "M", new Telefone("12", "39120301"))
let cliente19 = new Cliente("19", "Judas", "", new CPF("411123", "12/04/1992"), "M", new Telefone("12", "39120301"))
let cliente20 = new Cliente("20", "Lucas", "", new CPF("411123", "12/04/1992"), "M", new Telefone("12", "39120301"))
let cliente21 = new Cliente("21", "Heitor", "", new CPF("411123", "12/04/1992"), "M", new Telefone("12", "39120301"))
let cliente22 = new Cliente("22", "Jose", "", new CPF("411123", "12/04/1992"), "M", new Telefone("12", "39120301"))
let cliente23 = new Cliente("23", "Jeremias", "", new CPF("411123", "12/04/1992"), "M", new Telefone("12", "39120301"))
let cliente24 = new Cliente("24", "Ricardo", "", new CPF("411123", "12/04/1992"), "M", new Telefone("12", "39120301"))
let cliente25 = new Cliente("25", "Valdir", "", new CPF("411123", "12/04/1992"), "M", new Telefone("12", "39120301"))
let cliente26 = new Cliente("26", "Luiz", "", new CPF("411123", "12/04/1992"), "M", new Telefone("12", "39120301"))
let cliente27 = new Cliente("27", "Daniel", "", new CPF("411123", "12/04/1992"), "M", new Telefone("12", "39120301"))
let cliente28 = new Cliente("28", "Gabriel", "", new CPF("411123", "12/04/1992"), "M", new Telefone("12", "39120301"))
let cliente29 = new Cliente("29", "Cristiano", "", new CPF("411123", "12/04/1992"), "M", new Telefone("12", "39120301"))
let cliente30 = new Cliente("30", "Waldo", "", new CPF("411123", "12/04/1992"), "M", new Telefone("12", "39120301"))

let preCadastrados = [cliente1, cliente2, cliente3, cliente4,cliente5,cliente6,cliente7,cliente8,cliente9,cliente10,cliente11,cliente12,cliente13,cliente14,cliente15,cliente16,cliente17,cliente18,cliente19,cliente20,cliente21,cliente22,cliente23,cliente24,cliente25,cliente26,cliente27,cliente28,cliente29,cliente30]



export default preCadastrados