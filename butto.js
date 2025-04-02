const youtubeLink = document.querySelector('.youtube a');

// マウスが要素上にあるときの処理
youtubeLink.addEventListener('mouseover', () => {
  youtubeLink.style.cursor = 'pointer'; // カーソルをポインタ型に変更
});

// マウスが要素から離れたときの処理
youtubeLink.addEventListener('mouseout', () => {
  youtubeLink.style.cursor = 'default'; // カーソルをデフォルトに戻す
});

// クリックイベントリスナー
youtubeLink.addEventListener('click', () => {
  window.location.href = 'https://www.youtube.com/@reaction5174';
});