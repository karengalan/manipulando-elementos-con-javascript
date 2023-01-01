window.addEventListener('load',() => {
    let $ = (e) => document.querySelector(e)

    let body = $('body')
    let h1 = $('h1')

    let modoOscuro = confirm("Desea colocar el tema oscuro")

    if (modoOscuro) {
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList')
    }

    h1.innertHTML = "LISTADO DE PELÍCULAS"
    h1.style.color = "white"
    h1.style.backgroundColor = "teal"
    h1.style.padding = "20px"
})