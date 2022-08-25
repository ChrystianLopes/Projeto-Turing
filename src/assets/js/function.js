/*"e" = "enter"
"i" = "imes"
"a" = "ai"
"o" = "ober"
"u" = "ufat"*/

var entrada = document.querySelector("#mensagem");
var saida = document.querySelector("#mensagemCripto");	

function criptografar(){


var text = entrada.value;
var criptoText = text.replace(/[E\e\é\ê]/gi, "enter").replace(/[I\i\í]/gi, "imes").replace(/[A\a\á\â]/gi, "ai").replace(/[O\o\ó\ô]/gi, "ober").replace(/U\u\ú/gi, "ufat");
console.log(criptoText);

saida.innerText = criptoText;
entrada.value = "";
        
}

function descriptografar(){

var criptoText = entrada.value
var descriptoText = criptoText.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
console.log(descriptoText);

saida.innerText = descriptoText;
entrada.value = "";
    
}

function verificadora() {

var criptoText = entrada.value
var segredos = ["enter", "imes", "ai", "ober", "ufat"];
var verificar = segredos.some(elementoArray => criptoText.includes(elementoArray)); 

if (verificar) {
descriptografar();
} else {
alert('A mensagem não está criptografada');
}

}

function copy() {

let copyText = document.querySelector("#mensagemCripto");
copyText.select();
document.execCommand("copy");

}