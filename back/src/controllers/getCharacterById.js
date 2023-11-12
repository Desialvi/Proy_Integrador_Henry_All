const URL= "https://rickandmortyapi.com/api/character/"
//const data = require("../utils/data")
const {findCharacterById } = require('../services/charactersService')

// Extraer la información de un personaje por su ID
const getCharacterById = async (req, res) => {
   const {id} = req.params;
    try{
       //console.log(URL + id) 
       
        const character = await findCharacterById(id)
        //const response = await axios.get(URL + id);
        //console.log(response)
        //const {name, gender, species, origin, image, status} = await axios.get(URL + id).data;
        //const character = {id, name, gender, species, origin, image, status}
        //console.log(character)
        if (character) return res.status(200).json(character);
        else
        return res.status(404).json({error:  `Error 404`});

        //return character.name ? res.json(character) : res.status(404),
        //send("Character Not Found");
    }
    catch (error) {
        //return res.status(500).send(error.message)
        return res.status(500).json({

            error:  `El personaje con ID ${id} no existe en nuestra BBDD`,
        })
    }
};

module.exports= getCharacterById;