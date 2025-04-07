function quadrante(x,y){
    if (x==0 && y==0) return "origem";
    if (x>= 0 && y >= 0) return "Q1"
    if (x<0 && y <0) return "Q3"
    if (x>=0 && y <0) return "Q4"
    return "Q2"
}
function triang (xx,yy,zz){
    let array = [xx,yy,zz]
    array.sort(function(a,b) {return b-a});
    let x = array[0]; let y = array[1]; let z = array[2]
    if (x >= y+z) return console.log("nao forma triangulo")
    if (Math.pow(x,2) == Math.pow(y,2)+Math.pow(z,2)) console.log("triangulo retangulo")
    if (Math.pow(x,2) > Math.pow(y,2)+Math.pow(z,2)) console.log("triangulo obtusangulo")
    if (Math.pow(x,2) < Math.pow(y,2)+Math.pow(z,2)) console.log("triangulo acutangulo")
    if (x==y && x==z) return console.log("triangulo equilatero")
    if (x==y || x==z || z==y) console.log("triangulo isoceles")
}

