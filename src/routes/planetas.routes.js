import { Router } from "express"

const planetasRoutes = Router()

let planetas = [
{
    id: Number(Math.floor(Math.random() * 999999) + 1),
    nome: "Dev",
    temperatura: 13.3,
    agua: false, //Indicação de existência de água
    atm: ["JS", "NODE", "VS", "CODE"]
}
]

// Rota para buscar todos os elementos do array planetas
planetasRoutes.get("/", (req, res) => {
    return res.status(200).send(planetas)
    })

    // Rota para criar novo filme marcante
planetasRoutes.post("/", (req, res) => {
    const { nome, temperatura, agua } = req.body
    
    const novoFilme = {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome,
        temperatura,
        agua
    }
    
    planetas.push(novoFilme);
    return res.status(201).send(planetas)
    })

    
// Rota para buscar um elemento especifico do array planetas
planetasRoutes.get("/:id", (req, res) => {
    const { id } = req.params

    //console.log(id)

    const filmes = planetas.find((movie) => 
        movie.id === Number(id)
    )

    if (!filmes) {
        return res.status(404).send({message: "Filme não encontrado!" })
    }

    return res.status(200).send(filmes)
})

// Rota para editar um filme marcante
planetasRoutes.put("/:id", (req, res) => {
    const { id } = req.params

    
    const filmes = planetas.find((movie) => 
        movie.id === Number(id)
    )

    if (!filmes) {
        return res.status(404).send({message: "filme não encontrado!" })
    }

    const {nome, temperatura, agua} = req.body
    //console.log(nome)

    filmes.nome = nome
    filmes.temperatura = temperatura
    filmes.agua = agua

    return res.status(201).send({
        message: "movie atualizado!",
        filmes,
    })
})

// Rota para deleter uma guloseima
planetasRoutes.delete("/:id", (req, res) => {
    const { id } = req.params

    let filmes = planetas.find((movie) => 
        movie.id === Number(id)
    )
    
        if (!filmes) {
        return res.status(404).send({message: "Filme não encontrado!" })
    } 

    filmes =  planetas.filter((movie) => movie.id !== Number(id) )

    return res.status(200).send({
        message: "Filme deletado!",
        filmes,
    })
})

export default planetasRoutes

