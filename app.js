let bill = document.querySelector('#billInput').value;
let billInterval = setInterval(updateBill, 10)

let billFlag = false;
let peopleFlag = false;
let tipFlag = false;
let peopleNum = document.querySelector('#peopleInput').value;
let peopleInterval = setInterval(updatePeople, 10);
let tipValue = 0;

let totalNums = document.querySelector('#totalNum');
let tipNum = document.querySelector('#tipAmtNum');

let updateTotals = setInterval(calculateTip(bill,tipValue,peopleNum),100);

function updateBill(){
    bill = document.querySelector('#billInput').value;
    billFlag = true
    
}
function updatePeople(){
    peopleNum = document.querySelector('#peopleInput').value;
    peopleFlag = true;
}


document.querySelectorAll('.tipPercent').forEach(btn =>{
    btn.addEventListener('click', event => {
        tipValue = (btn.id)/100;
        console.log(tipValue)
        tipFlag = true;
    })
}
    )
function updateCustom(){

    tipValue = (document.querySelector('#customInput').value)/100;
    console.log(tipValue)
    tipFlag = true;
}

function calculateTip(b,t,p){
    if(tipFlag == true && peopleFlag == true && billFlag == true){
        let finalTip = (b*t)/p;
        let totalCost = (b+finalTip)/p;
        tipNum.innerText = `$${finalTip}`;
        totalNums.innerText = `$${totalCost}`;
        console.log(tipNum);
        console.log(totalCost);
    }
    
}








