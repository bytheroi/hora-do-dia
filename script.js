function verificar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var t = window.document.querySelector('h1')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    if (hora >= 0 && hora < 5){
        //boa madrugada
        t.innerHTML = 'Boa madrugada!'
        msg.innerHTML = `Agora são ${hora} horas.`
        document.body.style.background = '#414141'
        img.src = 'img/madrugada.png'
    }else if (hora >=5 && hora < 12){
        //bom dia
        t.innerHTML = 'Bom dia!'
        msg.innerHTML = `Agora são ${hora} horas.`
        document.body.style.background = '#9BBBD0'
        img.src = 'img/manha.png'
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        t.innerHTML = 'Boa tarde!'
        msg.innerHTML = `Agora são ${hora} horas.`
        document.body.style.background = '#3E7FB5'
        img.src = 'img/tarde.png'
    }
    else{
        //boa noite
        t.innerHTML = 'Boa noite!'
        msg.innerHTML = `Agora são ${hora} horas`
        document.body.style.background = '#120F16'
        img.src = 'img/noite.png'
    }
}

