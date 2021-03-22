const Notifier = {
    async init() {
      const permission = await Notification.requestPermission()
      if( permission !== "granted") {
        throw new Error('Permisão negada!')
      }
    },
    notifi( title, body, icon) {
      new Notification(title, {
        body,
        icon
      })
    }
}

export { Notifier };


/*
## Traduzindo code in palavras ##

  .Criei um OBJ com 2 method
    .Method `init` / `notifi`
    
    [ ] init
        .Declare uma function nomeada
        .permission `await` "requisição premissão notificação"
        .Verifique se a permissão é estritamente não igual `granted` se for falso `throw` new Error + mensg

    [ ] notifi
        .Informe 3 parameter (title, body, icon)
        .Crie o conteúdo desses parameter    
  
    -Dentro crie um method `init` 
      -Dentro dele criei uma `function` nomeada `premission`.
        -Mandei essa primissão aguardar `await` "um pedido de permissão para notificação ... Notification.requestPermission" 
          -Depois `if` verifique se a permissão é estritamente não igual há `granted` se for falso, lançar pra fora `throw` um erro com a mensagem "Permissão negada"

  .Invock um method `notifi`
    -Caso usuário não caia em `notifi`dentro dele responda a `Notification.requestPermission`. Falando que pode passar, e entregar a `notifi`



*/