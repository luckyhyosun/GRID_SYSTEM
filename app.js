const small_grid = document.querySelector('.small_grid');
const icon = document.getElementById("icon");
const icon1 = document.getElementById("a");
const icon2 = document.getElementById("b");
const icon3 = document.getElementById("c");
const nav = document.getElementById('nav');
const navList = document.querySelector('.navList');
const navRangeBar = document.querySelector('.navRangeBar');
let navListPics;
let navSelectedList = [];
let smallRectHtml;
let navRangeValue;
let usingGridArray = [];

const width_array = [0, 100, 200, 300];
const height_array = [0, 100, 200, 300, 400, 500];
const rotate_deg = [0, 90, 180, 270];

//initial setting
// localStorage.setItem('grids', 3);
// localStorage.setItem('blocks', 7);

//refresh with nav setting
document.querySelector('.btn').addEventListener('click', function(){
  location.reload();
})
if(localStorage.getItem('navState') == 'on'){
  nav.classList.add('show');
}else{
  nav.classList.remove('show');
}
const blocksNum = localStorage.getItem('blocks');


//nav
icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
  if(nav.classList.contains('show')){
    localStorage.setItem('navState', 'on');
  }else{
    localStorage.setItem('navState', 'off');
  }
});



//making nav list
for(i = 0; i < 4; i++){
  navList.innerHTML += `
  <li class="eachListImg">
    <img class="navListPic" src="imgs/grid_${i}.png" value="${i}">
  </li>
  `
}

//main functions
function howManyGrid(array, num){
  // console.log(array, num);
  localStorage.setItem('grids', num);
}

function howManyBlocks(num){
  // console.log(num);
  localStorage.setItem('blocks', num);
}



//CHOOSE HOW MANY GRIDS ARE GONNA USED..
navListPics = Array.from(document.getElementsByClassName('navListPic'));
//각각의 그리드 이미지를가 html tag가 만들어진 뒤, getElement해야 한다.

navListPics.forEach(data => {
  data.addEventListener('click', function(){
    data.classList.toggle('listSelected');

    //toggle 되어 select된 그리드만 모은 Array.
    const valueArray = [];
    const selectedListPics = document.getElementsByClassName('listSelected');
    navSelectedList = Array.from(selectedListPics);
    navSelectedList.forEach(data => {
      valueArray.push(data.getAttribute('value'));
      // console.log(valueArray);
    })
    howManyGrid(navSelectedList, valueArray);
  })
})



//CHOOSE HOW MANY BLOCKS ARE GONNA USED..
var target = document.querySelector('.navRangeTextValue');
if(blocksNum){
  target.innerHTML = blocksNum;
  navRangeBar.value = blocksNum;
}
navRangeBar.addEventListener("input", function(){
  navRangeValue = navRangeBar.value;
  target.innerHTML = navRangeValue;
  // console.log(navRangeValue);
  howManyBlocks(navRangeValue);
});




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
