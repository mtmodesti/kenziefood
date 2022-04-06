import { Carrinho } from "./models/carrinho.js";
import { vitrine } from "./models/DOM.js";

class layout {
    static
    async fetchDados(){
        await fetch('https://kenzie-food-api.herokuapp.com/products')
            .then(res => res.json())
            .then(data =>{
                
                const vitrineKenzieFood = new vitrine(data);
                vitrineKenzieFood.criarLayout();
                this.busca(data);
                this.panificadora(data);
                this.frutas(data);
                this.bebidas(data);
                this.todos(data);
                const btnCarrinho = document.querySelectorAll(".btnCarrinho")
                btnCarrinho.forEach(carrinho => carrinho.addEventListener("click", function(e){
                    e.preventDefault()
                    const h1 = e.currentTarget.closest("li").children[1].textContent
                    Carrinho.addProduto(h1, data)
                    
                }))
                
            })
    }
    static
    busca(data){
        document.getElementById("pesquisa-produto").addEventListener("keyup", function(e){
            e.preventDefault();
            const buscaInput = e.target.value.toLowerCase();
            const filtroBusca  = data.filter(({nome,categoria}) => nome.toLowerCase().includes(buscaInput) || categoria.toLowerCase().includes(buscaInput));
            const vitrineFiltrada = new vitrine(filtroBusca);
            vitrineFiltrada.criarLayout();
            const btnCarrinho = document.querySelectorAll(".btnCarrinho")
                btnCarrinho.forEach(carrinho => carrinho.addEventListener("click", function(e){
                    e.preventDefault()
                    const h1 = e.currentTarget.closest("li").children[1].textContent
                    Carrinho.addProduto(h1, data)
                    
                }))
        })
    }
    static
    panificadora(data){
        const btnpanificadora = document.getElementsByClassName('btn--panificadora')  
        btnpanificadora[0].addEventListener('click', function(e){
            e.preventDefault();
            const filtroPanificadora = data.filter(({categoria}) => categoria === 'Panificadora')
            const vitrinePanificadora = new vitrine(filtroPanificadora)
            vitrinePanificadora.criarLayout()
            const btnCarrinho = document.querySelectorAll(".btnCarrinho")
                btnCarrinho.forEach(carrinho => carrinho.addEventListener("click", function(e){
                    e.preventDefault()
                    const h1 = e.currentTarget.closest("li").children[1].textContent
                    Carrinho.addProduto(h1, data)
                    
                }))
        })
    }
    static 
    todos(data){
        const btntodos = document.getElementsByClassName('btn--todos')
        btntodos[0].addEventListener('click', function(e){
            e.preventDefault();
            const vitrineKenzieFood = new vitrine(data);
            vitrineKenzieFood.criarLayout();
            const btnCarrinho = document.querySelectorAll(".btnCarrinho")
                btnCarrinho.forEach(carrinho => carrinho.addEventListener("click", function(e){
                    e.preventDefault()
                    const h1 = e.currentTarget.closest("li").children[1].textContent
                    Carrinho.addProduto(h1, data)
                    
                }))
        })
    }
    static
    frutas(data){
        const btnfrutas = document.getElementsByClassName('btn--frutas')
        btnfrutas[0].addEventListener('click',function(e){
            e.preventDefault();
            const filtroFrutas = data.filter(({categoria}) => categoria === 'Frutas')
            const vitrineFrutas = new vitrine(filtroFrutas)
            vitrineFrutas.criarLayout()
            const btnCarrinho = document.querySelectorAll(".btnCarrinho")
                btnCarrinho.forEach(carrinho => carrinho.addEventListener("click", function(e){
                    e.preventDefault()
                    const h1 = e.currentTarget.closest("li").children[1].textContent
                    Carrinho.addProduto(h1, data)
                    
                }))
        })
    }
    static
    bebidas(data){
        const btnbebidas = document.getElementsByClassName('btn--bebidas')
        btnbebidas[0].addEventListener('click',function(e){
            e.preventDefault();
            const filtrobebidas = data.filter(({categoria}) => categoria === 'Bebidas')
            const vitrineBebidas = new vitrine(filtrobebidas)
            vitrineBebidas.criarLayout()
            const btnCarrinho = document.querySelectorAll(".btnCarrinho")
                btnCarrinho.forEach(carrinho => carrinho.addEventListener("click", function(e){
                    e.preventDefault()
                    const h1 = e.currentTarget.closest("li").children[1].textContent
                    Carrinho.addProduto(h1, data)
                    
                }))
        })
    }  
}
Carrinho.criarItensCarrinho()
await layout.fetchDados()