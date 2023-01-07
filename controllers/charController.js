import { Character } from "../models/characters.js"


export const getChars = (req, res) => {
    Character.findAll()
    .then((character) => {
        res.status(200).send(character)
    })
    .catch ((err) => {
        console.log(err)
    })
    };


export const getCharById = (req, res) => {
    const id = parseInt(req.params.id);

    Character.findByPk(id)
    .then ((character) => {
        res.status(200).send(character || `Character with id of ${id} not found.`)
    })
    .catch((err) => {
        console.log(err)
    })
};

export const addChar = (req, res) => {
    Character.create({
        char_name: req.body.char_name,
        char_age: req.body.char_age,
        episode_first_appeared: req.body.episode_first_appeared
    })
    .then (() => {
        res.status(201).send({
            message: "Character created"
        })
    })
    .catch((err) => {
        console.log(err)
    })
};

export const deleteChar = (req, res) => {
    const id = parseInt(req.params.id)

    Character.destroy({
        where: {
            id: id
        }
    })
    .then (() => {
        res.status(204).send("Character deleted.")
    })
    .catch((err) => {
        console.log(err)
    })
};