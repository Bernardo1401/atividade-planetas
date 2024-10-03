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

    // Rota para cadastrar um novo planeta
planetasRoutes.post("/", (req, res) => {
    const { nome, temperatura, agua, atm } = req.body

    if(!nome || !temperatura || !agua ) {
        return res.status(400).send({
            message: "Os campos nome, temperatura e água são obrigatórios"
        })
    }
    
    if(agua != "sim" && agua != "não"){
        return res.status(400).send({
            message: "Digite sim ou não"
    })
    }

    const novoPlaneta = {
        id: Number(Math.floor(Math.random() * 999999) + 1),
        nome,
        temperatura,
        agua, 
        atm
    }
    
    planetas.push(novoPlaneta);
    return res.status(201).send({message: "Planeta cadastrado!",
        novoPlaneta
})
    })

    
// Rota para buscar um planeta especifico pelo id
planetasRoutes.get("/:id", (req, res) => {
    const { id } = req.params

    const planeta = planetas.find((planet) => 
        planet.id === Number(id)
    )

    if (!planeta) {
        return res.status(404).send({message: "Planeta não encontrado!" })
    }

    return res.status(200).send(planeta)
})

// Rota para editar um filme marcante
planetasRoutes.put("/:id", (req, res) => {
    const { id } = req.params

    
    const planeta = planetas.find((planet) => 
        planet.id === Number(id)
    )

    if (!planeta) {
        return res.status(404).send({message: "Planeta não não encontrado!" })
    }

    const {nome, temperatura, agua} = req.body
    //console.log(nome)

    planeta.nome = nome
    planeta.temperatura = temperatura
    planeta.agua = agua

    return res.status(201).send({
        message: "planeta atualizado!",
        planeta,
    })
})

// Rota para deleter uma guloseima
planetasRoutes.delete("/:id", (req, res) => {
    const { id } = req.params

    let planeta = planetas.find((planet) => 
        planet.id === Number(id)
    )
    
        if (!planeta) {
        return res.status(404).send({message: "Planeta não encontrado!" })
    } 

    planetas =  planetas.filter((planet) => planet.id !== Number(id) )

    return res.status(200).send({
        message: "Planeta deletado!",
        planeta,
    })
})

export default planetasRoutes

