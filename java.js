const button = document.querySelector('button')
const container = document.querySelector('.container')
let divs = []



button.addEventListener('click',getNumber)

function getNumber(){
    container.style.cssText = `width :${container.offsetHeight}px;`
    container.innerHTML = ""
    number = prompt('Enter a number between 0 and 100!')
    //number = 15
    while(!(number <= 100 && number > 0)) {
        number = prompt('Make sure to enter a number between 0 and 100!')
    }
    start()
    drawGrid(number)
}
function drawGrid(number){
    for(let i = 0;i < number;i++){
        const div = document.createElement('div')
        container.appendChild(div)
        //div.classList.add('horizontalgrid','grid')
        div.classList.add('hgrid')
        div.setAttribute('ID','hgrid')
        let hgrid = document.getElementById('hgrid')
        hgrid.style.cssText = `height : ${container.offsetHeight/number}px; width : ${container.offsetWidth}px; background-color : transparent;`
        
        
        divs.push(div)
        for(let i = 0;i < number;i++){
            const innerdiv = document.createElement('div')
            div.appendChild(innerdiv)
            innerdiv.classList.add('grid')
            innerdiv.setAttribute('ID','grid') 
            let grid = document.getElementById('grid')           
        }
      
    }
    let GRID2  = document.querySelectorAll('[id^="hgrid"]')
    for(let i = 0; i < GRID2.length; i++){
        GRID2[i].style.cssText = `height : ${container.offsetHeight/number-0.05}px; width : ${container.offsetWidth}px; background-color : transparent;`
    }
    grid  = document.querySelectorAll('[id^="grid"]')
    let GRID  = document.querySelectorAll('[id^="grid"]')
    for(let i = 0; i < GRID.length; i++){
    GRID[i].style.cssText = `height : ${container.offsetHeight/number-0.05}px; width : ${container.offsetWidth/number}px;`
    }
    
}
let value = false
function truefalse(){
    value == false ? value = true : value = false
}
function colorSquare(e){

    container.setAttribute('onmouseup','truefalse()')
    value = true
    container.addEventListener('mouseup',() => truefalse)
    let classli = e.path[0].classList
    if(value == true){
        grid.forEach(square => square.addEventListener('mouseover',(e) =>
            {if(classli.contains('gridblack') && value == true){
                e.path[0].classList.remove('gridblack')
                }
                else if(value == true && !(classli.contains('gridblack')))
                {e.path[0].classList.add('gridblack')
            }}))}
            

        
    



    //if(classli.contains('gridblack') && value == true){
    //    e.path[0].classList.remove('gridblack')
    //}
    //else if(value == true && !(classli.contains('gridblack'))){e.path[0].classList.add('gridblack')}
}
function mousedown(square)
{square.addEventListener('mouseover',colorSquare)
;console.log(e)}
//let grid  = document.querySelectorAll('[id^="grid"]')
let grid  = document.querySelectorAll('div');
function start(){grid.forEach(square => square.addEventListener('mousedown',colorSquare)) 
}

//grid.forEach(square => square.addEventListener('mousedown',colorSquare))




