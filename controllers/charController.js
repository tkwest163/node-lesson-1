

const charArr = ["Faye", "Spike", "Ein", "Ed", "Jet", "Vicious"];


export const getChars = (req, res) => {
    res.status(200).send({
        message: "Total list of Cowboy Bebop characters",
        characters: charArr
    });
};

export const getCharById = (req, res) => {
    const id = parseInt(req.params.id);

    res.status(200).send({
        characters: charArr[id] || "Character not found",
    });
};

export const addChar = (req, res) => {
    charArr.push(req.body.characters)
    res.status(201).send({
        message: "Character added to list!"
    });
};

export const deleteChar = (req, res) => {
    const id = parseInt(req.params.id)

    charArr.splice(id, 1)
    res.status(204).send("Character deleted from list")
};