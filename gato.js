
   contenedor = document.getElementById("container1");
    var h = document.getElementById("h");
    var ojo1 = document.getElementById("ojo1");
    var ojo2 = document.getElementById("ojo2");
    durmiendo = true;
    contenedor.addEventListener('click',decision);

    function decision(){
        if (durmiendo){
            despertar();
            durmiendo = false;
        }
        else{
            dormir();
            durmiendo = true;
        }

    }

    // console.log(contenedor);
    // contenedor.addEventListener('click',despertar);
    // contenedor.addEventListener('dblclick',dormir);

    function despertar(){
        console.log("des");
        h.style.display = 'none';
        ojo1.style.zIndex = '4';
        ojo2.style.zIndex = '4';

    }
    function dormir(){
        console.log("dor");

        h.style.display = 'initial';
        ojo1.style.zIndex= '2';
        ojo2.style.zIndex= '2';
    }
  