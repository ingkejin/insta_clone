let joinBtn = document.getElementById('join-btn');
let animateInput = document.querySelectorAll('.animate-input');

let emailAct = nameAct = idAct = pwAct = false;

let userEmail = document.getElementById('user-email');
let userName = document.getElementById('user-name');
let userId = document.getElementById('user-id');
let userPw = document.getElementById('user-pw');


function updateInputState(val, activeVar) {
  if(val.value.trim().length > 0) {
    // animate-input 에 active class add
    val.parentElemet.classList.add('active');
    activeVar = true
  } else {
    // animate-input 에 active class remove
    val.parentElemet.classList.remove('active');
    activeVar = false;
  }

  return activeVar;
}



animateInput.forEach((item) => {
  let input = item.querySelector('input');
  
  input.addEventListener('keyup', () => {
    
  })
})