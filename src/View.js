const View = {
    render({ minutes, seconds }) {
        document.getElementById('timer').innerHTML = `
        <p>Next Post in</p>
        <span>${minutes}:${seconds}</span>
        `;
    }
}

export { View };


/*
## Traduzindo code in palavras ##

    .Crie um OBJ com method:
        .Method render()
            .Use o module DOM
            -Utilize Templeate literals ``para converter JS in HTML
    .Invok o OBJ+Method



*/