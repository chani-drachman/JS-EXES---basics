function filteCarArr(arr){
let filteredCars =arr.filter(function(car){
    return Object.values(car)[0]>80;
})
let arr2=filteredCars.map(function(car){
return (`${Object.keys(car)[0]}: ${Object.values(car)[0]}`)
})

return arr2;
}

let arr=[{"mazda":90}, {"BMW":130}, {"TOYOTA":100}, {"SKODA":80}, {"SUZUKI":70}, {"TESLA":130}]

console.log(filteCarArr(arr))