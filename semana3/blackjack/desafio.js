//DESAFIO 8 =================================================================================================================================================================================================

// alert("Bem vindo ao jogo de Blackjack!")

//    if(confirm("Quer iniciar uma nova rodada?")) {
      
//    } else {
//       alert("O jogo acabou")
//    }

//    let usuario1 = comprarCarta()
   
//    console.log(usuario1.texto)
//    console.log(usuario1.valor)

//    let usuario2 = comprarCarta();
   
//    console.log(usuario2.texto)
//    console.log(usuario2.valor)

//    if(usuario1 && usuario2 === "A") {
//       usuario1 = comparCarta()
//       console.log("opa sortudo, pegou dois as, vou resetar suas cartas!")
//   }
     

//    let somaUsuario = (usuario1.valor + usuario2.valor)

//    let computador1 = comprarCarta();
  

//    console.log(computador1.texto)
//    console.log(computador1.valor)

//    let computador2 = comprarCarta();
   
    
//    if(computador1 && computador2 === "A") {
//       usuario1 = comparCarta()
//       console.log("opa sortudo, pegou dois as, vou resetar suas cartas!")
//   }

//    console.log(computador2.texto)
//    console.log(computador2.valor)
   
//    let somaComputador = (computador1.valor + computador2.valor)

   
// alert(`Usuário - cartas: ${usuario1.texto + " | " + usuario2.texto} - pontuação ${somaUsuario}
// Computador - cartas: ${computador1.texto + " | " + computador2.texto } - pontuação ${somaComputador}`)


//DESAFIO 9 =================================================================================================================================================================================================


alert("Bem vindo ao jogo de Blackjack!")

   if(confirm("Quer iniciar uma nova rodada?")) {
      
   } else {
      alert("O jogo acabou")
   }

   let usuario1 = comprarCarta()
   
   console.log(usuario1.texto)
   console.log(usuario1.valor)

   let usuario2 = comprarCarta();
   
   console.log(usuario2.texto)
   console.log(usuario2.valor)

      if(usuario1 && usuario2 === "A") {
         usuario1 = comparCarta()
         console.log("opa sortudo, pegou dois as, vou resetar suas cartas!")
   }
      

   let somaUsuario = (usuario1.valor + usuario2.valor)

   let computador1 = comprarCarta();
  

   console.log(computador1.texto)
   console.log(computador1.valor)

   let computador2 = comprarCarta();
   
      
      if(computador1 && computador2 === "A") {
         usuario1 = comparCarta()
         console.log("opa sortudo, pegou dois as, vou resetar suas cartas!")
   }

   console.log(computador2.texto)
   console.log(computador2.valor)
   
   let somaComputador = (computador1.valor + computador2.valor)

   
   if(confirm(
      `Suas cartas são ${usuario1.texto} e ${usuario2.texto}. A carta revelada do computador é ${computador1.texto}.` +
      "\n"+ 
      `Deseja comprar mais uma carta?`)){
         
      }
//          else if {
//             alert(`Usuário - cartas: ${usuario1.texto + " | " + usuario2.texto} - pontuação ${somaUsuario}
// Computador - cartas: ${computador1.texto + " | " + computador2.texto } - pontuação ${somaComputador}`)
//          }
//       }
      
   
   
//    let usuarioCartaBonus = comprarCarta()
   
//    console.log(usuarioCartaBonus.texto)
//    console.log(usuarioCartaBonus.valor)


