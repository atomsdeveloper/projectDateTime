function newDateTime() {
    const msg = document.querySelector('h3#resultMsg')
    const img = document.querySelector('img#resultImg')
    const text = document.querySelector('h5#resultDate')

    const date = new Date()
    const dateMin = date.getMinutes()
    const dateHours = date.getHours()

    if (dateHours >= 5 && dateHours <= 12){
        msg.innerHTML = `Agora são ${dateHours} Horas e ${dateMin} Minutos!!!`
        text.innerHTML = `BOM DIAAA !!!`
        img.src = `./img/imgBomDia.png` 
        document.body.style.background = 'yellow';
    } else if (dateHours > 12 && dateHours <= 18) {
        msg.innerHTML = `Agora são ${dateHours} Horas e ${dateMin} Minutos!!!`
        text.innerHTML = `BOM TARDEEE !!!`
        img.src = `./img/imgBoaTarde.png` 
        document.body.style.background = 'orange';
    } else {
        msg.innerHTML = `Agora são ${dateHours} Horas e ${dateMin} Minutos!!!`
        text.innerHTML = `BOM NOITEEE !!!`
        img.src = `./img/imgBoaNoite.png`
        document.body.style.background = 'grey';
    }

}