function nestedFamily(family){
    console.log(family.children[2].name)
    let children=family.children;
 let names=[]
    for(let i=0; i<children.length; i++){
        names.push(children[i].name)
    }

    console.log(names.join(","))
}