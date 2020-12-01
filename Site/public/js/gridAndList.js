window.addEventListener('load', function () {
    let filasBoton = document.querySelector('#filasBoton')
    let filas = document.querySelector('#filas')
    let grid = document.querySelector('.disnone')
    let gridBoton = document.querySelector('#gridBoton')

   
    


    filasBoton.addEventListener('click', function () {
        switch (true) {
            case filas.style.display === "none":
                filas.style.display = "block";
                grid.classList.add('disnone')
                filasBoton.classList.add('active')
                gridBoton.classList.remove('active')
                break
            case grid.style.display != "none":
                filas.style.display = "block";
                grid.classList.add('disnone')
                gridBoton.classList.remove('active')
                break
        }

    })

    gridBoton.addEventListener('click', function () {
        switch (true) {
            case grid.style.display === "none":
                grid.classList.remove('disnone')
                filas.style.display = "none"
                filasBoton.classList.remove('active')
                gridBoton.classList.add('active')
                break
            case grid.style.display != "none":
                grid.classList.remove('disnone')
                filas.style.display = "none"
                filasBoton.classList.remove('active')
                gridBoton.classList.add('active')
                break

        }
    })
})