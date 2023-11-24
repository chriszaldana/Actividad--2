//EJERCICIO 1
const edadParaVotar = (edad) =>{
    if(edad >= 18){
        console.log(`Tienes ${edad} años, ya puedes votar`);
    }else{
        console.log(`Tienes ${edad} años, aun no puedes votar`);
    }
}

edadParaVotar(10)

//EJERCICIO 2
const calcularNotaFinal = (nombre, carnet, examen, tareas, asistencia, investigacion) =>{
    let examenPorcentaje = examen * 0.2
    let tareasPorcentaje = tareas * 0.4
    let asistenciaPorcentaje = asistencia * 0.10
    let investigacionPorcentaje = investigacion * 0.3

    let notaGeneral = examenPorcentaje + tareasPorcentaje + asistenciaPorcentaje + investigacionPorcentaje

    console.log(`La nota global de ${nombre} con carnet ${carnet} es ${notaGeneral}`);
}

calcularNotaFinal('Christian','10018879', 5,10,6,5)

//EJERCICIO 3
const calcularAumentoSalario = (nombre, categoria, salario) => {
    let porcentajeAumento;

    switch(categoria){
        case 'A':
            porcentajeAumento = 0.15
            break;
        case 'B':
            porcentajeAumento = 0.30
            break;
        case 'C':
            porcentajeAumento = 0.10
            break;
        case 'D':
            porcentajeAumento = 0.20
            break;
        default:
            console.log('Categoria no encontrada');
            return
       
    }

    const calculoAumento = salario * porcentajeAumento

    const salarioConAumento = calculoAumento + salario

    console.log(`${nombre} de categoria ${categoria} su nuevo salario es de $${salarioConAumento}`);

}

calcularAumentoSalario('chris', 'B', 2000)

//EJERCICIO 4
const numeroMayor = (numero1, numero2) => {
    if(numero1 > numero2){
        console.log(`El numero mayor es ${numero1}`);
    }else if(numero1 === numero2){
        console.log(`Los numeros son iguales`);
    }else{
        console.log(`El numero mayor es ${numero2}`);
    }
}

numeroMayor(6,2)

//EJERCICIO 5
const descuentoAutos = () =>{
    let modeloAuto = document.getElementById('cars').value
    let descuentoModelo

    switch(modeloAuto){
        case 'Ford Fiesta':
            descuentoModelo = '5%'
            break
        case 'Ford Focus':
            descuentoModelo = '10%'
            break
        case 'Ford Escape':
            descuentoModelo = '20%'
            break
    }

  
    document.getElementById('autoSeleccionado').innerText = `Usted selecciono el modelo de auto ${modeloAuto} el cual posee un descuento del ${descuentoModelo}`
  
}

//EJERCICIO 6
const discountTrip = () =>{
    let origenCiudad = document.getElementById('originCity').value
    let destinoCiudad = document.getElementById('destinationCity').value
    let descuento
    let costoViaje
    

    if(origenCiudad === 'Palma' && destinoCiudad === 'La costa del Sol'){
        descuento = 0.05
    }else if(origenCiudad === 'Palma' && destinoCiudad === 'Panchimalco'){
        descuento = 0.10 
    }else if(origenCiudad === 'Palma' && destinoCiudad === 'Puerto el Triunfo'){
        descuento = 0.20
    }

    if(origenCiudad === 'Palma' && destinoCiudad === 'La costa del Sol'){
        costoViaje = 125
    }else if(origenCiudad === 'Palma' && destinoCiudad === 'Panchimalco'){
        costoViaje = 200
    }else if(origenCiudad === 'Palma' && destinoCiudad === 'Puerto el Triunfo'){
        costoViaje = 300
    }


    let descuentoTotal = costoViaje * descuento
    let descuentoAplicado = costoViaje - descuentoTotal

    const resultadoTotal = `
    <p>Origen: ${origenCiudad}</p>
    <p>Destino: ${destinoCiudad}</p>
    <p>Costo del viaje: ${costoViaje}</p>
    <P>Descuento: ${descuento * 100}%</p>
    <p>Descuento aplicado: ${descuentoAplicado}<p>
`;

document.getElementById('mostrarResultado').innerHTML = resultadoTotal
}

