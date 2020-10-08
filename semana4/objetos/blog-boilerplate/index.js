// function apertouBotao() { //função para executar quando aperta o botao
//     const inserirTitulo = document.getElementById("titulo-post"); // variavel para pegar o titulo do post do html escrito no input
//     const inserirAutor = document.getElementById("autor-post"); // variavel para pegar o autor do post do html escrito no input
//     const inserirConteudo = document.getElementById("conteudo-post"); // variavel para pegar o conteudo do post do html escrito no input
//     const localParaImprimir = document.getElementById("container-de-posts") // variavel que faz link com o container onde os valores serao impressos
    

//     localParaImprimir.innerHTML += `${inserirTitulo.value + inserirAutor.value + inserirConteudo.value}` // imprime os valores das variaveis do título, autor e conteudo no container-de-posts

//     if(inserirTitulo === ""){ //caso a lacuna não for preenchida, aparece um alerta para o usuario
//         window.alert("Digite na lacuna!")
//     }
//     inserirTitulo.value = "" // limpa o input do titulo depois de ter clicado no botão
//     inserirAutor.value = "" // limpa o input do autor depois de ter clicado no botão
//     inserirConteudo.value = "" // limpa o input do conteudo depois de ter clicado no botão
// } 


//usando as propriedades de objeto + DOM

function apertouBotao() { //função para executar quando aperta o botao
    
    let inserirTitulo =  document.getElementById("titulo-post") // variavel para pegar o titulo do post do html escrito no input
    let inserirAutor = document.getElementById("autor-post") // variavel para pegar o autor do post do html escrito no input
    let inserirConteudo = document.getElementById("conteudo-post") // variavel para pegar o conteudo do post do html escrito no input
    // let inserirImagem = document.

    let postagem = { //sintaxe para criar um objeto
        titulo: inserirTitulo.value, //chave que vai pegar como valor a variavel inserirTitulo
        autor: inserirAutor.value, //chave que vai pegar como valor a variavel inserirAutor
        conteudo: inserirConteudo.value //chave que vai pegar como valor a variavel inserirConteudo 
    }

    let localParaImprimir = document.getElementById("container-de-posts") // local para imprimir os posts
    localParaImprimir.innerHTML += `<p>${postagem.titulo}</p>` + `<p>${postagem.autor}</p>` + `<p>${postagem.conteudo}</p>` // vai imprimir o conteudo do objeto postagem na variavel localParaImprimir, localizada no container-de-posts

    inserirTitulo.value = ""
    inserirAutor.value = ""
    inserirConteudo.value = ""
 
}