const form = document.querySelector('.form');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

let guess = 3;

form.addEventListener('submit', submit);


function submit(e) {
   const value = parseInt(number.value);
   console.log(value);
   const winingNumber = Math.floor(Math.random() * 10);
   console.log(winingNumber);
   //validate
   if (isNaN(value) || value < 0 || value > 10) {
     setMessage(`Please enter a value between 1 to 10`, 'red')
   }

   //check if won
   if (value == winingNumber) {
     number.disabled = 'true';
     number.style.borderColor = 'green';
    setMessage(`Congratulations, YOU WIN, the number is ${winingNumber}`, 'green');
    buttonChange();
    windowReload();
   }
    //if entered wrong value
  else {
    guess = guess -1;

    if (guess === 0) {
      setMessage(`Finished Chances, the guess number is ${winingNumber}`, 'red');
      number.style.borderColor = 'red';
      number.disabled = 'true';
      buttonChange();
      windowReload();
    }

    else {
      setMessage(`Try again, you have ${guess} chances left`, 'red');
      number.style.borderColor = 'red';
    }
  }
  e.preventDefault();
  form.reset();
}

function setMessage(msg, color){
  message.textContent = msg;
  message.style.color = color;
}

function buttonChange () {
  const btn = document.querySelector('.btn');
   btn.className += 'playagain';
   btn.value = "Play Again";
}

function windowReload() {
  container.addEventListener('click', function(e) {
    if (e.target.classList == "btnplayagain") {
      window.location.reload();
    }
  })
}
