let bill = 0;


let billFlag = false;
let peopleFlag = false;
let tipFlag = false;
let peopleNum = document.querySelector('#peopleInput').value;

let tipValue = 0;

let totalNums = document.querySelector('#totalNum');
let tipNum = document.querySelector('#tipAmtNum');


let allBtns = document.querySelectorAll('.tipPercent');


function updateBill(){
    bill = parseInt(document.querySelector('#billInput').value);
    console.log(bill)
    billFlag = true
    
}
function updatePeople(){
    peopleNum = parseInt(document.querySelector('#peopleInput').value);
    if (peopleNum > 0){
        peopleFlag = true;
        document.querySelector('#peopleInput').style.borderColor = 'transparent';
        document.querySelector('#warning').style.display = 'none';
    } else{
        peopleFlag = false;
        document.querySelector('#peopleInput').style.borderColor = 'red';
        document.querySelector('#warning').style.display = 'inline';
    }
    
    console.log(peopleNum);
}


function btnClick(v){
    tipValue = (v)/100;
    console.log(tipValue)
    tipFlag = true;
    
    
}
        
 
    
function updateCustom(){

    tipValue = (document.querySelector('#customInput').value)/100;
    console.log(tipValue)
    tipFlag = true;
}

function calculateTip(b,t,p){
    if(tipFlag == true && peopleFlag == true && billFlag == true){
        let finalTip = parseInt(((b*t)/p).toFixed(2));
        let totalCost = ((b + finalTip)/p).toFixed(2);
        tipNum.innerText = `$${finalTip}`;
        totalNums.innerText = `$${totalCost}`;
        console.log(finalTip);
        console.log(totalCost);
        if (parseInt(totalCost) > 99){
            totalNums.style.marginRight = '35px';
        }
    }
    
}
function reset(){
    bill = 0;
    tipValue = 0;
    document.querySelector('#peopleInput').value = 0;
    totalNums.innerText = '$0.00';
    tipNum.innerText = '$0.00';
    totalNums.style.marginRight = '0';
    document.querySelector('#billInput').value = 0;

}








