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
if(hoursNeeded >= 4 && hoursneeded <= 23){
    throw new Error('Sorry, these values are not considered for now...')
}
else{
    if (indexPos === pricePreview.length) {
        return cheapest;
    } else {
    priceCompSt(hoursNeeded)
    }
}
}

function priceCompSt(hoursNeeded){
    if(hoursNeeded === 2) {
        const [first, second, ...rest] = pricePreview;
        const current = (first + second) / hoursNeeded;
        for (let i = 0; i < rest.length; i++) {
            let value = rest[i];
            if (current < value) {
                let windowedCheapest = pricePreview.indexOf(first)
                return windowedCheapest;
            }
        }
    }
    else{
        let pricePreview = rest;
        priceCompSt(pricePreview);
    }
    if(hoursNeeded === 3) {
        const [first, second, third, ...rest] = pricePreview;
        const current = (first + second + third) / hoursNeeded;
        for(let i = 0; i < rest.length; i++){
            let value = rest[i];
            if(current < value){
                let windowedCheapest = pricePreview.indexOf(first)
                return windowedCheapest;
            }
        }
    }
    else{
        let pricePreview = rest;
        priceCompSt(pricePreview);
    }
}


/*

 */

console.log(priceComparison(2))
export {priceComparison}