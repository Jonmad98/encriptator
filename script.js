const textArea=document.querySelector(".text-area");
const message= document.querySelector(".message");
const copy=document.querySelector(".copied");


function validateText(){
    let textWrite =  document.querySelector(".text-area").value;
    let validator = textWrite.match(/^[a-z]*$/);

    if(!validator || validator===0){
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function encrypt(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

function btnEncript(){
    if(!validateText()){
        const encryptText=encrypt(textArea.value)
        message.value=encryptText
        message.style.backgroundImage = "none"
        textArea.value="";
        copy.style.display = "block"
    }
}

function uncrypt(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}

function btnUncript(){
    const textoEncriptado = uncrypt(textArea.value)
    message.value = textoEncriptado
    textArea.value = "";
    
}

function copied(){
    message.select();
    navigator.clipboard.writeText(message.value)
    message.value = "";
    alert("Texto Copiado")
}
