

function ejercicio1(radio, altura) {

    let area = (2 * Math.PI * radio * (radio + altura));
    let volumen = (Math.PI * (radio**2) * altura);

    return [area.toFixed(2), volumen.toFixed(2)];
}