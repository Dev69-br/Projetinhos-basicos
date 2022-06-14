
function ligar(obj){
    if (!isQuebrada(obj)){
     obj.src ='imagens/ligada.jpg';   
    }
    
}

function desligar(obj){
    if(!isQuebrada(obj)){
     obj.src = 'imagens/desligada.jpg'   
    }
    
}

function quebrar(obj){
    if(!isQuebrada(obj)){
     obj.src = 'imagens/quebrada.jpg'   
    }
    
}


function isQuebrada(obj){
    return obj.src.indexOf('quebrada') > -1
}