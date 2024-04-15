function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var bom = window.document.querySelector('div#foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background = '#BD8E58'
        bom.innerHTML += `<br><strong>Bom dia!</strong>`
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#ADBFCF'
        bom.innerHTML += `<br><strong>Boa Tarde!</strong>`
    } else {
        //BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#0A181B'
        bom.innerHTML += `<br><strong>Boa Noite!</strong>`
    }
}