function clr(){
  const inputFeild = document.getElementById('display');
  inputFeild.innerText = '';
}

function dis(value){
  const inputFeild = document.getElementById('display');
  inputFeild.innerText += value;
}

function del(){
  const inputFeild = document.getElementById('display');
  inputFeild.innerText = inputFeild.innerText.slice(0, -1);
}


function myFunction(event) {
  if (event.key == '0' || event.key == '1' 
  || event.key == '2' || event.key == '3'
      || event.key == '4' || event.key == '5' 
      || event.key == '6' || event.key == '7'
      || event.key == '8' || event.key == '9' 
      || event.key == '+' || event.key == '-'
      || event.key == '*' || event.key == '/')
      document.getElementById("display").value += event.key;
      console.log(event);
}


  function solve() {
    try{
      let x = document.getElementById("display").innerText;
      let y = eval(x);
      let solution = document.getElementById("display").innerText = y;
    }
    catch{
      let solution = document.getElementById("display").innerText = 'Error';
    }
  }