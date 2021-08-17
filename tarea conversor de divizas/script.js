let btn = document.getElementById("submit");
btn.addEventListener("click",activarConvertir)

function activarConvertir(){

    let dropdown1 = document.getElementById("dropdown1").value;
    let dropdown2 = document.getElementById("dropdown2").value;
    let eur = 0;
    let gbp = 0;
    let mxn = 0;
    let cop = 0;
    let monto = document.getElementById("monto").value;
    
    
    if(dropdown1 == "dolar" && dropdown2 == "euro"){
        eur = 0.85
        monto *= eur
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    else if(dropdown1 == "dolar" && dropdown2 == "libra"){
        gbp = 0.72
        monto *= gbp
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    else if(dropdown1 == "dolar" && dropdown2 == "pesomx"){
        mxn = 19.93
        monto *= mxn
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    else if(dropdown1 == "dolar" && dropdown2 == "pesoco"){
        cop = 3944
        monto *= cop
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    if(dropdown1 == "euro" && dropdown2 == "dolar"){
        usd = 1.17 
        monto *= usd
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    else if(dropdown1 == "euro" && dropdown2 == "libra"){
        gbp = 0.85 
        monto *= gbp
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    else if(dropdown1 == "euro" && dropdown2 == "pesomx"){
        mxn = 23,42 
        monto *= mxn
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    else if(dropdown1 == "euro" && dropdown2 == "pesoco"){
        cop = 4634 
        monto *= cop
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    if(dropdown1 == "libra" && dropdown2 == "dolar"){
        usd = 1.39
        monto *= usd
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    else if(dropdown1 == "libra" && dropdown2 == "euro"){
        eur = 1.18
        monto *= eur
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    else if(dropdown1 == "libra" && dropdown2 == "pesomx"){
        mxn = 27.66
        monto *= mxn
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    else if(dropdown1 == "libra" && dropdown2 == "pesoco"){
        cop = 5478
        monto *= cop
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    if(dropdown1 == "pesomx" && dropdown2 == "dolar"){
        usd = 0.050
        monto *= usd
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    else if(dropdown1 == "pesomx" && dropdown2 == "euro"){
        eur = 0.043
        monto *= eur
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    else if(dropdown1 == "pesomx" && dropdown2 == "libra"){
        gbp = 0.036
        monto *= gbp
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    else if(dropdown1 == "pesomx" && dropdown2 == "pesoco"){
        cop = 197.93
        monto *= cop
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    if(dropdown1 == "pesoco" && dropdown2 == "dolar"){
        usd = 0.0025
        monto *= usd
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    else if(dropdown1 == "pesoco" && dropdown2 == "euro"){
        eur = 0.0022
        monto *= eur
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    else if(dropdown1 == "pesoco" && dropdown2 == "libra"){
        gbp = 0.0018
        monto *= gbp
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    else if(dropdown1 == "pesoco" && dropdown2 == "pesomx"){
        mxn = 0.0500
        monto *= mxn
        document.getElementById('resultado').innerHTML = `LA CONVERSION DA COMO RESULTADO: ${Math.round(monto)} $`
    }

    

}
