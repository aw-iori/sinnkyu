const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// スライドを表示する関数
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}      

// 前のボタンをクリックした時の処理
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// 次のボタンをクリックした時の処理
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// 初期表示
showSlide(currentIndex);

const wrapper = document.querySelector('.slide-wrapper');
const colorValue = 100 / 3; // 計算
wrapper.style.color = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;