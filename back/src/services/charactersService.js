const axios = require('axios')

const data = require('../utils/data')
const URL= "https://rickandmortyapi.com/api/character/"
const findCharacterById = async (id) => {
    //const character = data.find((char) => char.id == id)
    //const fetchData = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    const fetchData = await axios.get(URL + id)
    const character = fetchData.data

    if (!character) throw Error('El personaje no existe')
    return character
}

module.exports = {
    findCharacterById,
}