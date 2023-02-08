
// pin match & miss match message handler

document.getElementById('pin-missmatch-message').style.display = 'none';
document.getElementById('pin-match-message').style.display = 'none';


// generate pin handler

document.getElementById('generate-pin-btn').addEventListener('click',function(){
    let generatePin = Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000;
    document.getElementById('generate-pin-display').value = generatePin ;

    document.getElementById('pin-missmatch-message').style.display = 'none';
    document.getElementById('pin-match-message').style.display = 'none';
    document.getElementById('submit-display').value = '';
    document.getElementById('action-number').innerText = 3;
    document.getElementById('action-number-message').innerText = 'try left';

})

//digit button click handler

let digitBtn = document.querySelectorAll('.digit-btn');
for (let i = 0; i < digitBtn.length; i++) {
    const element = digitBtn[i];
    element.addEventListener('click',function(event){
       let btnText = event.target.innerText;
        document.getElementById('submit-display').value += btnText;        
    })
}

// clear button handler

document.getElementById('clear-btn').addEventListener('click',function(){
document.getElementById('submit-display').value = '';
});

//pin match verification
document.getElementById('submit-btn').addEventListener('click',function(){
    let generatePinDisplay = document.getElementById('generate-pin-display').value;
    let submitDisplay = document.getElementById('submit-display').value;
let actionNumberMessage = document.getElementById('action-number-message').innerText;
    if (generatePinDisplay == submitDisplay && generatePinDisplay!='' && submitDisplay!='' && actionNumberMessage != 'Try again after 15 minutes or press the generate button') {
       document.getElementById('pin-match-message').style.display = 'block';
       document.getElementById('pin-missmatch-message').style.display = 'none';
    }
    else {
        document.getElementById('pin-missmatch-message').style.display = 'block';
        document.getElementById('pin-match-message').style.display = 'none';
        let actionNumber = document.getElementById('action-number').innerText;
        let actionNewNumber = parseInt(actionNumber);
        
       if (actionNewNumber >0){
            document.getElementById('action-number').innerText=actionNewNumber-1;
        }
       else   {
            document.getElementById('action-number').innerText ='';
            document.getElementById('action-number-message').innerText = 'Try again after 15 minutes or press the generate button';
        }
      
        
       
    }
})
//delete button click handler
document.getElementById('delete-btn').addEventListener('click',function(){
    let submitDisplay =  document.getElementById('submit-display').value;
   let newSubmitDisplay = submitDisplay.slice(0,submitDisplay.length-1);
  
   document.getElementById('submit-display').value = newSubmitDisplay; 
})

