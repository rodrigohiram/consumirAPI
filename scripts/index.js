const container = document.getElementById('container')


fetch('https://swapi.dev/api/starships/9/')
    .then((response) => response.json())
    .then((response) => exibirDados(response))
    .catch(err => console.log(err))


    function exibirDados(dados) {
        const infos = document.createElement('div')
        infos.innerHTML = `
       <p>${dados.name}</p> 
       <p>${dados.model}</p>
        `

        container.append(infos)
    }

    fetch('https://swapi.dev/api/starships/3/')
    .then((response) => response.json())
    .then((response) => exibirDados(response))
    .catch(err => console.log(err))


    function exibirDados(dados) {
        const infos = document.createElement('div')
        infos.innerHTML = `
       <p>${dados.name}</p> 
       <p>${dados.model}</p>
        `

        container.append(infos)
    }

    fetch('https://swapi.dev/api/starships/5/')
    .then((response) => response.json())
    .then((response) => exibirDados(response))
    .catch(err => console.log(err))


    function exibirDados(dados) {
        const infos = document.createElement('div')
        infos.innerHTML = `
       <p>${dados.name}</p> 
       <p>${dados.model}</p>
        `

        container.append(infos)
    }