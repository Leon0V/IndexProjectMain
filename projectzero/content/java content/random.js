function aleatorio(){
    const bicatiri = [];
    bicatiri.length = 10;
    let maximo = 120;
    let temp;
    for(i = 0; i < bicatiri.length; i++){
        
        bicatiri[i] = Math.floor(Math.random() * maximo);

        for( j = 0; j < i; j++){
            if(bicatiri[i]==bicatiri[j]){
                i--;
                break;
            }
        }
        
    }

    for( i = 0; i < bicatiri.length; i++){

        for( j = i; j < bicatiri.length; j++){

            if(bicatiri[i] > bicatiri[j]){

                temp = bicatiri[i];

                bicatiri[i] = bicatiri[j];
                bicatiri[j] = temp;
                

            }
        }
    }

    let resultado = ""
    for(i=0; i< bicatiri.length; i++){
        resultado = resultado + " " + bicatiri[i]
    }
    let paragrafo = document.getElementById('resultadoRandom');
    paragrafo.textContent = resultado;
}

