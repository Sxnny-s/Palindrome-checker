const input = document.getElementById("input");

function reverseString(str){
  return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    const reverse = reverseString(value)

    if (value === reverse && value !== ''){
        alert("PALINDROME COMFIRMED")
    }else if (value === ''){
        alert("please type a value")
    }
    else{
        alert("PALINDROME DENIED")
    }

    input.value = ""
}
// end if palindrome checker
// adding color switcher to app

const button = document.getElementById('change');

function colorChange(){

    const red = Math.random() * 255;
    const blue = Math.random() * 255;
    const green = Math.random() * 255;


    button.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
}

