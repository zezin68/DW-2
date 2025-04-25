function quadrante(x,y){
    if (x==0 && y==0) return "origem";
    if (x==0) return "eixo X"
    if (y==0) return "eixo Y"
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
function salario(x) {
    let p, r, v
    
    if (0 <= x && x <= 400) {
        p = 0.15
        r = 0.15 * x
        v = x + r
    } else if (400.01 <= x && x <= 800) {
        p = 0.12
        r = 0.12 * x
        v = x + r
    } else if (800.01 <= x && x <= 1200) {
        p = 0.10
        r = 0.10 * x
        v = x + r
    } else if (1200.01 <= x && x <= 2000) {
        p = 0.07
        r = 0.07 * x
        v = x + r
    } else {
        p = 0.04
        r = 0.04 * x
        v = x + r
    }
    
    console.log(`Novo salario: ${v.toFixed(2)}
Reajuste ganho: ${r.toFixed(2)}
Em percentual: ${(p * 100).toFixed(0)} %`);
}

function revers(x){
    let y = [...x.split("")]
    y.reverse()
    y = y.join("")
    if (y == x){
        return true
    }
    return false
}
