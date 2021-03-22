import { Notifier } from "./Notifier.js";

import { Timer } from "./Timer.js";

import { Emitter } from "./Emitter.js";

const App = {
  async start() {
    try {
      await Notifier.init();

      Emitter.on("countdown-start", () => {
        Notifier.notifi({
          title: "Hour",
          body: "Create content for community",
        });
      });

      Emitter.on('countdown-end', () => {
        Timer.init()
      })


      Timer.init()


    } catch (err) {
      console.log(err.message);
    }
  },
};

export { App };

/*
## Traduzindo code in palavras ##

  .Crie um OBJ com um method
    .Method start()
      .
    -Dentro dele invok o method start()
      -Tente aguarde Notifier iniciar para saber se o caminho está Ok
        -Se caminho estiver OK faça a `notifi` ser exibida na tela com seu title/body
      -Caso Notifier inicie e caminho não esteja OK `catch` pegar a mensagem de erro 
        e exiba no console


*/
