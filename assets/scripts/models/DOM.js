class vitrine{
    constructor(dadosProduto){
        this.dadosProduto = dadosProduto
    }   
    criarLayout(){
        const containerVitrine = document.getElementById("vitrine--produtos");
        containerVitrine.innerHTML = '';
        this.dadosProduto.forEach(({nome,preco,categoria,descricao,imagem}) => {
            let produto = document.createElement("li");
            produto.innerHTML = 
            `
               <figure>
                    <img src=${imagem} alt=${nome}>
                    <figcaption><img src=${this.tratarIconCategoria(categoria)}>${categoria}</figcaption>
                </figure>
                <h1>${nome}</h1>
                <p>${descricao}</p>
                <section>
                    <span>${preco.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}</span>
                    <button class="btnCarrinho"><i class="fas fa-cart-plus"></i></button>
                </section>`

            containerVitrine.appendChild(produto);
        });
    }
    tratarIconCategoria(categoria){
        if(categoria === "Bebidas") return "./public/images/bebida.png"
        if(categoria === "Frutas") return "./public/images/fruta.png"
        if(categoria === "Panificadora") return "./public/images/pao.png"
    }
}

export { vitrine }