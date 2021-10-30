const small_grid = document.querySelector('.small_grid');
const icon = document.getElementById("icon");
const icon1 = document.getElementById("a");
const icon2 = document.getElementById("b");
const icon3 = document.getElementById("c");
const nav = document.getElementById('nav');
const navList = document.querySelector('.navList');
const navRangeBar = document.querySelector('.navRangeBar');
let navSelectedList = [];
let usingGridArray = [];


const width_array = [0, 50, 100, 150, 200, 250, 300];
const height_array = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
const rotate_deg = [0, 90, 180, 270];


// refresh with nav setting
document.querySelector('.btn').addEventListener('click', function(){
  let gridHtml = '';
  const iteration = localStorage.getItem('blocks');
  const num = JSON.parse(localStorage.getItem('grids'));
  for(i=0; i<iteration; i++){
    num.forEach(num => {
      gridHtml += `<img class = "eachRect" src =imgs/grid_${num}.png>`
    })
  }
  generateSystem(gridHtml);
})
if(localStorage.getItem('navState') == 'on'){
  nav.classList.add('show');
}else{
  nav.classList.remove('show');
}
const blocksNum = localStorage.getItem('blocks'); //number type
const gridsNum = JSON.parse(localStorage.getItem('grids')); //array type





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
function howManyGrid(num){
  var iteration = localStorage.getItem('blocks');
  navRangeBar.addEventListener("input", function(){
    const navRangeValue = navRangeBar.value;
    target.innerHTML = navRangeValue;
    iteration = navRangeValue;

    let gridHtml = '';
    for(i=0; i<iteration; i++){
      num.forEach(num => {
        gridHtml += `<img class = "eachRect" src =imgs/grid_${num}.png>`
      })
    }
    generateSystem(gridHtml);
  });

  let gridHtml = '';
  for(i=0; i<iteration; i++){
    num.forEach(num => {
      gridHtml += `<img class = "eachRect" src =imgs/grid_${num}.png>`
    })
  }
  generateSystem(gridHtml);
}




//CHOOSE HOW MANY GRIDS ARE GONNA USED..
const navListPics = Array.from(document.getElementsByClassName('navListPic'));
//각각의 그리드 이미지를가 html tag가 만들어진 뒤, getElement해야 한다.
if(gridsNum){
  // console.log(gridsNum);
  gridsNum.forEach(value => {
    // console.log(navListPics);
    navListPics.forEach(pic => {
      if(value == pic.getAttribute('value')){
          // console.log(pic.parentElement);
          pic.classList.add('listSelected');
      }
    })
  })
}
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
    localStorage.setItem('grids', JSON.stringify(valueArray));
    howManyGrid(valueArray);
  })
})



//CHOOSE HOW MANY BLOCKS ARE GONNA USED..
var target = document.querySelector('.navRangeTextValue');
if(blocksNum){
  target.innerHTML = blocksNum;
  navRangeBar.value = blocksNum;
}
navRangeBar.addEventListener("input", function(){
  const navRangeValue = navRangeBar.value;
  target.innerHTML = navRangeValue;
  localStorage.setItem('blocks', navRangeValue);
  // howManyBlocks(navRangeValue);
});




//generate grid System
function generateSystem(html){
  small_grid.innerHTML = html;
  console.log(small_grid.children);

  const eachRects = Array.from(document.getElementsByClassName('eachRect'));

  eachRects.forEach(element => {
    element.style.cssText = `
      top: ${height_array[Math.floor(Math.random() * 11)]}px;
      left: ${width_array[Math.floor(Math.random() * 7)]}px;
      transform: rotate(${rotate_deg[Math.floor(Math.random() * 4)]}deg);
    `;
  })
}
