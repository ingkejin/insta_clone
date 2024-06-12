function updateInputState(input, activeVar) {
  // trim() 공백
  // 공백 제거한 value 값의 길이가 0보다 클 때
  if(input.value.trim().length > 0) {
    input.parentElement.classList.add('active');
    activeVar = true;
  } else {
    // value 값의 길이가 없을 때 
    input.parentElement.classList.remove('active');
    activeVar = false;
  }

  return activeVar;
}

let userId = document.getElementById('userid');
let userPw = document.getElementById('userpw');

let idActive = false;
let pwActive = false;
// let idActive = pwActive = false;

let submitBtn = document.getElementById('submit-btn');

function handleInput(e) {
  // e.target => 이벤트가 일어나는 대상
  let input = e.target;
  let type = input.getAttribute("type");
  
  if(type == "text") {
    idActive = updateInputState(input, idActive);
  } else {
    pwActive = updateInputState(input, pwActive);
  }

  if(idActive && pwActive) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
}

userId.addEventListener('keyup', handleInput);
userPw.addEventListener('keyup', handleInput);