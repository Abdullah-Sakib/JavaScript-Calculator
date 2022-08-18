function dis(value){
  document.getElementById('display').innerText += value;
}

function clr(){
  let inputFeild = document.getElementById('display');
  inputFeild.innerText = '';
}

function del(){
  let inputFeild = document.getElementById('display');
  inputFeild.innerText = inputFeild.innerText.slice(0, -1);
}

function solve(){
  try{
    let inputFeild = document.getElementById('display').innerText;
    inputFeild = eval(inputFeild);
    document.getElementById('display').innerText = inputFeild;
  }
  catch{
    document.getElementById('display').innerText = 'Error';
  }
}