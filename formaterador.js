function procesarEtrada() {
    var entrada = document.getElementById("entrada").value
    var palabras = entrada.split(' ')
    var salida = []
    var salida2 = []
    var s1 =' '
    var s2 =' '
    let procesado = ' '
    console.log(palabras)
    for (i in palabras) {
        let elemProcesado = `&${palabras[i]} = ${palabras[i]}`
        let elemProcesado2 = `${palabras[i]} = &${palabras[i]}`
        s1 += elemProcesado+ '\n'
        s2 += elemProcesado2+ '\n'
     
    }
         
    console.log(s1)
    console.log(s2)
    procesado = `&cant.SetEmpty() \n XFor Each '' \n ${s1} \n Do 'NEW' \n XEndFor \n msg('Creados:'+&cant.ToString(),status) \n \n Sub 'NEW' \n new \n ${s2} \n endnew \n  &cant+=1 \n EndSub`
    //procesado = s1 + '\n' + 'New' + '\n' + s2 + '\n' + 'EndNew'
    document.getElementById("salida").value = procesado
    console.log(procesado)
        // console.log(salida)
        // console.log(salida2)
        
}
const boton = document.getElementById("btnEjecutar");
boton.addEventListener("click",procesarEtrada);

console.log("FIN")
