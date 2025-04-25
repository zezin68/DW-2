function calcular(a, b) {
    console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 3)) / Math.abs(a + b));
    console.log((1 + Math.sin(a)) / (1 + Math.cos(a)));
    console.log(1 + 1 / a + 1 / Math.pow(a, 2) + 1 / Math.pow(a, 3) + 1 / Math.pow(a, 4));
    console.log(a / b - ((a + Math.pow(a / b, 2)) / (a - Math.pow(a / b, 2))));
    console.log(Math.sqrt(Math.PI + Math.sqrt(Math.pow(Math.E, 3) + Math.sqrt(4 + Math.sqrt(a)))));
}
console.log(calcular3, 5);
