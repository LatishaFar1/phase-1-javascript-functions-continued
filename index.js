// Your code here
function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun();

function mondayWork(activity = "go to the office"){
    return(`This Monday, I will ${activity}.`);
}
mondayWork();

function wrapAdjective(){
    //How to make '*' work using 'let'
    function innerFunction(being="special"){
        return (`You are ${being}`);
    }
}
wrapAdjective();