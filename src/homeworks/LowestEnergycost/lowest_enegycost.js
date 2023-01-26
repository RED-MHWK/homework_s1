
const pricePreview = [100.00, 100.00, 100.00, 200.00, 200.00, 200.00, 250.00, 250.00, 400.00, 400.0, 400.00, 320.00, 320.00, 320.00, 320.00, 360.00, 360.00, 360.00, 300.00, 300.00, 300.00, 300.00, 150.00, -10.000]

function pricecomparison(pricesConc) {
    let filteredConc = pricesConc.filter(val => !isNaN(val));
    let solution = Math.min(...filteredConc);
    return pricesConc.indexOf(solution);
}

function priceCalc(hoursNeeded) {
    if (hoursNeeded <= 0 || hoursNeeded >= 24){
        throw new Error('The time your process needs got to be between 0 and 24 hours.')
    }
    else{
        let pricesConc =[];
        for(let i = 0; i < pricePreview.length; i++){
            let value = 0;
            for(let j = i; j < i + hoursNeeded; j++){
                value += pricePreview[j];
            }
            pricesConc.push(value);
        }
    return pricecomparison(pricesConc);
    }
}


export{priceCalc}