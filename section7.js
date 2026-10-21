function filterOddEven(){

let filter={even:[], odd:[]}
let count=0;

for(let i=1; i<51; i++){
    if(i%2==0)
        filter.even.push(i)
    else filter.odd.push(i)
    if(i%2==0 && i%3==0)
        count++;

}
}