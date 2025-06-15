import React, { useState } from 'react';
export default function CalculaIMC(peso,altura,CalcularIMC){

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [categoria, setCategoria] = useState('');
    const CalcularIMC = () =>{
        if (!peso || !altura) return;

        const alturaValor = parseFloat(altura);
        const pesoValor = parseFloat(peso);
        const imcValor = (pesoValor / (alturaValor * alturaValor)).toFixed(2);
        setImc(imcValor);
        setCategoria(classificarIMC(imcCalculado));
    };
}