let loginForm = document.getElementById("login-form");
let loginBtn = document.getElementById("login-btn");

let idActive = false;
let pwActive = false;

let userId = document.getElementById('userid');
let userPw = document.getElementById('userpw');

// 공통 함수: 입력 필드 상태 업데이트
// loginBtn 활성화 / 비활성화
// input 값 여부를 확인하고 상태 업데이트
function updateInputState(input, activeVar) {
  // 공백 제외 input.value.length가 0보다 클 때 => input에 값이 있다
  if(input.value.trim().length > 0) {
    input.parentElement.classList.add("active");
    activeVar = true;
  } else {
    input.parentElement.classList.remove("active");
    activeVar = false;
  }

  // 함수 실행 후, 해당 함수를 호출한 위치로 전달되는 값
  return activeVar;

}

// 로그인 버튼 활성화 / 비활성화
function handleInput(e) {
  // // 이벤트가 발생한 input 
  let input = e.target;
  let type = input.getAttribute("type");

  if (type === "text") {
    idActive = updateInputState(input, idActive);
  } else if (type === "password") {
    pwActive = updateInputState(input, pwActive);
  }

  if(idActive && pwActive) {
    loginBtn.removeAttribute("disabled");
  } else {
    loginBtn.setAttribute("disabled", "true");
  }
}

userId.addEventListener('keyup', handleInput);
userPw.addEventListener('keyup', handleInput);


// 비밀번호 표시 / 숨기기
let pwInput = document.getElementById('userpw');
let pwBtn = document.getElementById('pw-btn');

function pwToggle() {
  if(pwInput.getAttribute("type") == "text") {
    pwInput.setAttribute("type", "password");
    pwBtn.innerHTML = "비밀번호 표시";
  } else {
    pwInput.setAttribute("type", "text");
    pwBtn.innerHTML = "숨기기";
  }
}
pwBtn.addEventListener('click', pwToggle);


// id, pw submit
// loginBtn.addEventListener('click', function(e) {
//   if (idActive && pwActive) {
//     loginForm.submit();
//   } else {
//     e.preventDefault();
//   }
// });


// Dark | Light Mode Toggle
let modeBtn = document.getElementById("mode-btn");

function modeToggle(e) {
  e.preventDefault();
  let body = document.querySelector("body");
  body.classList.toggle("dark");

  // 삼항연산자
  darkmode_toggle.innerHTML = body.classList.contains("dark") ? "Lightmode" : "Darkmode";
}
modeBtn.addEventListener('click', modeToggle);


