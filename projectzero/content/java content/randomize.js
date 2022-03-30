function função(){
    let para = document.createElement('p');
    para.textContent = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
    document.body.appendChild(para);
    document.querySelector('.maincont').style.color = "red";
}
// for(let i = 0; i < buttons.length ; i++) {
//     buttons[i].addEventListener('click', função);
// }


// function createParagraph() {
//         let para = document.createElement('p');
//         para.textContent = 'T E S T F I E L D';
//         document.body.appendChild(para);
//       }
//       document.querySelectorAll('button');
//       
//       for(let i = 0; i < buttons.length ; i++) {
//         buttons[i].addEventListener('click', createParagraph);
//       }

// for (var a=[],i=0;i<40;++i) a[i]=i;

// function shuffle(array) {
//   var tmp, current, top = array.length;
//   if(top) while(--top) {
//     current = Math.floor(Math.random() * (top + 1));
//     tmp = array[current];
//     array[current] = array[top];
//     array[top] = tmp;
//   }
//   return array;
// }

// a = shuffle(a);


function test(){
for (var a=[],i=0;i<40;++i) a[i]=i;


  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;




}
a = test(a);
    alert(a);
function test1(){
    alert("second function is called");
}