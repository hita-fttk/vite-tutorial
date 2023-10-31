let result = 0;


function addNumbers(){
    result = result + inputNumber;
    console.log(inputNumber);
    console.log(result);
    return result;
}

const addButton = document.getElementById("btn-add");
const inputNumber= document.getElementById("input-number").value;
console.log(inputNumber);


addButton.addEventListener("click",addNumbers);
console.log(addNumbers);

