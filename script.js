function updateInputState(input, activeVar) {
  // trim() 공백
  // 공백 제거한 value 값의 길이가 0보다 클 때 => 사용자가 input 창에 입력한 값이 하나라도 있냐
  if(input.value.trim().length > 0) {
    input.parentElement.classList.add('active');
    activeVar = true;
  } else {
    // value 값의 길이가 없을 때 
    input.parentElement.classList.remove('active');
    activeVar = false;
  }

  // return : 해당 함수가 실행된 후, 함수 호출한 위치로 전달되는 값
  return activeVar; // true , false
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
    idActive = updateInputState(input, idActive); // return 값 => true, false
  } else {
    // type이 text가 아닐 경우 => password
    pwActive = updateInputState(input, pwActive); // return 값 => true, false
  }

  // idActive랑 pwActive가 모두 참일 때 => input.value.length > 0
  if(idActive && pwActive) {
    submitBtn.removeAttribute('disabled');
  } else {
    // idActive나 pwActive 중 둘 중 하나라도 false 일 때 
    submitBtn.setAttribute('disabled', true);
  }
}

userId.addEventListener('keyup', handleInput);
userPw.addEventListener('keyup', handleInput);

