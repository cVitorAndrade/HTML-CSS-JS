var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    if(currentNumber < 50)
    {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }else{
        currentNumberWrapper.innerHTML = currentNumber;
    }
    check();
}

function decrement() {
    if(currentNumber > -50)
    {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }else{
        currentNumberWrapper.innerHTML = currentNumber;
    }
    check();
}

function check(){
    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red'
    }else if(currentNumber == 0){
        currentNumberWrapper.style.color = 'white';
    }else{
        currentNumberWrapper.style.color = 'rgb(255, 191, 0)';
    }
}