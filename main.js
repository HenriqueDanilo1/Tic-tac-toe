let turn = 1
let dummy = 0
let painel = document.getElementById('painel')
let table = document.getElementById('table')
let res = document.getElementById('res')
let td = document.getElementsByTagName('td')

let a = document.getElementById('1')
let b = document.getElementById('2')
let c = document.getElementById('3')
let d = document.getElementById('4')
let e = document.getElementById('5')
let f = document.getElementById('6')
let g = document.getElementById('7')
let h = document.getElementById('8')
let i = document.getElementById('9')


function play(me){
    if(turn == 1){
        me.innerHTML="X"
        turn+=1
        painel.innerHTML="Its O turn"
        me.classList.add("X")
        dummy+=1
    } else{
        me.innerHTML="O"
        turn-=1
        painel.innerHTML="Its X turn"
        me.classList.add("O")
        dummy+=1
    }
    me.removeAttribute('onclick')
    if(
        (a.classList.contains("O") && b.classList.contains("O") && c.classList.contains("O")) ||
        (d.classList.contains("O") && e.classList.contains("O") && f.classList.contains("O")) ||
        (g.classList.contains("O") && h.classList.contains("O") && i.classList.contains("O")) ||
        (a.classList.contains("O") && e.classList.contains("O") && i.classList.contains("O")) ||
        (c.classList.contains("O") && e.classList.contains("O") && g.classList.contains("O"))
    ){gg("O")}
    if(
        (a.classList.contains("X") && b.classList.contains("X") && c.classList.contains("X")) ||
        (d.classList.contains("X") && e.classList.contains("X") && f.classList.contains("X")) ||
        (g.classList.contains("X") && h.classList.contains("X") && i.classList.contains("X")) ||
        (a.classList.contains("X") && e.classList.contains("X") && i.classList.contains("X")) ||
        (c.classList.contains("X") && e.classList.contains("X") && g.classList.contains("X"))
    ){gg("X")}
    if(dummy==9){notgg()}
}

function gg(team){
    table.style.pointerEvents='none'
    painel.innerHTML=`${team} won!`
    painel.classList.add(`${team}`)
    res.classList.remove('invisible')
    dummy = 0
}

function notgg(){
    table.style.pointerEvents='none'
    painel.innerHTML=`No one won!`
    res.classList.remove('invisible')
    dummy = 0
}

function restart(){
    td.classList.remove('X')
}