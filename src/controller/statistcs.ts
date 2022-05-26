import wb from "../data/wb";
import Cliente from "../model/cliente";
import Produto from "../model/produto";
import Ranking from "../model/ranking";
 



export default class Stats {
    public popular_gender() :void {
        //4. Listagem dos serviços ou produtos mais consumidos por gênero. 
        let male: Array<Cliente> = []
        wb.clientes.forEach(element => {
            if(element.gender == 'M'){
                male.push(element)
            }
        });

        let prod: Array<Ranking> = []
        wb.produtos.forEach(element => {
            prod.push(new Ranking(element.id, element.name))
        })

        prod.forEach(produto => {
            male.forEach(cliente => {
                cliente.produtos_consumidos.forEach(prod_consumido => {
                    if(produto.id == prod_consumido.id) {
                        produto.add()
                    }
                })
            })
        })

        let result = prod.sort((a,b) => {
            return b.acumulador - a.acumulador
        })

        
        console.log(result)
        

        //let primeiro
        //let ultimo
        //let produto_encontrado: Array<Produto>
       

        

        /* let ranking = wb.produtos.sort((a,b) => {


            male.forEach(person => {
                let valor = 0

                if(person.produtos_consumidos.includes(a) == true && person.produtos_consumidos.includes(b) == false){
                    valor = 1
                }
                else if(person.produtos_consumidos.includes(b) == true && person.produtos_consumidos.includes(a) == false){
                    valor = -1
                }
                else{
                    valor = 0
                }
                
                return valor
            })
            
            
        })
        
        let ranking = result.slice(0,10) */

        

        /* 

        wb.produtos.sort((a,b) => {
            let produtosEncontrados: Array<Produto> = []
            male.forEach(person => {
                produtosEncontrados = []
               person.produtos_consumidos.forEach(produto => {
                   if(produto.id == a.id)
                   produtosEncontrados.push(produto)
               })

               let tamanho = produtosEncontrados.length
               
               
            })

            
        }) 
        */

        let female: Array<Cliente> = []
        wb.clientes.forEach(element => {
            if(element.gender == 'F'){
                female.push(element)
            }
        });
    }

    public less_consume() :void {
        //Listagem dos 10 clientes que menos consumiram produtos ou serviços.
        let result = wb.clientes.sort((a, b) => {
            return (a.getTotal()) - (b.getTotal())
        })
       

        let ranking = result.slice(0,10)
        
        for (let index = 0; index < ranking.length; index++) {
            const element = ranking[index];
            let total_prod = 0
            element.produtos_consumidos.forEach(prod => {
                total_prod += prod.price
            })
            let total_serv = 0
            element.servicos_consumidos.forEach(serv => {
                total_serv += serv.price
            })
            let total = total_prod + total_serv
            console.log(`${index + 1}-`, element)
            console.log(`Consumo Produtos: R$ ${total_prod.toFixed(2)}`)
            console.log(`Consumo Serviços: R$ ${total_serv.toFixed(2)}`)
            console.log(`TOTAL CONSUMIDO: R$ ${total.toFixed(2)}`);
            console.log('-------------------------------------------------------');
            
            

        }  
    }

    public more_value() :void {
        //6. Listagem dos 5 clientes que mais consumiram em valor, não em quantidade */

        
        let result = wb.clientes.sort((a, b) => {
            return (a.getTotal()) - (b.getTotal())
        })
       

        let ranking = result.slice(-5)
        ranking = ranking.reverse()
        
        for (let index = 0; index < ranking.length; index++) {
            const element = ranking[index];
            let total_prod = 0
            element.produtos_consumidos.forEach(prod => {
                total_prod += prod.price
            })
            let total_serv = 0
            element.servicos_consumidos.forEach(serv => {
                total_serv += serv.price
            })
            let total = total_prod + total_serv
            console.log(`${index + 1}-`, element)
            console.log(`Consumo Produtos: R$ ${total_prod.toFixed(2)}`)
            console.log(`Consumo Serviços: R$ ${total_serv.toFixed(2)}`)
            console.log(`TOTAL CONSUMIDO: R$ ${total.toFixed(2)}`);
            console.log('-------------------------------------------------------');
            
            

        }

    }

    public products_consume() :void {
        // 3. Listagem geral produtos mais consumidos.
        
        wb.clientes.forEach(cliente => {

            
            cliente.produtos_consumidos
        })
    }

    public services_consume() :void {
        // 3. Listagem geral serviços mais consumidos. 


        
    }

    public more_quantity() : void {
        //1. Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.
        
        let result = wb.clientes.sort((a, b) => {
            return (a.produtos_consumidos.length + a.servicos_consumidos.length) - (b.produtos_consumidos.length + b.servicos_consumidos.length)
        })

        let ranking = result.slice(-10)
        ranking = ranking.reverse()
        
        for (let index = 0; index < ranking.length; index++) {
            const element = ranking[index];
            console.log(`${index + 1}-`, element)

        }
    }


    public male() :void {
        //2. Listagem de todos os clientes por gênero MASCULINO. 

        let male: Array<Cliente> = []
        wb.clientes.forEach(element => {
            if(element.gender == 'M'){
                male.push(element)
            }
        });

        
        console.log('-------------------------------------------------')
        console.log('CLIENTES DO GÊNERO MASCULINO: ');
        male.forEach(element => {
            console.log(element.name)
        });
        console.log('-------------------------------------------------')

    }

    public female() :void {
        //2. Listagem de todos os clientes por gênero FEMININO. 

        let female: Array<Cliente> = []
        wb.clientes.forEach(element => {
            if(element.gender == 'F'){
                female.push(element)
            }
        });

        
        console.log('-------------------------------------------------')
        console.log('CLIENTES DO GÊNERO FEMININO: ');
        female.forEach(element => {
            console.log(element.name)
        });
        console.log('-------------------------------------------------')
        
    }

    
}