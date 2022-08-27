var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}
/*Funcao abaixo localiza posicao do personagem
 para comparar com a do block e detectar se ouve hit*/

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=110){
        block.style.animation = "none";
        alert("Perdeu o jogo");
        counter=0;
        
    }
}, 10); 