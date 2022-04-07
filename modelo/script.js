const mybutton = document.querySelector('.botton')
const container = document.querySelector(".container")
const buttonRespuesta = document.querySelector(".respuesta")
var img = document.querySelector("#image")





const firstInput = document.querySelector (".first-input")

const secondInput = document.querySelector (".second-input")




mybutton.addEventListener("click", (e) =>{
    container.style.display = "block"


})


buttonRespuesta.addEventListener("click",() =>{
    console.log(firstInput.value)

    if (firstInput.value.toLowerCase() === "aguilar" && secondInput.value.toLowerCase() === "cestau") {
        alert("Respuesta correcta!") 
            img.style.display = "block"
       }

       else if(!firstInput.value || !secondInput.value) {
        alert("escribe un texto wey")
        container.style.display ="none"
        }
    
        
        else {
    alert("Respuesta incorrecta!")
       }
})

  





