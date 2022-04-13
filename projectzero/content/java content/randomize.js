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

for (var a=[],i=0;i<40;++i) a[i]=i;

function embaralharNumero(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  a = embaralharNumero(a);
  let para = document.createElement('p');
  para.textContent = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + a;
  document.body.appendChild(para);
//   return array;
}



// function test(){
// for (var a=[],i=0;i<40;++i) a[i]=i;


//   var tmp, current, top = array.length;
//   if(top) while(--top) {
//     current = Math.floor(Math.random() * (top + 1));
//     tmp = array[current];
//     array[current] = array[top];
//     array[top] = tmp;
//   }
//   return array;




// }
// a = test(a);
//     alert(a);
// function test1(){
//     alert("second function is called");
// }

function aleatorio(){
    const bicatiri = criararray(10,100);
    bicatiri.sort((a, b) => a - b);
    const resultado = concatenar(bicatiri);
    let paragrafo = document.getElementById('resultadoRandom');
    paragrafo.textContent = resultado;
}


function criararray(length, max){
    
    const array = [];
    array.length = length
    for(i = 0; i < length; i++){
        let nextint = Math.floor(Math.random() * max + 1)

        while (array.find(element => element == nextint) !== undefined){
            nextint = Math.floor(Math.random() * max +1)
        }
        array[i] = nextint
      
    }
    return array;
}

function concatenar(array){
    let resultado = ""
    for(i=0; i< array.length; i++){
        
        resultado = resultado + array[i] + (array.length == i+1 ? "!": ", ")

    }
    return resultado;
}

