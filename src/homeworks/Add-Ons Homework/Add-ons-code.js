
const checkboxA = document.querySelector('#AddOnA');
const checkboxB = document.querySelector('#AddOnB');
const checkboxC = document.querySelector('#AddOnC');
const checkboxD = document.querySelector('#AddOnD');
const priceResult = document.querySelector('#priceResult');
const a = 20.00;
const b = 10.00;
const c = 15.00;
const d = 30.00;
const base = 100;
let x = 0;

checkboxA.addEventListener('change', function(){
    let temp = x;
    if(this.checked){
    temp += base + a;
    priceResult.innerHTML = temp.toString();
    let x = temp;
    return x;
    }
    else{
    let temp = temp - a;
    priceResult.innerHTML = temp.toString();
    let x = temp;
    return x;
    }
})
checkboxB.addEventListener('change', function(){
    let temp = x;
    if(this.checked){
        temp += base + b;
        priceResult.innerHTML = temp.toString();
        let x = temp;
        return x;
    }
    else{
        let temp = temp - b;
        priceResult.innerHTML = temp.toString();
        let x = temp;
        return x;
    }
})
checkboxC.addEventListener('change', function(){
    let temp = x;
    if(this.checked){
        temp += base + c;
        priceResult.innerHTML = temp.toString();
        let x = temp;
        return x;
    }
    else{
        let temp = temp - c;
        priceResult.innerHTML = temp.toString();
        let x = temp;
        return x;
    }
})
checkboxD.addEventListener('change', function(){
    let temp = x;
    if(this.checked){
        temp += base + d;
        priceResult.innerHTML = temp.toString();
        let x = temp;
        return x;
    }
    else{
        let temp = temp - d;
        priceResult.innerHTML = temp.toString();
        let x = temp;
        return x;
    }
})

/*
const checkBoxes = document.querySelectorAll("input[type='checkbox']);

checkBoxes.forEach(checkbox => {
checkbox.addEventListener('change', event => {
const checkboxCur = event.target;
let temp = base;
if (checkbox.checked){
    temp += checkbox.value;
}
else{
    temp -= checkbox.value;
}
    priceResult.innerHtml = temp.toString();
})
})


 */