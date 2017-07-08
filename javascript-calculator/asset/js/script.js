//Sets the value output

value = [];
// var displayLength = 0; //max 9
var decimal = false;
var added = false;
var subbed = false;
var multed = false;
var divided = false;
var result = false;

//All Clear Button
$("#allClear").on("click", function(){
    clearDisplay();
});

//Number Buttons
btnPress("#btn1", 1);
btnPress("#btn2", 2);
btnPress("#btn3", 3);
btnPress("#btn4", 4);
btnPress("#btn5", 5);
btnPress("#btn6", 6);
btnPress("#btn7", 7);
btnPress("#btn8", 8);
btnPress("#btn9", 9);
btnPress("#btn0", 0);

//Decimal Button
$("#btnDec").on("click", function(){ 
    if(decimal === false){
        $("#bigDisplay").append(".");
        $("#progress").append(".");
        decimal = true;
    }
});
//Max value in display - 
// function maxValue(){
//     if(displayLength >= 9){
//         $("#bigDisplay").text("ERROR");
//         $("#progress").text("Max Digit Limit");
//         value = [];
//         valueNum = 0;
//         displayLength = 0;
//         }
// }


//Clear Display
function clearDisplay(){
    value = [];
    $("#bigDisplay").text(0);
    $("#progress").text(0);
    displayLength = 0;
    decimal = false;
    added = false;
    subbed = false;
    multed = false;
    divided = false;
    result = false;
}


//Number Button Pressed
function btnPress(btn, num){
    $(btn).on("click", function(){
    added = false;
    subbed = false;
    multed = false;
    divided = false;
if($("#bigDisplay").text() === "0"){
    $("#bigDisplay").text(num);
    $("#progress").text(num);
} else if($("#bigDisplay").text() == "ERROR"){
    clearDisplay();
} else {
    $("#bigDisplay").append(num);
    $("#progress").append(num);
    // displayLength += 1;
}

// maxValue();
})
}

operators("#btnAdd", added, "+");
operators("#btnSub", subbed, "-");
operators("#btnMult", multed, "*");
operators("#btnDiv", divided, "/");

//Operators
function operators(button, operator, symbol){
$(button).on("click", function(){
    if(operator === false){
        value.push($("#bigDisplay").text());
        value.push(symbol);
        $("#bigDisplay").text("");
        $("#progress").append(symbol);
        decimal = false;
        console.log(value);
        added = true;
        subbed = true;
        multed = true;
        divided = true;
    }
})
};

$("#btnPer").on("click", function(){
    // if($("#bigDisplay").text() == "ERROR"){
    // clearDisplay();
    // }
    valueNum = parseFloat($("#bigDisplay").text()) * 0.01;
    $("#bigDisplay").text("");
    $("#bigDisplay").text(valueNum);
    $("#progress").append("%");
    // displayLength += 1;
    // maxValue();
    
})

$("#btnEql").on("click", function(){
        value.push($("#bigDisplay").text());
        answer = value.join("");
        $("#bigDisplay").text(eval(answer));
        result = true;
        value = [];  
})