const button = document.getElementById('goToOfficialSite');
const content = document.querySelector('.hidden-content');

// localStorageから表示状態を取得
const isContentVisible = localStorage.getItem('isContentVisible') === 'true';

// 初期表示状態を設定
if (!isContentVisible) {
  content.style.display = 'none';
}

button.addEventListener('click', () => {
  // 表示状態を切り替える
  content.style.display = content.style.display === 'none' ? 'block' : 'none';

  // localStorageに表示状態を保存
  localStorage.setItem('isContentVisible', content.style.display === 'block');
});