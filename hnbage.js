const ham = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const line = [...document.querySelectorAll(`.line`)];
const body = document.body;
const navLinks = document.querySelectorAll('nav a');

ham.addEventListener('click', () => {
    nav.classList.toggle("open");
    line.forEach(el => el.classList.toggle("open"));
    body.classList.toggle('no-scroll');
});

// ナビゲーション内のリンクをクリックした時の処理を追加
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove("open");
        line.forEach(el => el.classList.remove("open"));
        body.classList.remove('no-scroll');
    });
});