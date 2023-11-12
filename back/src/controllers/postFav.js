const {Favorite} = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const {id, name, gender, species, origin, image, status} = req.body;
        if (!name || !gender || !species || !origin || !image || !status)
        return res.status(401).send('Faltan datos');

        await Favorite.findOrCreate({
            where: {id, name, gender, species, origin, image, status}
        })
        const allFavs = await Favorite.findAll()
        return res.json(allFavs)
        

    } catch (error) {
        return res.status(500).send(error.message)

    }

}

module.exports = postFav;