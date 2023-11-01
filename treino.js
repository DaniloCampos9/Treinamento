const nome = "Danilo";

function getEventoAleatorio() {
    let random_num = Math.floor(Math.random() * 3); 
    let evento = " ";
    if(random_num === 0){
        evento = "Maratona";
    }else if(random_num === 1){
        evento = "Triathlon";
    }else{
        evento = "Pentathlon"
    }
    return evento;
}

function getDiasTreino(evento){
    let dias = 0
    if(evento === "Maratona"){
        dias = 50
    }else if(evento === "Triathlon"){
        dias = 100
    }else{
        dias = 200
    }
    return dias;
}

function logEvento(nome, evento){
    console.log(`${nome} participará do ${evento}`);
}

function logTempo(nome, dias){
    console.log(`${nome} terá ${dias} dias para se preparar`);
}

let evento = getEventoAleatorio();
let dias = getDiasTreino(evento);

logEvento(nome, evento);
logTempo(nome, dias);