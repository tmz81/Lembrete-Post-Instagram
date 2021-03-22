import { View } from './View.js';

import { Emitter } from './Emitter.js';

const Timer = {
    time: 25 * 60,
    currentTime: 0,
    interval: null,

    timeToMinutes: time => Math.floor(time / 60),
    timeToSeconds: time => time % 60,

    formatTime: time => String(time).padStart(2, '0'),

    init(time) {
        Emitter.emit('countdown-start')

        Timer.time = time || Timer.time
        Timer.currentTime = Timer.time
        Timer.interval = setInterval(Timer.countdown, 1000)
    },
    
    countdown() {
        Timer.currentTime = Timer.currentTime - 1
        
        const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime))
        const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime))

        View.render({
            minutes,
            seconds,
        })

        if( Timer.currentTime === 0 ) {
            clearInterval(Timer.interval)
            Emitter.emit('countdown-end')
            return;
        }
    }
}   

export { Timer };


// ## Traduzindo code em palavras BR ##
/*
const relogio = {
    tempo: 0.1 * 60,
    horarioAtual: 0,
    intervalo: null,
    inicio() {
        relogio.horarioAtual = relogio.tempo
        relogio.intervalo = setInterval(relogio.contagemRegressiva, 1000)
    },
    contagemRegressiva() {
        relogio.horarioAtual = relogio.horarioAtual - 1
        console.log(relogio.intervalo)
        if( relogio.horarioAtual === 0 ) {
            clearInterval(relogio.intervalo)
            return;
        }
    }

}
*/

 /* ## Traduzindo code in palavras ##
    .Crie um OBJ atribua 3 propriedades nele e add 2 method
        .Method `init` / `countdown`
        
        [ ] init
            .Faça lógica

        [ ] countdown
            .Faça lógica    
            

        => Veja o codigo traduzido em palavras BR pra entender

 */