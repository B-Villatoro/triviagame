let numbers = 0;
let array = [];
numbersToArray = function(){
    for(let i=0; i<100;i++){
        numbers++;
        array.push(numbers);
    }
}


main = function(){
    for(let j = 0; j<array.length;j++){
        if(array[j]%5 === 0 ^ array[j]%3 === 0){        
            if(array[j]%3 === 0){
                console.log("fizz");
            }
            if(array[j]%5 === 0){
                console.log("buzz");
            }
            else{
                console.log(array[j]);
            }

        }
        if(array[j]%5 === 0 && array[j]%3 === 0){
            console.log("fizzbuzz");; 
        }

        
       
        
    
        

    }
       
}

numbersToArray();
main();
