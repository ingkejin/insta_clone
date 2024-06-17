let uploadPopup = document.querySelector('.upload-wrapper');
let postAddBtn = document.querySelector('.post-upload-btn');
let postCloseBtn = document.querySelector('.post-close-btn');


function popupOpen(item) {
  item.classList.add('active');
}

function popupClose(item) {
  item.classList.remove('active');
}


// popupOpen 함수 매개변수 X
// 매개변수가 없을 경우 => click 이벤트가 발생했을 때 해당 함수 호출
// postAddBtn.addEventListener('click', popupOpen);

// 매개변수가 있을 경우 => () => { popupOpen(매개변수) }
postAddBtn.addEventListener('click', () => {popupOpen(uploadPopup)});
postCloseBtn.addEventListener('click', () => {popupClose(uploadPopup)});


// Option Btn
let optionPopup = document.querySelector('.more-option');
let optionBtn = document.querySelectorAll('.option-btn');
console.log(optionBtn)
let optionCloseBtn = document.querySelector('.option-close-btn');

optionBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    popupOpen(optionPopup)
  })
})

optionCloseBtn.addEventListener('click', () => {popupClose(optionPopup)})


// Canvas image
let fileUploadBtn  = document.getElementById('file-upload-btn');
let canvas = document.getElementById('img-canvas');
let ctx = canvas.getContext('2d');

function handleImage(e){
  let reader = new FileReader();
  reader.onload = function(event){
    let img = new Image();

    img.onload = function(){
      canvas.width = 500;
      canvas.height = 400;
      ctx.drawImage(img,0,0,500,400);
    };

    img.src = event.target.result;
  };

  reader.readAsDataURL(e.target.files[0]);
}


fileUploadBtn.addEventListener('change', handleImage);
