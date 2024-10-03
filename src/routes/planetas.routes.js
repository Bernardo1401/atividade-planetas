import { Router } from "express"

const filmesRoutes = Router()

let filmesMarcantes = [
{
    id: Number(Math.floor(Math.random() * 99) + 1),
    titulo: "Tropa de elite",
    genero: "Ação",
    emCartaz: false,
},
{
    id: Number(Math.floor(Math.random() * 99) + 1),
    titulo: "Vingadores: Ultimato",
    genero: "Ação/Ficção científica",
    emCartaz: false,
},
{
    id: Number(Math.floor(Math.random() * 99) + 1),
    titulo: "As branquelas",
    genero: "Comédia/Crime",
    emCartaz: false,
},
]

// Rota para buscar todos os elementos do array filmesMarcantes
filmesRoutes.get("/", (req, res) => {
    return res.status(200).send(filmesMarcantes)
    })

    // Rota para criar novo filme marcante
filmesRoutes.post("/", (req, res) => {
    const { titulo, genero, emCartaz } = req.body
    
    const novoFilme = {
        id: Number(Math.floor(Math.random() * 99) + 1),
        titulo,
        genero,
        emCartaz
    }
    
    filmesMarcantes.push(novoFilme);
    return res.status(201).send(filmesMarcantes)
    })

    
// Rota para buscar um elemento especifico do array filmesMarcantes
filmesRoutes.get("/:id", (req, res) => {
    const { id } = req.params

    //console.log(id)

    const filmes = filmesMarcantes.find((movie) => 
        movie.id === Number(id)
    )

    if (!filmes) {
        return res.status(404).send({message: "Filme não encontrado!" })
    }

    return res.status(200).send(filmes)
})

// Rota para editar um filme marcante
filmesRoutes.put("/:id", (req, res) => {
    const { id } = req.params

    
    const filmes = filmesMarcantes.find((movie) => 
        movie.id === Number(id)
    )

    if (!filmes) {
        return res.status(404).send({message: "filme não encontrado!" })
    }

    const {titulo, genero, emCartaz} = req.body
    //console.log(nome)

    filmes.titulo = titulo
    filmes.genero = genero
    filmes.emCartaz = emCartaz

    return res.status(201).send({
        message: "movie atualizado!",
        filmes,
    })
})

// Rota para deleter uma guloseima
filmesRoutes.delete("/:id", (req, res) => {
    const { id } = req.params

    let filmes = filmesMarcantes.find((movie) => 
        movie.id === Number(id)
    )
    
        if (!filmes) {
        return res.status(404).send({message: "Filme não encontrado!" })
    } 

    filmes =  filmesMarcantes.filter((movie) => movie.id !== Number(id) )

    return res.status(200).send({
        message: "Filme deletado!",
        filmes,
    })
})

export default filmesRoutes

