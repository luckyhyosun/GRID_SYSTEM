const small_grid = document.querySelector('.small_grid');
const icon = document.getElementById("icon");
const icon1 = document.getElementById("a");
const icon2 = document.getElementById("b");
const icon3 = document.getElementById("c");
const nav = document.getElementById('nav');
const navList = document.querySelector('.navList');
let navListPics;
let navSelectedList = [];
let smallRectHtml;

const width_array = [0, 100, 200, 300];
const height_array = [0, 100, 200, 300, 400, 500];
const rotate_deg = [0, 90, 180, 270];


function howManyGrid(num){
  console.log(num);
}

//nav
icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
});

//making nav list
for(i = 0; i < 4; i++){
  navList.innerHTML += `
  <li class="eachListImg">
    <img class="navListPic" src="imgs/grid_${i}.png" value="${i}">
  </li>
  `
}

//setting small grids for shuffle
//for loop 다음에 html tag가 만들어진 뒤, getElement해야 한다.
navListPics = Array.from(document.getElementsByClassName('navListPic'));
navListPics.forEach(data => {
  data.addEventListener('click', function(){
    data.classList.toggle('listSelected');
    navListPicValue = data.getAttribute("value");

    //toggle 되어 select된 그리드만 모은 Array.
    const selectedListPics = document.getElementsByClassName('listSelected');
    navSelectedList = Array.from(selectedListPics)
    console.log(navSelectedList);
  })
})




//generate grid System
for(i = 0; i < 5; i++){
  //make each img tags
  let html = '<img class = "eachRect" src =imgs/grid_3.png>';
  small_grid.innerHTML += html;

  //add position to each elements
  const eachRects = Array.from(document.getElementsByClassName('eachRect'));

  eachRects.forEach(element => {
    element.style.cssText = `
      top: ${height_array[Math.floor(Math.random() * 6)]}px;
      left: ${width_array[Math.floor(Math.random() * 4)]}px;
      transform: rotate(${rotate_deg[Math.floor(Math.random() * 4)]}deg);
    `;
  })
}
