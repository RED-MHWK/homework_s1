/*
Note
we got 24 values in an order
0 = 100.00
1 = 100.00
2 = 100.00
3 = 200.00
4 = 200.00
5 = 200.00
6 = 250.00
7 = 250.00
8 = 400.00
9 = 400.00
10 = 400.00
11 = 320.00
12 = 320.00
13 = 320.00
14 = 320.00
15 = 360.00
16 = 360.00
17 = 360.00
18 = 300.00
19 = 300.00
20 = 300.00
21 = 300.00
22 = 150.00
23 = -10.000
 */

const pricePreview = [100.00, 100.00, 100.00, 200.00, 200.00, 200.00, 250.00, 250.00, 400.00, 400.0, 400.00, 320.00, 320.00, 320.00, 320.00, 360.00, 360.00, 360.00, 300.00, 300.00, 300.00, 300.00, 150.00, -10.000]


function priceComparison(hoursNeeded) {
const cheapest = pricePreview.indexOf(Math.min(...pricePreview));
const indexPos = cheapest + hoursNeeded;
const currentConc = [];
if(hoursNeeded >= 24 || hoursNeeded <= 0){
    throw new Error('Hours needed for the process must be within the range 24 hours, therefore more than 0 and less than 24.');
    }
else{
    if (indexPos === pricePreview.length) {
        return cheapest;
    } else {
for(let i = pricePreview[0]; i < hoursNeeded; i++){

    currentConc.push(pricePreview.indexOf())
    }
    }
}
}


/*

 */

console.log(priceComparison(2))
export {priceComparison}