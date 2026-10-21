function nestedArr(){
    let arr=[]
    for(let i=0; i<3; i++){
        let internalArr=[]
        for(let j=0; j<3; j++){
            internalArr.push(3)
        }
        internalArr[i]="#"
        internalArr[3-i-1]="#"
        console.log(internalArr)
    }
}

nestedArr()