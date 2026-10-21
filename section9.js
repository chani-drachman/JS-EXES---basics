function frequency(string){
let count=0;
    for(let i=0; i<string.length; i++){
      count=0;
        for(let j=0; j<string.length; j++){
            if(string[i].toUpperCase()==string[j].toUpperCase())
                count++}
            console.log(`${string[i]} appears ${count} times`)
    }
}

frequency("chch12c")