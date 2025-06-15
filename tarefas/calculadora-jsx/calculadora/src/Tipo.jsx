    
export default function Tipo({imc}){
    const valor = parseFloat(imc);
        if (valor < 18.5) return 'Baixo peso';
        if (valor < 25) return 'Peso normal';
        if (valor < 30) return 'Excesso de peso';
        if (valor < 35) return 'Obesidade de classe 1';
        if (valor < 40) return 'Obesidade de classe 2';
        return 'Obesidade de classe 3';
    };