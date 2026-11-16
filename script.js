'use strict';
const chapters = [...document.querySelectorAll('details.chapter')];
const expandButton = document.querySelector('.expand-all');
const isEnglish = document.documentElement.lang === 'en';
function updateExpandButton() {
  const allOpen = chapters.every(chapter => chapter.open);
  expandButton.textContent = isEnglish
    ? (allOpen ? 'Collapse all' : 'Expand all')
    : (allOpen ? '收起全部' : '展开全部');
  expandButton.setAttribute('aria-expanded', String(allOpen));
}
expandButton.addEventListener('click', () => {
  const shouldOpen = !chapters.every(chapter => chapter.open);
  chapters.forEach(chapter => { chapter.open = shouldOpen; });
  updateExpandButton();
});
chapters.forEach(chapter => chapter.addEventListener('toggle', updateExpandButton));
