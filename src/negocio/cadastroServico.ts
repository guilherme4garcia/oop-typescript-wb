import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
      super()
      this.servicos = servicos
      this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro de serviços`);
        
        let id = this.entrada.receberTexto('Informe o código do serviço: ')
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        let valor = this.entrada.receberNumero(`Informe o valor do produto: `)

        let servico = new Servico(nome, valor)
        this.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`);

    }
}
    