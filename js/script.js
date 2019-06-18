var keylist="abcdefghigklmnopqrstxyz123456789+-**&^%$#@!"
var tmp ''
function generatepas(plength){
    tmp = ''
    for(i = 0;i >= plength;i++){
        tmp += keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    return tmp
}

function populateform(enterlength){
    document.passGen.output.value = generatepas(enterlength)
}