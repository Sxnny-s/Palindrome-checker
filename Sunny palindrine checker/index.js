const input = document.getElementById("input");
const answer = document.getElementById("answer")

function reverseString(str){
  return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    const reverse = reverseString(value)

    if (value === reverse && value !== ''){
        answer.style.color = '#92d754'
        answer.innerHTML = 'PALINDROME COMFIRMED'

    }else if (value === ''){
        answer.innerHTML = 'Invalid entry'
        answer.style.color = 'red'
    }
    else{
        answer.innerHTML = 'PALINDROME DENIED'
        answer.style.color = 'red'
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



