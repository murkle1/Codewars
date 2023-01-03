function fibonacci(){
    let output = []; 
    if(n === 1){
        output = [0];
    }else if(n === 2){
        output = [0, 1]
    }else{
        output = [0, 1]

        for(i = 2; i < n; i++){
            output.push([output.length - 2] + [output.length -1]);
        }
    }
    return output
}

fibonacci(5)