//EJERCICIO 7
const analizarValores = () => {
    let cantidadNegativos = 0;
    let cantidadPositivos = 0;
    let cantidadMultiplosDe15 = 0;
    let acumuladoPares = 0;
    let numbers = [5,10,20,-30,15,85,20,-30,65,-100]
  
    for (let i = 0; i < numbers.length; i++){
        
        if(i < 0){
            cantidadNegativos+= numbers[i]
        }
    }

    console.log(cantidadNegativos);
}

//EJERCICIO 8
const mutiplicador = (number) =>{
    for(let i = 1; i <=10; i++){
        let tabla = number * i
        console.log(`${number} x ${i} = ${tabla}`);
    }
}

mutiplicador(300)


//EJERCICIO 9
const calculoTemperatura = (temp) =>{
    let fahren = (temp*9/5)+32

    if(fahren >= 14 && fahren <= 32){
        console.log('Temperatura baja');
    }else if(fahren >= 32 && fahren <= 68){
        console.log('Temperatura adecuada')
    }else if(fahren >= 68 && fahren <= 96){
        console.log('Temperatura alta');
    }else{
        console.log('Temperatura desconocida');
    }
}

calculoTemperatura(200)

////EJERCICIO 10
const entradasMaxManana = 5
const entradasMaxTarde = 6
const entradasMaxNoche = 11
let arrayManana = []
let arrayTarde = []
let arrayNoche = []

const agregarElementosManana = () =>{
    let edadesMorning = document.getElementById('edadesManana').value
    
    if(edadesMorning !== '' && arrayManana.length < entradasMaxManana){
        arrayManana.push(parseInt(edadesMorning))
        document.getElementById('edadesManana').value = ''
        console.log(arrayManana);
    }else{
        alert('No se pueden agregar mas elementos o el valor esta vacio')
    }
}

const agregarElementosTarde = () =>{
    let edadesAfternoon = document.getElementById('edadesTarde').value
    
    if(edadesAfternoon !== '' && arrayTarde.length < entradasMaxTarde){
        arrayTarde.push(parseInt(edadesAfternoon))
        document.getElementById('edadesTarde').value = ''
        console.log(arrayTarde);
    }else{
        alert('No se pueden agregar mas elementos o el valor esta vacio')
    }
}

const agregarElementosNoche = () =>{
    let edadesNight = document.getElementById('edadesNoche').value
    
    if(edadesNight !== '' && arrayNoche.length < entradasMaxNoche){
        arrayNoche.push(parseInt(edadesNight))
        document.getElementById('edadesNoche').value = ''
        console.log(arrayNoche);
    }else{
        alert('No se pueden agregar mas elementos o el valor esta vacio')
    }
}

const calcularPromedioEdades = () =>{
    let promedioEdadManana = arrayManana.reduce((acc,current) => acc + current, 0)/arrayManana.length
    let promedioEdadTarde = arrayTarde.reduce((acc,current)=> acc + current, 0)/arrayTarde.length
    let promedioiEdadNoche = arrayNoche.reduce((acc,current)=> acc + current, 0)/arrayNoche.length
    let mayorPromedio = Math.max(promedioEdadManana, promedioEdadTarde, promedioiEdadNoche)
    let turnoMayorPromedio = "";

    if (mayorPromedio === promedioEdadManana) {
        turnoMayorPromedio = "Mañana";
    } else if (mayorPromedio === promedioEdadTarde) {
        turnoMayorPromedio = "Tarde";
    } else {
        turnoMayorPromedio = "Noche";
    }

    const promedioTodosTurnos = `
    <p> El promedio de edad del turno de la mañana es ${promedioEdadManana}</p>
    <p> El promedio de edad del turno de la tarde es ${promedioEdadTarde}</p>
    <p> El promedio de edad del turno de la noche es ${promedioiEdadNoche}</p>
    <p> El turno con el mayor promedio de edades es ${turnoMayorPromedio}</p>
    `;

    document.getElementById('resultadoMostrado').innerHTML = promedioTodosTurnos

}

