var myInputScreen = document.querySelector(".myInput");
var buttonNumber = document.querySelectorAll(".myNumber");
var buttonOperators = document.querySelectorAll(".myOperator");
var buttonDeleteAll = document.querySelector(".deleteAll");
var buttonC = document.querySelector(".deleteOneElement");

//function all buttons numbers to display
buttonNumber.forEach((buttonNum) => {
  buttonNum.addEventListener("click", () => {
    myInputScreen.value += buttonNum.innerText;
  });
});
// end function all buttons numbers to display
//function all buttons operators to display
buttonOperators.forEach((buttonOper) => {
  buttonOper.addEventListener("click", () => {
    myInputScreen.value += buttonOper.innerText;
  });
});
// end function all buttons operators to display
//function to delete all element on screen
buttonDeleteAll.addEventListener("click", () => {
  myInputScreen.value = "";
});
// end function to delete all element on screen
//function to delete one element on screen
buttonC.addEventListener("click", () => {
  myInputScreen.value = myInputScreen.value.slice(0, -1);
});
//function to delete one element on screen
