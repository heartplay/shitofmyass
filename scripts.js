const headerInner = document.getElementById('header-inner')
const currentPage = document.getElementById('current-page')
const pageIndex = parseInt(currentPage.dataset.index)
const titleTag = document.getElementById('title')
// const titleTag = document.querySelector('head title')

function headerRender() {
  headerInner.insertAdjacentHTML('afterbegin', `<div class="header-inner-left">
  <div class="logo">
    <img src="main-page-avatar.jpg" alt=":(" id="avatar-logo"/> 
    GLEB FEDOSEEV
  </div>
</div>
<div class="header-inner-right">
  <div class="navigation">
    <div class="navigation-btn${pageIndex === 1 ? '-current-page' : ''}"><a href="index.html">На главную</a></div>
    <div class="navigation-btn${pageIndex === 2 ? '-current-page' : ''}"><a href="calculator.html">Калькулятор</a></div>
    <div class="navigation-btn${pageIndex === 3 ? '-current-page' : ''}">Page 3</div>
    <div class="navigation-btn${pageIndex === 4 ? '-current-page' : ''}">Page 4</div>
  </div>
</div>`);
}

window.onload = () => {
  headerRender();
};









