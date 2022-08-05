const button = document.querySelector('button')

const container = document.querySelector('.container')
let divs = []

button.addEventListener('click',getNumber)

function getNumber(){
    number = prompt('Enter a number between 0 and 100!')
    while(!(number <= 100 && number > 0)) {
        number = prompt('Make sure to enter a number between 0 and 100!')
    }
    drawGrid(number)
}
function drawGrid(number){
    for(let i = 0;i < number;i++){
        const div = document.createElement('div')
        container.appendChild(div)
        div.classList.add('grid')
        
        divs.push(div)
        for(item of divs){
            const innnerdiv = document.createElement('div')
            item.appendChild(innnerdiv)
            innnerdiv.classList.add('grid')


        }
      
    }


}




