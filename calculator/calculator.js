let myResult = document.getElementById('inputNumber');

function calculate(number){
    myResult.value += number;
};
function result(){
    try {
        myResult.value = eval(myResult.value)
    }
    catch(err){
       alert(' syntax error')
    }
}
function clr(){
    myResult.value = ' ';
}
function del(){
    myResult.value = myResult.value.slice(0,-1);
}