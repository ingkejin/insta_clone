let joinBtn = document.getElementById('join-btn');
let animateInputs = document.querySelectorAll('.animate-input');

let emailAct = nameAct = idAct = pwAct = false;

let userEmail = document.getElementById('user-email'); 
let userName = document.getElementById('user-name'); 
let userId = document.getElementById('user-id'); 
let userPw = document.getElementById('user-pw');

function updateInputState(input, activeVar) {
  if(input.value.trim().length > 0) {
    input.parentElement.classList.add("active");
    activeVar = true;
  } else {
    input.parentElement.classList.remove("active");
    activeVar = false;
  }
  return activeVar;
}


animateInputs.forEach((item) => {
  let input = item.querySelector('input');

  input.addEventListener('keyup', () => {
    if(input == userEmail) {
      emailAct = updateInputState(input, emailAct);
    } else if (input == userName) {
      nameAct = updateInputState(input, nameAct);
    } else if(input == userId) {
      idAct = updateInputState(input, idAct);
    } else if(input == userPw) {
      pwAct = updateInputState(input, pwAct);;
    }

    if(emailAct && nameAct && idAct && pwAct) {
      joinBtn.removeAttribute("disabled");
    } else {
      joinBtn.setAttribute("disabled", true);
    }
  })
});


let pwInput = document.getElementById('user-pw');
let pwBtn = document.getElementById('pw-btn');

function pwToggle() {
  let pwVisible = pwInput.getAttribute("type") === "text";

  pwInput.setAttribute("type", pwVisible ? "password" : "text");
  pwBtn.innerHTML = pwVisible ? "비밀번호 표시" : "숨기기";
}

pwBtn.addEventListener('click', pwToggle);



