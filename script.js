/* Montando a estrutura */
let jogo = {'ES': '', 'MS': '', 'DS': '',
            'EM': '', 'MM': '', 'DM': '',
            'EI': '', 'MI': '', 'DI': ''},
vertical = ['S', 'M', 'I'],  
horizontal = ['E', 'M', 'D'], 
mensagem = document.querySelector('p.mensagem'),
mensagemOriginal = mensagem.innerHTML,
ganhou = 'nao',
jogadas = 0,
turno = '✖';

function carregou() { /* Para atribuir funções aos divs */
    for (let i = 0; i < 9; i++) {
        let div = document.getElementsByClassName('block')[i]
        div.setAttribute('onclick', `clicou${i}()`)
    }
}

/* Para escolher o simbolo inicial */ 
function chis() {
    turno = '✖'
    mensagem.innerHTML = `Turno do ${turno}`
}

function circulo() {
    turno = '〇'
    mensagem.innerHTML = `Turno do ${turno}`
}
/* Fim da estrutura */


/* Jogo em si */
function mudarTurno() {
    if (turno == '✖') {
        turno = '〇'
    } else {
        turno = '✖'
    }
    mensagem.innerHTML = `turno do ${turno}`
}

function analisar(key, elemento) { /* Para analisar se o espaço já tem uma jogada */
    if (jogo[key] == '' && turno == '✖') {
        elemento.setAttribute('style', 'color: #e8696a;')
        return true
    } else if (jogo[key] == '' && turno == '〇') {
        elemento.setAttribute('style', 'color: #6aacb1;')
        return true
    } else {
        return false
    }
}

function resetar(){
    for (let i in jogo) { /* Para resetar a variavel objeto */
        jogo[i] = ''
    }
    for (let i = 0; i < 9; i++) { /* Para resetar as divs */
        let div = document.getElementsByClassName('block')[i]
        div.innerHTML = ''
    }
    turno = '✖'
    mensagem.innerHTML = mensagemOriginal
    ganhou = 'nao'
    jogadas = 0
}

function vejaSeGanhou() {
    for (let i in vertical) {
        if ( /* if para analisar se ganhou na vertiacal*/ 
            jogo[`${horizontal[i]}S`] == jogo[`${horizontal[i]}M`] && 
            jogo[`${horizontal[i]}S`] == jogo[`${horizontal[i]}I`] &&
            jogo[`${horizontal[i]}S`] != '') {
                mensagem.innerHTML = `${turno} ganhou, parabens! Aperte o botão para resetar: <input type='button' value='resetar' onclick = 'resetar()'></input>` 
                ganhou = 'sim'
            }
        else if (  /* if para analisar se ganhou na horizontal*/
            jogo[`E${vertical[i]}`] == jogo[`M${vertical[i]}`] &&
            jogo[`E${vertical[i]}`] == jogo[`D${vertical[i]}`] &&
            jogo[`E${vertical[i]}`] != '') {
                mensagem.innerHTML = `${turno} ganhou, parabens! Aperte o botão para resetar: <input type='button' value='resetar' onclick = 'resetar()'></input>` 
                ganhou = 'sim'
            } 
        else if ( 
            jogo['ES'] == jogo['MM'] && jogo['MM'] == jogo['DI'] &&jogo['MM'] != '' ||
            jogo['DS'] == jogo['MM'] && jogo['MM'] == jogo['EI'] && jogo['MM'] != '') { 
            mensagem.innerHTML = `${turno} ganhou, parabens! Aperte o botão para resetar: <input type='button' value='resetar' onclick = 'resetar()'></input>`  
            ganhou = 'sim'
        }
    } if (jogadas == 8 && ganhou == 'nao'){
        mensagem.innerHTML = `Empatou! Aperte o botão para resetar: <input type='button' value='resetar' onclick = 'resetar()'></input>`
    } else if (ganhou == 'nao') {
        mudarTurno()
        jogadas ++
    }
}

function clicou0() {
    let div = document.getElementsByClassName('block')[0]
    if (analisar('ES', div)) {
        jogo['ES'] = turno
        div.innerHTML = jogo['ES']
        vejaSeGanhou()
    } else {
        window.alert('Já jogaram algo aqui.')
    }
}

function clicou1() {
    let div = document.getElementsByClassName('block')[1]
    if (analisar('MS', div)) {
        jogo['MS'] = turno
        div.innerHTML = jogo['MS']
        vejaSeGanhou()
    } else {
        window.alert('Já jogaram algo aqui.')
    }
}

function clicou2() {
    let div = document.getElementsByClassName('block')[2]
    if (analisar('DS', div)) {
        jogo['DS'] = turno
        div.innerHTML = jogo['DS']
        vejaSeGanhou()
    } else {
        window.alert('Já jogaram algo aqui.')
    }
}

function clicou3() {
    let div = document.getElementsByClassName('block')[3]
    if (analisar('EM', div)) {
        jogo['EM'] = turno
        div.innerHTML = jogo['EM']
        vejaSeGanhou()
    } else {
        window.alert('Já jogaram algo aqui.')
    }
}

function clicou4() {
    let div = document.getElementsByClassName('block')[4]
    if (analisar('MM', div)) {
        jogo['MM'] = turno
        div.innerHTML = jogo['MM']
        vejaSeGanhou()
    } else {
        window.alert('Já jogaram algo aqui.')
    }
}

function clicou5() {
    let div = document.getElementsByClassName('block')[5]
    if (analisar('DM', div)) {
        jogo['DM'] = turno
        div.innerHTML = jogo['DM']
        vejaSeGanhou()
    } else {
        window.alert('Já jogaram algo aqui.')
    }
}

function clicou6() {
    let div = document.getElementsByClassName('block')[6]
    if (analisar('EI', div)) {
        jogo['EI'] = turno
        div.innerHTML = jogo['EI']
        vejaSeGanhou()
    } else {
        window.alert('Já jogaram algo aqui.')
    }
}

function clicou7() {
    let div = document.getElementsByClassName('block')[7]
    if (analisar('MI', div)) {
        jogo['MI'] = turno
        div.innerHTML = jogo['MI']
        vejaSeGanhou()
    } else {
        window.alert('Já jogaram algo aqui.')
    }
}

function clicou8() {
    let div = document.getElementsByClassName('block')[8]
    if (analisar('DI', div)) {
        jogo['DI'] = turno
        div.innerHTML = jogo['DI']
        vejaSeGanhou()
    } else {
        window.alert('Já jogaram algo aqui.')
    }
}
