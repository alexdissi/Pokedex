function affichePokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=21'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pokemon = data.results
            pokemon.forEach(pokemon => {
                const nom = pokemon.name
                const url = pokemon.url
                const url2 = url.split('/')
                const id = url2[url2.length - 2]
                const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                const div = document.createElement('div')
                div.classList.add('pokemon')
                div.innerHTML = `<img src="${image}" alt="${nom}">` + `<p>${nom}</p>` + `<a href="${url}">Voir le lien</a>`
                document.querySelector('#pokemon').appendChild(div)
            }
            )
        }
        )
}
affichePokemon()



