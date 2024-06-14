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
    val.parentElement.classList.add('active');
    activeVar = true
  } else {
    // animate-input 에 active class remove
    val.parentElement.classList.remove('active');
    activeVar = false;
  }

  return activeVar;
}


animateInput.forEach((item) => {
  let input = item.querySelector('input');
  
  input.addEventListener('keyup', () => {
    if(input == userEmail) {
      emailAct = updateInputState(input, emailAct);
    } else if(input == userName) {
      nameAct = updateInputState(input, nameAct);
    } else if(input == userId) {
      idAct = updateInputState(input, idAct); 
    } else if(input == userPw) {
      pwAct = updateInputState(input, pwAct);
    }

    let allTrue = emailAct && nameAct && idAct && pwAct;
    if(allTrue) {
      // allTrue 안 값이 모두 참일 때 
      // joinBtn disabled 속성 remove
      joinBtn.removeAttribute('disabled');
      // joinBtn.setAttribute('disabled', false);
    } else {
      joinBtn.setAttribute('disabled', true);
    }
  })
})