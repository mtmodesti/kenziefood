class Carrinho {
    static
    arrayProdutos = []
    static
    criarTemplate(container, {nome,imagem,preco,categoria}){
        let li = document.createElement('li')
            const btnRemover = document.createElement('button')
            btnRemover.classList.add('remover')
            btnRemover.innerHTML = `<img src="./public/images/trash.png">`
            btnRemover.addEventListener('click', function(e){
                e.preventDefault()
                const produtoDelete = e.currentTarget.closest("li").children[1].children[0].textContent
                Carrinho.RemoverItemCarrinho(produtoDelete)

            })
            li.innerHTML = `
                            <figure>
                                <img src=${imagem} alt=${nome}>
                            </figure>
                            <div class="info--product">
                                <h1>${nome}</h1>
                                <p>${categoria}</p>
                                <span>${preco.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}</span>
                            </div>
                        `
            li.appendChild(btnRemover)
            container.appendChild(li)
    }

    static
    addProduto(nomeProduto, data){

            const produto = data.find(({nome}) => nome === nomeProduto)
            if(produto !== undefined){
                this.arrayProdutos = [...this.arrayProdutos, produto]
                localStorage.setItem("produtosCarrinho", JSON.stringify(this.arrayProdutos))
                this.criarItensCarrinho()
            }
    }
    static
    criarItensCarrinho(){
        const arrayCarrinho =  JSON.parse(localStorage.getItem('produtosCarrinho'))
        const carrinho = document.getElementById('carrinho')
        if(arrayCarrinho && arrayCarrinho.length > 0){
            const ul = document.createElement('ul')
            const qtdeCarrinho = document.createElement('div');
            const carrinhoTotal = document.createElement('div');
            qtdeCarrinho.classList.add('carrinho--quantidade');
            carrinhoTotal.classList.add('carrinho--total');
            ul.classList.add('carrinho--produtos--container')
            ul.innerHTML = ''
            arrayCarrinho.forEach(produto => {
                this.criarTemplate(ul,produto)
            })
            carrinho.innerHTML      = `<div class="carrinho--header">
                                        <figure><img src="./public/images/.png"></figure>
                                        <h1>Carrinho</h1>
                                    </div>`
            qtdeCarrinho.innerHTML  = `<h3>Quantidade:</h3>
                                    <span>${arrayCarrinho.length}</span>`
            
            
            carrinhoTotal.innerHTML = `<h3>Total:</h3>
                                    <span>${arrayCarrinho.reduce((acc,{preco}) => acc+preco, 0).toLocaleString('pt-br',{style:'currency',currency:'BRL'})}</span>`
            carrinho.appendChild(ul)
            carrinho.appendChild(qtdeCarrinho)
            carrinho.appendChild(carrinhoTotal)
        }else{
            carrinho.innerHTML = ''
            carrinho.innerHTML = `
            <div class="carrinho--header">
                <figure><img src="./public/images/.png"></figure>
                <h1>Carrinho</h1>
            </div>
            <div class="carrinho--produtos--vazio">
                <img class="emptyItem" src="./public/images/shopping-bag.png" alt="">
                <span class="emptyMsgTitle">OPS! </span>
                <span class="emptyMsg">Por enquanto não temos produtos no carrinho.</span>
            </div>`
        }

    } 
    static
    RemoverItemCarrinho(nomeProduto){ 
        const arrayCarrinho =  JSON.parse(localStorage.getItem('produtosCarrinho'))   
        const produto = arrayCarrinho.find(({nome}) => nomeProduto === nome)
        arrayCarrinho.splice(arrayCarrinho.indexOf(produto),1)
        this.arrayProdutos.splice(this.arrayProdutos.indexOf(produto),1)
        localStorage.setItem('produtosCarrinho', JSON.stringify(arrayCarrinho))
        this.criarItensCarrinho()   
    } 
}

export { Carrinho }