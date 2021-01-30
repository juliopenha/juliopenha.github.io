function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] - Verifique os dados e tente novamente")
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 13) {
                // criança
                img.setAttribute('src', "img/menino.png")
            } else if (idade < 30) {
                // jovem
                img.setAttribute('src', "img/homemjovem.png")
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', "img/homemadulto.png")
            }
            else {
                // idoso
                img.setAttribute('src', "img/homemidoso.png")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 13) {
                // criança
                img.setAttribute('src', "img/menina.png")
            } else if (idade < 30) {
                // jovem
                img.setAttribute('src', "img/mulherjovem.png")
            } else if (idade < 60) {
                // adulta
                img.setAttribute('src', "img/mulheradulta.png")
            }
            else {
                // idosa
                img.setAttribute('src', "img/mulheridosa.png")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}