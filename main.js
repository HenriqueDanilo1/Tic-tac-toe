let turn = 1
let painel = document.getElementById('painel')
let a = document.getElementById('1')
let b = document.getElementById('2')
let c = document.getElementById('3')
let d = document.getElementById('4')
let e = document.getElementById('5')
let f = document.getElementById('6')
let g = document.getElementById('7')
let h = document.getElementById('8')
let i = document.getElementById('9')
let table = document.getElementById('table')

function play(me){
    if(turn == 1){
        me.innerHTML="X"
        turn+=1
        painel.innerHTML="Its O turn"
        me.classList.add("X")
    } else{
        me.innerHTML="O"
        turn-=1
        painel.innerHTML="Its X turn"
        me.classList.add("O")
    }
    me.removeAttribute('onclick')
    if(
        ((a, b, c).classList.contains("O")) &&
        ((d, e, f).classList.contains("O")) &&
        ((g, h, i).classList.contains("O")) &&
        ((a, f, i).classList.contains("O")) &&
        ((c, e, g).classList.contains("O"))
    ){gg("O")}
}

function gg(team){
    table.style.pointerEvents='none'
    painel.innerHTML=`${team} win!`
}