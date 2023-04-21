window.onload = function () {
  const randomNumber = Math.floor(Math.random() * 9000) + 1000; //generowanie losowej liczby 4-cyfrowej
  const header = document.getElementsByTagName('h2')[0]; //znajdowanie nagłówka na stronie
  header.innerHTML += '_' + randomNumber; //dodawanie losowej liczby do nagłówka
};
