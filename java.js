function tensao(){
    let corren = Number(document.getElementById('corren').value);
    let resis = Number(document.getElementById('resis').value);
    let tensao = 0
    
    res8.innerHTML =  

    tensao = corren * resis

    res8.innerHTML += `A tensão é de ${tensao}V`
}

let res9 = document.getElementById('res9')

function resis(){
    let corren2 = Number(document.getElementById('corren2').value);
    let tens2 = Number(document.getElementById('tens2').value);
    let resi = tens2 / corren2    
    res9.innerHTML =  

    res9.innerHTML += `A Resitência é de ${resi.toFixed(2)} Ohms` 
}

let res11 = document.getElementById('res11')

function coren(){
    let resis3 = Number(document.getElementById('resis3').value);
    let tens3 = Number(document.getElementById('tens3').value);
    let coren = tens3 / resis3    
    res11.innerHTML =  

    res11.innerHTML += `A Corrente é de ${coren.toFixed(2)}A`  
}

let res10 = document.getElementById('res10')

function poten(){
    let coren4 = Number(document.getElementById('coren4').value);
    let tens4 = Number(document.getElementById('tens4').value);
    let poten = tens4 / coren4    
    res10.innerHTML =  

    res10.innerHTML += `A Potência é de ${poten.toFixed(2)}W`
}