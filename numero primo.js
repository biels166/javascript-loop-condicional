for(let n = 1; n <= 100; n += 1){
    
    if(n == 2){
        console.log(n + " é primo.");
    }
    if(n == 3){
        console.log(n + " é primo.");
    }
    if(n == 5){
        console.log(n + " é primo.");
    }
    if(n == 7){
        console.log(n + " é primo.")
    }
    
    if((n % 2 != 0)&&(n % 3 != 0)&&(n % 5 != 0)&&(n % 7!= 0)){
        console.log(n + " é primo.");
    }
}