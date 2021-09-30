let idade = 24;
let cnh = "Sim";

if((idade >= 18) && (cnh == "Sim")){
    console.log("Pode dirigir !!!");
} else if((idade >= 18) && (cnh == "Não")){
    console.log("Não tem CNH.");
} else if((idade < 18) && (cnh == "Sim")){
    console.log("Não tem idade para dirigir.");
} else if((idade < 18) && (cnh == "Não")){
    console.log("Não pode dirigir !!!");
}