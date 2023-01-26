/*map at jeans*/
// Rrit cmimin e loose fit jeans per 5% 

let prices = Array(4).fill(29.99);

let newPrices = prices.map(price => "$" + (price * 1.05).toFixed(2));

let jeans = document.querySelectorAll("h4[id^='jeans']");

jeans.forEach(function(jeans, index){
    jeans.innerHTML = newPrices[index];
});

const Alljeansprices = [{name : 'Wide-leg ’90s jeans' , price: 12.99},{name : 'Straight-fit vintage jeans' , price: 25.99}
,{name : 'Loose fit jeans' , price: 31.49}];



const Filteredprices = Alljeansprices.filter((item) => {return item.price < 30});
console.log(Filteredprices);

const totali = Alljeansprices.reduce((totalimomental,items) => {return items.price + totalimomental},0);
console.log(totali);