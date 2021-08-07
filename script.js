function criarLabirinto() {
    let jogador 
    let eixoX = 9
    let eixoY = 0
    const map = [
        "WWWWWWWWWWWWWWWWWWWWW",
        "W   W     W     W W W",
        "W W W WWW WWWWW W W W",
        "W W W   W     W W   W",
        "W WWWWWWW W WWW W W W",
        "W         W     W W W",
        "W WWW WWWWW WWWWW W W",
        "W W   W   W W     W W",
        "W WWWWW W W W WWW W F",
        "S     W W W W W W WWW",
        "WWWWW W W W W W W W W",
        "W     W W W   W W W W",
        "W WWWWWWW WWWWW W W W",
        "W       W       W   W",
        "WWWWWWWWWWWWWWWWWWWWW",
    ]
    let final = map[8][20]
    for(let i = 0; i < map.length; i++){
        for(let j = 0; j < map[i].length; j++){
            let posicao = map[i][j]
            if(posicao === 'W'){
                let caixa = document.createElement('div')
                caixa.style.width = '28px'
                caixa.style.height = '28px'
                caixa.style.background = 'yellow'
                caixa.style.position = 'absolute'
                caixa.style.top = i * 28 + 'px'
                caixa.style.left = j * 28 + 'px'

                document.getElementById('container').appendChild(caixa)
            }
            if(posicao === 'S'){
                jogador = document.createElement('div')
                jogador.style.width = '28px'
                jogador.style.height = '28px'
                jogador.style.position = 'absolute'
                jogador.style.left = j * 28 + 'px'
                jogador.style.top = i * 28 + 'px'
                let jogaOMario = document.createElement('img')
                jogaOMario.src = './mariozin.png'
                jogaOMario.style.height = '100%'
                jogador.appendChild(jogaOMario)
                document.getElementById('container').appendChild(jogador)
            }

        }  
    }
    let jogadorPosicao = map[eixoX][eixoY]
    let x = jogador.style.top.replace(/[A-Z]/gi, '')
    let y = jogador.style.left.replace(/[A-Z]/gi, '')
    
    document.addEventListener('keydown', (event)=>{
        if(event.key == 'ArrowUp'){
            if(eixoX >= 1){
                x -= 29
                x+= 1
                jogador.style.top = x + "px"
                eixoX -= 1
                jogadorPosicao = map[eixoX][eixoY];

                if(jogadorPosicao === 'W'){
                    eixoX += 1
                    x += 28
                    jogador.style.top = x + "px"
                }
            }
        }
        if(event.key == 'ArrowLeft'){
            if(eixoY >= 1){ 
                y += 1
                y -= 29
                jogador.style.left = y + "px"
                eixoY -= 1
                jogadorPosicao = map[eixoX][eixoY];    

                if(jogadorPosicao === 'W'){
                    eixoY += 1
                    y += 28
                    jogador.style.left = y + 'px'
                }
            }
        }
    
        if(event.key == 'ArrowDown'){
            if(eixoX <= 13){
                x -= 1
                x += 29
                jogador.style.top = x + "px"
                eixoX += 1
                jogadorPosicao = map[eixoX][eixoY];

                if(jogadorPosicao === 'W'){
                    eixoX -= 1
                    x -= 28
                    jogador.style.top = x + 'px'
                }
            }
        }
        
        if(event.key == 'ArrowRight'){
            if(eixoY <= 19){ 
                y -= 1
                y += 29
                jogador.style.left = y + "px"
                eixoY += 1
                jogadorPosicao = map[eixoX][eixoY];

                if(jogadorPosicao === 'W'){
                    eixoY -= 1
                    y -= 28
                    jogador.style.left = y + 'px'
                }
            }
        }
        if(jogadorPosicao === final){
            alert('Mário: Valeu Bro!')
            window.location.reload()
        }
    })
}
criarLabirinto()

